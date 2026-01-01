// Actor.tsx
import { DefaultMap, type actiontype } from "../../../../components/Functions/_helpers"
import { EffectTags, StatEffect, nullEffect, type Effect } from "./Effect"
import type { Skill } from "./Skill"
import { StatBlockFactory, type StatBlock } from "./Statistic"

interface ActorInterface {
  name: string
  stats: StatBlock
  effects: DefaultMap<string, Effect>
  skills: Array<Skill>
}

export class Actor {
  private name: string
  private stats: StatBlock
  private effects: DefaultMap<string, Effect>
  private skills: Array<Skill>

  constructor({ name, stats, skills, effects }: ActorInterface) {
    this.name = name
    this.stats = stats
    this.effects = effects
    this.skills = skills
  }

  getName(): string {
    return this.name
  }

  getStat(key: string) {
    let actualStat = this.stats.get(key).get()
    const statEffects = Array.from(this.effects.values())
      .filter((value) => value.getTags().has(EffectTags.Nerf))
      .map((value) => value as StatEffect)
    for (const effect of statEffects) {
      const mod = effect.getMods(key)
      actualStat = actualStat + mod
    }
    return Math.max(0, actualStat)
  }

  getStatMax(key: string) {
    return this.stats.get(key).getMax()
  }

  getStatBase(key: string) {
    return this.stats.get(key).getBase()
  }

  getStatRenew(key: string) {
    return this.stats.get(key).getRenew()
  }

  setStat(key: string, value: actiontype<number>) {
    return this.stats.get(key).set(value)
  }

  setStatMax(key: string, value: actiontype<number>) {
    return this.stats.get(key).setMax(value)
  }

  setStatRenew(key: string, value: actiontype<number>) {
    return this.stats.get(key).setRenew(value)
  }

  getEffects(): DefaultMap<string, Effect> {
    return this.effects
  }

  getSkills(): Array<Skill> {
    return this.skills
  }
}

interface AbstractActorFactory {
  createActor({ name }: { name: string }): Actor
}

export class ActorFactory implements AbstractActorFactory {
  createActor({
    name,
    health,
    stamina,
    strength,
    focus,
    maxhealth,
    maxstamina,
    renewstamina,
    renewhealth,
    skills,
  }: {
    name?: string
    health?: number
    stamina?: number
    strength?: number
    focus?: number
    maxhealth?: number
    maxstamina?: number
    renewstamina?: number
    renewhealth?: number
    skills?: Array<Skill>
  }): Actor {
    const statBlockFactory = new StatBlockFactory()
    return new Actor({
      name: name ?? "Bob",
      stats: statBlockFactory.createStatBlock({
        health,
        stamina,
        strength,
        focus,
        maxhealth,
        maxstamina,
        renewstamina,
        renewhealth,
      }),
      effects: new DefaultMap<string, Effect>(nullEffect),
      skills: skills ?? [],
    })
  }
}
