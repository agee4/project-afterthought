// Battle.tsx
import type { Actor } from "./Actor"
import type { DamageTags } from "./Battle.Mediator"
import type { Effect } from "./Effect"
import type { Log } from "./Log"
import type { Skill } from "./Skill"

export interface BattleInterface {
  player: Actor
  opponent: Actor
  log: Log
}

export class Battle {
  private player: Actor
  private opponent: Actor
  private log: Log

  constructor({ player, opponent, log }: BattleInterface) {
    this.player = player
    this.opponent = opponent
    this.log = log
  }

  getPlayer(): Actor {
    return this.player
  }

  getOpponent(): Actor {
    return this.opponent
  }

  getLog(): Log {
    return this.log
  }
}

interface AbstractBattleFactory {
  createBattle({}): Battle
}

export class BattleFactory implements AbstractBattleFactory {
  createBattle({ player, opponent, log }: BattleInterface): Battle {
    return new Battle({ player, opponent, log })
  }
}

export interface BattleMediator {
  copy(): BattleMediator
  getBattle(): Battle
  addLog(log: string): string[]
  genID(): number
  tick(target: Actor): Actor
  perform(performer: Actor, target: Actor, skill: Skill): void
  damage(target: Actor, damage: number, type?: Set<DamageTags>): number
  recover(target: Actor, heal: number): number
  apply(target: Actor, effect: Effect): void
  remove(target: Actor, effect: Effect): boolean
}
