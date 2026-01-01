// Statistic.tsx
import type { actiontype } from "../../../../components/Functions/_helpers"

export const StatName = {
  HEALTH: "HEALTH",
  STAMINA: "STAMINA",
  STRENGTH: "STRENGTH",
  FOCUS: "FOCUS",
} as const
export type StatName = (typeof StatName)[keyof typeof StatName]

class Statistic {
  private value: number
  private base: number
  private max: number
  private renew: number

  constructor({
    value,
    base,
    max,
    renew,
  }: {
    value: number
    base?: number
    max?: number
    renew?: number
  }) {
    this.value = value
    this.base = base ?? value
    this.max = max ?? value
    this.renew = renew ?? 0
  }

  get(): number {
    return this.value
  }

  set(value: actiontype<number>): number {
    this.value = typeof value == "number" ? value : value(this.value)
    return this.value
  }

  getBase(): number {
    return this.base
  }

  setBase(value: actiontype<number>): number {
    this.base = typeof value == "number" ? value : value(this.value)
    return this.base
  }

  getMax(): number {
    return this.max
  }

  setMax(value: actiontype<number>): number {
    this.max = typeof value == "number" ? value : value(this.value)
    return this.max
  }

  getRenew(): number {
    return this.renew
  }

  setRenew(value: actiontype<number>): number {
    this.renew = typeof value == "number" ? value : value(this.value)
    return this.renew
  }
}

export class StatBlock {
  private stats: Map<string, Statistic>

  constructor({ stats }: { stats: Map<string, Statistic> }) {
    this.stats = stats
  }

  get(key: string): Statistic {
    return this.stats.get(key) ?? new Statistic({ value: 0 })
  }
}

interface AbstractStatBlockFactory {
  createStatBlock({}): StatBlock
}

export class StatBlockFactory implements AbstractStatBlockFactory {
  createStatBlock({
    health,
    stamina,
    strength,
    focus,
    maxhealth,
    maxstamina,
    renewstamina,
    renewhealth,
  }: {
    health?: number
    stamina?: number
    strength?: number
    focus?: number
    maxhealth?: number
    maxstamina?: number
    renewstamina?: number
    renewhealth?: number
  }): StatBlock {
    const actorStatsMap = new Map<StatName, Statistic>()
    actorStatsMap.set(
      StatName.HEALTH,
      new Statistic({
        value: health ?? maxhealth ?? 100,
        max: maxhealth ?? 100,
        renew: renewhealth ?? 0,
      })
    )
    actorStatsMap.set(
      StatName.STAMINA,
      new Statistic({
        value: stamina ?? maxstamina ?? 0,
        max: maxstamina ?? 1000,
        renew: renewstamina ?? 10,
      })
    )
    actorStatsMap.set(
      StatName.STRENGTH,
      new Statistic({ value: strength ?? 10 })
    )
    actorStatsMap.set(StatName.FOCUS, new Statistic({ value: focus ?? 10 }))
    return new StatBlock({
      stats: actorStatsMap,
    })
  }
}
