// Skills.tsx
import { type Actor } from "./Actor"
import type { BattleMediator } from "./Battle"
import type { DamageTags } from "./Battle.Mediator"
import type { Effect } from "./Effect"
import { StatName } from "./Statistic"

type expressiontype<T> = ({
  performer,
  target,
}: {
  performer: Actor
  target: Actor
}) => T

type performtype<T> = T | expressiontype<T>

function performeval<T>(
  val: performtype<T>,
  performer: Actor,
  target: Actor
): T {
  return typeof val === "function"
    ? (val as expressiontype<T>)({
        performer,
        target,
      })
    : val
}

export interface PerformanceInterface {
  performer: Actor
  target: Actor
  mediator: BattleMediator
}

export const SkillTags = {
  Attack: "Attack",
  Buff: "Buff",
  Nerf: "Nerf",
  Boost: "Boost",
  Afflict: "Afflict",
  Heal: "Heal",
  Shield: "Shield",
  Multi: "Multi",
  Final: "Final",
  Signature: "Signature"
} as const
export type SkillTags = (typeof SkillTags)[keyof typeof SkillTags]

interface BaseSkillInterface {
  name?: string
  requirements?: SkillRequirements
  costs?: SkillCosts
  tags?: Set<SkillTags>
  description?: string
}

interface AbstractSkillRequirements {
  meetRequirements(arg: PerformanceInterface): boolean
}

class SkillRequirements implements AbstractSkillRequirements {
  protected stamina?: performtype<number>
  protected health?: performtype<number>
  protected strength?: performtype<number>
  protected focus?: performtype<number>
  protected excludeEffect?: string | Array<string>

  constructor({
    stamina,
    health,
    strength,
    focus,
    excludeEffect,
  }: {
    stamina?: performtype<number>
    health?: performtype<number>
    strength?: performtype<number>
    focus?: performtype<number>
    excludeEffect?: string | Array<string>
  }) {
    this.stamina = stamina
    this.health = health
    this.strength = strength
    this.focus = focus
    this.excludeEffect = excludeEffect
  }

  meetRequirements({ performer, target }: PerformanceInterface): boolean {
    if (this.stamina) {
      if (
        performer.getStat(StatName.STAMINA) <
        performeval(this.stamina, performer, target)
      )
        return false
    }
    if (this.health) {
      if (
        performer.getStat(StatName.HEALTH) <
        performeval(this.health, performer, target)
      )
        return false
    }
    if (this.strength) {
      if (
        performer.getStat(StatName.STRENGTH) <
        performeval(this.strength, performer, target)
      )
        return false
    }
    if (this.focus) {
      if (
        performer.getStat(StatName.FOCUS) <
        performeval(this.focus, performer, target)
      )
        return false
    }
    if (this.excludeEffect) {
      if (typeof this.excludeEffect == "string") {
        if (performer.getEffects().has(this.excludeEffect)) return false
      } else {
        for (const effect of this.excludeEffect)
          if (performer.getEffects().has(effect)) return false
      }
    }
    return true
  }
}

export function requirements({
  health,
  stamina,
  strength,
  focus,
  excludeEffect,
}: {
  health?: performtype<number>
  stamina?: performtype<number>
  strength?: performtype<number>
  focus?: performtype<number>
  excludeEffect?: string | Array<string>
}): AbstractSkillRequirements {
  return new SkillRequirements({
    health,
    stamina,
    strength,
    focus,
    excludeEffect: excludeEffect,
  })
}

interface AbstractSkillCosts extends AbstractSkillRequirements {
  pay(arg: PerformanceInterface): void
}

class SkillCosts extends SkillRequirements implements AbstractSkillCosts {
  constructor({
    stamina,
    health,
    strength,
    focus,
  }: {
    stamina?: performtype<number>
    health?: performtype<number>
    strength?: performtype<number>
    focus?: performtype<number>
  }) {
    super({ stamina, health, strength, focus })
  }

  pay({ performer, target }: PerformanceInterface) {
    if (this.stamina) {
      performer.setStat(StatName.STAMINA, (prev) =>
        Math.floor(prev - performeval(this.stamina!, performer, target))
      )
    }
    if (this.health) {
      performer.setStat(StatName.HEALTH, (prev) =>
        Math.floor(prev - performeval(this.health!, performer, target))
      )
    }
    if (this.strength) {
      performer.setStat(StatName.STRENGTH, (prev) =>
        Math.floor(prev - performeval(this.strength!, performer, target))
      )
    }
    if (this.focus) {
      performer.setStat(StatName.FOCUS, (prev) =>
        Math.floor(prev - performeval(this.focus!, performer, target))
      )
    }
  }
}

