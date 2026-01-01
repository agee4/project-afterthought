// Effect.tsx
import type { actiontype } from "../../../../components/Functions/_helpers"
import type { Actor } from "./Actor"
import type { BattleMediator } from "./Battle"
import type { DamageTags } from "./Battle.Mediator"
import { StatName } from "./Statistic"

export const EffectTags = {
  Shield: "Shield",
  Buff: "Buff",
  Nerf: "Nerf",
  Heal: "Heal",
  Hurt: "Hurt",
  ProcDamage: "ProcDamage",
  ProcRecover: "ProcRecover",
} as const
export type EffectTags = (typeof EffectTags)[keyof typeof EffectTags]

type eventScript<T> = ({
  event,
  target,
  mediator,
}: {
  event: T
  target: Actor
  mediator: BattleMediator
}) => void

interface EffectInterface<T> {
  id?: string
  name?: string
  duration?: number
  timer?: number
  tickScript?: eventScript<T>
  count?: number
  procScript?: eventScript<T>
  tags?: Set<EffectTags>
  log?: string
}

export class Effect {
  protected id: string
  protected name: string
  protected duration?: number
  protected timerCutoff: number
  protected timer: number
  protected tickScript?: eventScript<Effect>
  protected count?: number
  protected procScript?: eventScript<Effect>
  protected tags: Set<EffectTags>
  protected log?: string
  constructor(arg: EffectInterface<Effect>) {
    this.name = arg.name ?? ""
    this.id = arg.id ?? arg.name ?? ""
    this.duration = arg.duration
    this.timerCutoff = arg.timer ?? 0
    this.timer = 0
    this.tickScript = arg.tickScript
    this.count = arg.count
    this.procScript = arg.procScript
    this.tags = arg.tags ?? new Set<EffectTags>()
    this.log = arg.log
  }

  getID(): string {
    return this.id
  }

  getName(): string {
    return this.name
  }

  isExpired(): boolean {
    return (this.duration ?? 1) <= 0 || (this.count ?? 1) <= 0
  }

  getTags(): Set<EffectTags> {
    return this.tags
  }

  getLog(): string {
    return this.log ?? ""
  }

  tick(abs: { target: Actor; mediator: BattleMediator }) {
    if (this.duration) this.duration--
    this.timer++
    if (this.timer >= this.timerCutoff) {
      if (this.tickScript) this.tickScript({ event: this, ...abs })
      this.timer = 0
    }
  }

  proc(abs: { target: Actor; mediator: BattleMediator }) {
    if (this.count) this.count--
    if (this.procScript) this.procScript({ event: this, ...abs })
  }

  reapply(effect: Effect) {
    return effect
  }
}

export const nullEffect = new Effect({ id: "NULL" })

export class StatEffect extends Effect {
  protected mods: Map<string, number>
  constructor(
    arg: EffectInterface<StatEffect> & {
      mods: Map<string, number>
    }
  ) {
    super({
      ...arg,
      tickScript: arg.tickScript as eventScript<Effect> | undefined,
      procScript: arg.procScript as eventScript<Effect> | undefined,
      tags: (arg.tags ?? new Set<EffectTags>()).add(EffectTags.Nerf),
    })
    this.mods = arg.mods
  }

  getMods(statname: string): number {
    return this.mods.get(statname) ?? 0
  }

  updateMod(statname: string, magnitude: actiontype<number>) {
    if (!this.mods.has(statname)) return false
    else
      this.mods.set(
        statname,
        typeof magnitude == "number"
          ? magnitude
          : magnitude(this.mods.get(statname)!)
      )
    return true
  }

  isExpired(): boolean {
    return (
      super.isExpired() || [...this.mods.values()].every((value) => value == 0)
    )
  }
}

export class DefendEffect extends Effect {
  constructor(arg: EffectInterface<DefendEffect>) {
    super({
      ...arg,
      tickScript: arg.tickScript as eventScript<Effect> | undefined,
      procScript: arg.procScript as eventScript<Effect> | undefined,
      tags: (arg.tags ?? new Set<EffectTags>()).add(EffectTags.Shield),
    })
  }

  defend(damage: number, _type?: Set<DamageTags>) {
    return damage
  }
}

export class ShieldEffect extends DefendEffect {
  private defense?: number
  private health?: number
  private type?: Set<DamageTags>
  constructor(
    arg: EffectInterface<ShieldEffect> & {
      health?: number
      defense?: number
      type?: Set<DamageTags>
    }
  ) {
    super({
      ...arg,
      tickScript: arg.tickScript as eventScript<Effect> | undefined,
      procScript: arg.procScript as eventScript<Effect> | undefined,
      tags: (arg.tags ?? new Set<EffectTags>()).add(EffectTags.Shield),
    })
    this.defense = arg.defense
    this.health = arg.health
    this.type = arg.type
  }

  defend(damage: number, type?: Set<DamageTags>) {
    let defense = 0
    if (this.health) {
      if (!this.type || [...this.type].some((value) => type?.has(value))) {
        defense = Math.min(damage, this.health, this.defense ?? damage)
        this.health -= defense
      }
    } else if (!this.type || [...this.type].some((value) => type?.has(value)))
      defense = Math.min(damage, this.defense ?? 0)
    return defense
  }

  isExpired(): boolean {
    return super.isExpired() || (this.health ?? 1) <= 0
  }
}

export class EffectFactory {
  customEffect = (arg: EffectInterface<Effect>) => new Effect(arg)

  statEffect = (
    arg: EffectInterface<StatEffect> & {
      mods: Map<StatName, number>
    }
  ) => new StatEffect(arg)

  shieldEffect = (
    arg: EffectInterface<ShieldEffect> & {
      defense?: number
      health?: number
    }
  ) => new ShieldEffect(arg)
}
