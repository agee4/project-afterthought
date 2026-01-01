import type { Actor } from "./Actor"
import type { Battle, BattleMediator } from "./Battle"
import { Effect, EffectTags, type DefendEffect } from "./Effect"
import type { Skill } from "./Skill"
import { StatName } from "./Statistic"

export const DamageTags = {
  Physical: "Physical",
  Slashing: "Slashing",
  Piercing: "Piercing",
  Crushing: "Crushing",
  Psychic: "Psychic",
  Fire: "Fire",
} as const
export type DamageTags = (typeof DamageTags)[keyof typeof DamageTags]

export class RTBattleMediator implements BattleMediator {
  private battle: Battle
  private currentID: number

  constructor(battle: Battle, id?: number) {
    this.battle = battle
    this.currentID = id ?? 0
  }

  copy(): RTBattleMediator {
    return new RTBattleMediator(this.battle, this.currentID)
  }

  getBattle(): Battle {
    return this.battle
  }

  genID(): number {
    const id = this.currentID
    this.currentID++
    return id
  }

  addLog(log: string): string[] {
    return this.battle.getLog().add(log)
  }

  tick(target: Actor): Actor {
    if (target.getStat(StatName.STAMINA) < target.getStatMax(StatName.STAMINA))
      target.setStat(
        StatName.STAMINA,
        (prev) => prev + target.getStatRenew(StatName.STAMINA) / 10
      )
    if (target.getStat(StatName.HEALTH) < target.getStatMax(StatName.HEALTH))
      target.setStat(
        StatName.HEALTH,
        (prev) => prev + target.getStatRenew(StatName.HEALTH) / 100
      )
    target.getEffects().forEach((value, key, map) => {
      value.tick({ target, mediator: this })
      if (value.isExpired()) {
        if (value.getName()) {
          this.addLog(`${target.getName()} no longer has ${value.getName()}!`)
          this.addLog("---")
        }
        map.delete(key)
      }
    })
    return target
  }

  perform(performer: Actor, target: Actor, skill: Skill) {
    if (
      skill.meetRequirements({
        performer,
        target,
        mediator: this,
      })
    ) {
      this.addLog(`${performer.getName()} performed ${skill.getName()}!`)
      skill.getScript()({ performer, target, mediator: this })
      skill.getCosts().pay({
        performer,
        target,
        mediator: this,
      })
      this.addLog("---")
    }
  }

  damage(target: Actor, damage: number, type?: Set<DamageTags>): number {
    let actualDamage = Math.floor(damage)
    const shieldEffects = Array.from(target.getEffects().values())
      .filter((value) => value.getTags().has(EffectTags.Shield))
      .map((value) => value as DefendEffect)
    const procEffects = Array.from(target.getEffects().values()).filter(
      (value) =>
        value.getTags().has(EffectTags.ProcDamage) &&
        !value.getTags().has(EffectTags.Shield)
    )
    for (const effect of shieldEffects) {
      if (actualDamage > 0) {
        const shieldDefense = effect.defend(actualDamage, type)
        actualDamage = Math.max(0, actualDamage - shieldDefense)
        if (shieldDefense > 0)
          this.addLog(
            `${target.getName()}'s ${effect.getName()} blocked ${shieldDefense} damage!`
          )
        if (effect.getTags().has(EffectTags.ProcDamage))
          effect.proc({ target, mediator: this })
      }
    }
    if (actualDamage > 0) {
      target.setStat(StatName.HEALTH, (prev) => prev - actualDamage)
      this.addLog(
        `${target.getName()} took ${actualDamage} 
        ${[...(type?.values() ?? [])].join(" ")} damage!`
      )
      for (const effect of procEffects) {
        effect.proc({ target, mediator: this })
      }
    }
    for (const effect of procEffects.concat(shieldEffects)) {
      if (effect.isExpired()) {
        this.addLog(`${target.getName()} no longer has ${effect.getName()}`)
        target.getEffects().delete(effect.getName())
      }
    }
    return actualDamage
  }

  recover(target: Actor, heal: number): number {
    const actualheal = Math.floor(
      Math.min(
        Math.max(
          target.getStatMax(StatName.HEALTH) - target.getStat(StatName.HEALTH),
          0
        ),
        heal
      )
    )
    target.setStat(StatName.HEALTH, (prev) => prev + actualheal)
    this.addLog(`${target.getName()} recovered ${actualheal} health!`)
    return actualheal
  }

  apply(target: Actor, effect: Effect) {
    const targetEffects = target.getEffects()
    const effectName = effect.getName()
    const effectID = effect.getID()
    const effectLog = effect.getLog()
    if (targetEffects.has(effectID)) {
      target
        .getEffects()
        .set(effectID, targetEffects.get(effectID).reapply(effect))
      if (effectName)
        this.addLog(`${target.getName()} intensified ${effectName}!`)
    } else {
      targetEffects.set(effectID, effect)
      if (effectLog) this.addLog(effectLog)
      else if (effectName)
        this.addLog(`${target.getName()} now has ${effectName}!`)
    }
  }

  remove(target: Actor, effect: Effect) {
    return target.getEffects().delete(effect.getName())
  }
}

export type BattleAction =
  | { type: "tick" }
  | { type: "perform"; skill: Skill; performer: Actor; target: Actor }
  | { type: "set"; battle: Battle }
  | {
      type: "script"
      script: ({
        player,
        opponent,
        mediator,
      }: {
        player: Actor
        opponent: Actor
        mediator: BattleMediator
      }) => void
    }

export function rtBattleReducer() {
  return (mediator: BattleMediator, action: BattleAction) => {
    const battle = mediator.getBattle()
    const player = battle.getPlayer()
    const opponent = battle.getOpponent()
    switch (action.type) {
      case "tick": {
        mediator.tick(player)
        mediator.tick(opponent)
        return mediator.copy()
      }
      case "perform": {
        if (
          action.skill.meetRequirements({
            performer: action.performer,
            target: action.target,
            mediator: mediator,
          })
        ) {
          mediator.perform(action.performer, action.target, action.skill)
        }
        return mediator.copy()
      }
      case "set": {
        return new RTBattleMediator(action.battle)
      }
      case "script": {
        action.script({
          player,
          opponent,
          mediator,
        })
        return mediator.copy()
      }
      default:
        throw Error("Unknown action")
    }
  }
}