export function costs({
  health,
  stamina,
  strength,
  focus,
}: {
  health?: performtype<number>
  stamina?: performtype<number>
  strength?: performtype<number>
  focus?: performtype<number>
}): AbstractSkillCosts {
  return new SkillCosts({ health, stamina, strength, focus })
}

export class Skill {
  private name: string
  private requirements: AbstractSkillRequirements
  private costs: AbstractSkillCosts
  private tags: Set<SkillTags>
  private description?: string
  private script: (arg: PerformanceInterface) => void

  constructor({
    name,
    requirements,
    costs,
    tags,
    description,
    script,
  }: {
    name: string
    requirements: AbstractSkillRequirements
    costs: AbstractSkillCosts
    tags: Set<SkillTags>
    description?: string
    script: (arg: PerformanceInterface) => void
  }) {
    this.name = name
    this.requirements = requirements
    this.costs = costs
    this.tags = tags
    this.description = description
    this.script = script
  }

  getName(): string {
    return this.name
  }

  getCosts(): AbstractSkillCosts {
    return this.costs
  }

  getTags(): Set<SkillTags> {
    return this.tags
  }

  getDescription(): string {
    return this.description ?? ""
  }

  getScript() {
    return this.script
  }

  meetRequirements(performance: PerformanceInterface): boolean {
    return (
      this.requirements.meetRequirements(performance) &&
      this.costs.meetRequirements(performance)
    )
  }
}

export class SkillFactory {
  createSkill({
    name,
    requirements,
    costs,
    tags,
    description,
    script,
  }: BaseSkillInterface & {
    script?: (arg: PerformanceInterface) => void
  }): Skill {
    return new Skill({
      name: name ?? "__UNNAMEDSKILL",
      requirements: requirements ?? new SkillRequirements({}),
      costs: costs ?? new SkillCosts({}),
      tags: tags ?? new Set<SkillTags>(),
      description: description,
      script: script ?? (() => {}),
    })
  }

  createAttack({
    name,
    requirements,
    costs,
    tags,
    damage,
    type,
    description,
  }: BaseSkillInterface & {
    damage: performtype<number>
    type?: Set<DamageTags>
  }): Skill {
    return this.createSkill({
      name: name ?? "__UNNAMEDATTACK",
      requirements: requirements ?? new SkillRequirements({}),
      costs: costs ?? new SkillCosts({}),
      tags:
        tags?.add(SkillTags.Attack) ?? new Set<SkillTags>([SkillTags.Attack]),
      description: description,
      script: ({ performer, target, mediator }) => {
        mediator.damage(target, performeval(damage, performer, target), type)
      },
    })
  }

  createBoost({
    name,
    requirements,
    costs,
    tags,
    effect,
    reapplicable,
    description,
  }: BaseSkillInterface & {
    effect: (arg?: PerformanceInterface) => Effect
    reapplicable?: boolean
  }): Skill {
    const baseEffect = effect()
    return this.createSkill({
      name: name ?? "__UNNAMEDBOOST",
      requirements:
        requirements ??
        new SkillRequirements({
          excludeEffect: reapplicable ? undefined : baseEffect.getName(),
        }),
      costs: costs ?? new SkillCosts({}),
      tags: tags?.add(SkillTags.Boost) ?? new Set<SkillTags>([SkillTags.Boost]),
      description: description,
      script: (arg) => {
        arg.mediator.apply(arg.performer, effect(arg))
      },
    })
  }

  createAfflict({
    name,
    requirements,
    costs,
    tags,
    effect,
    reapplicable,
    description,
  }: BaseSkillInterface & {
    effect: (arg?: PerformanceInterface) => Effect
    reapplicable?: boolean
  }): Skill {
    const baseEffect = effect()
    return this.createSkill({
      name: name ?? "__UNNAMEDAFFLICT",
      requirements:
        requirements ??
        new SkillRequirements({
          excludeEffect: reapplicable ? undefined : baseEffect.getName(),
        }),
      costs: costs ?? new SkillCosts({}),
      tags:
        tags?.add(SkillTags.Afflict) ?? new Set<SkillTags>([SkillTags.Afflict]),
      description: description,
      script: (arg) => {
        arg.mediator.apply(arg.target, effect(arg))
      },
    })
  }
}
