// Skills.Catalog.tsx
import {
  DefaultMap,
  randomIndex,
  randomRange,
} from "../../../../components/Functions/_helpers"
import { StatName } from "./Statistic"
import { costs, requirements, SkillTags, SkillFactory, Skill } from "./Skill"
import { EffectFactory, EffectTags, StatEffect } from "./Effect"
import { DamageTags } from "./Battle.Mediator"

const skillCatalog = new SkillFactory()
const effectCatalog = new EffectFactory()

const nullSkill = skillCatalog.createSkill({})

const standardAttack = skillCatalog.createAttack({
  name: "Standard Attack",
  costs: costs({ stamina: 50 }),
  damage: 10,
  description: "Deal 10 damage.",
})
const normalAttack = skillCatalog.createAttack({
  name: "Normal Attack",
  costs: costs({ stamina: 50 }),
  damage: () => 8 + randomRange(4),
  description: "Deal 8..12 damage.",
})
const typicalStrike = skillCatalog.createAttack({
  name: "Typical Strike",
  requirements: requirements({ strength: 2 }),
  costs: costs({ stamina: 50 }),
  damage: ({ performer }) =>
    Math.floor(performer.getStat(StatName.STRENGTH) / 2),
  type: new Set([DamageTags.Physical]),
  description: "Deal damage proportional with the performer's strength.",
})
const basicStrike = skillCatalog.createAttack({
  name: "Basic Strike",
  requirements: requirements({ strength: 3 }),
  costs: costs({ stamina: 50 }),
  damage: ({ performer }) =>
    Math.floor(performer.getStat(StatName.STRENGTH) * 0.4) +
    randomRange(performer.getStat(StatName.STRENGTH) / 4),
  type: new Set([DamageTags.Physical]),
  description: `Deal damage proportional with the performer's strength, 
    with some variance.`,
})
const quickShot = skillCatalog.createSkill({
  name: "Quick Shot",
  requirements: requirements({ focus: 2 }),
  costs: costs({ stamina: 40 }),
  script: ({ performer, target, mediator }) => {
    mediator.damage(
      target,
      Math.floor(performer.getStat(StatName.FOCUS) / 2),
      new Set([DamageTags.Psychic])
    )
    mediator.apply(
      performer,
      effectCatalog.statEffect({
        id: "_focusdown_" + mediator.genID(),
        mods: new Map().set(StatName.FOCUS, -2),
        duration: 200,
        log: `${performer.getName()} lost 2 focus temporarily!`,
      })
    )
  },
  tags: new Set([SkillTags.Attack]),
  description: `Deal damage proportional with the performer's focus, 
    but lowers focus temporarily.`,
})

const normalHeal = skillCatalog.createSkill({
  name: "Normal Heal",
  requirements: requirements({ strength: 5, focus: 5 }),
  costs: costs({ stamina: 75, strength: 1, focus: 1 }),
  script: ({ performer, mediator }) =>
    mediator.recover(performer, 8 + randomRange(8)),
  tags: new Set([SkillTags.Heal]),
  description: "Recover 8..12 health.",
})
const strengthHeal = skillCatalog.createSkill({
  name: "Strength Heal",
  requirements: requirements({ strength: 10, focus: 5 }),
  costs: costs({
    stamina: 75,
    strength: ({ performer }) => performer.getStat(StatName.STRENGTH) - 10,
    focus: 1,
  }),
  script: ({ performer, mediator }) =>
    mediator.recover(
      performer,
      performer.getStat(StatName.STRENGTH) / 2 +
        randomRange(performer.getStat(StatName.STRENGTH))
    ),
  tags: new Set([SkillTags.Heal]),
  description: `Recover health proportional to your strength, 
  with some variance.`,
})
const focusHeal = skillCatalog.createSkill({
  name: "Focus Heal",
  requirements: requirements({ focus: 10, strength: 5 }),
  costs: costs({
    stamina: 75,
    strength: 1,
  }),
  script: ({ performer, mediator }) => {
    mediator.recover(
      performer,
      performer.getStat(StatName.FOCUS) / 4 +
        randomRange(performer.getStat(StatName.FOCUS) / 2)
    )
    mediator.apply(
      performer,
      effectCatalog.statEffect({
        id: "_focusdown_" + mediator.genID(),
        mods: new Map().set(StatName.FOCUS, -10),
        duration: 200,
        log: `${performer} lost 10 focus temporarily!`,
      })
    )
  },
  tags: new Set([SkillTags.Heal]),
  description: `Recover health proportional to your focus, 
  with some variance.`,
})
const staminaHeal = skillCatalog.createSkill({
  name: "Stamina Heal",
  requirements: requirements({
    stamina: 50,
    strength: 10,
    focus: 10,
  }),
  costs: costs({
    stamina: ({ performer }) => performer.getStat(StatName.STAMINA),
  }),
  script: ({ performer, mediator }) =>
    mediator.recover(
      performer,
      performer.getStat(StatName.STAMINA) / 20 +
        randomRange(performer.getStat(StatName.STAMINA) / 20)
    ),
  tags: new Set([SkillTags.Heal]),
  description: `Recover health proportional to your stamina, 
  with some variance.`,
})

const strengthUp = skillCatalog.createSkill({
  name: "Strength Up",
  costs: costs({ stamina: 75, strength: -1 }),
  script: ({ performer, mediator }) => {
    mediator.addLog(`${performer.getName()} gained 1 strength!`)
  },
  tags: new Set([SkillTags.Buff]),
  description: "Gain 1 strength.",
})
const focusUp = skillCatalog.createSkill({
  name: "Focus Up",
  costs: costs({ stamina: 75, focus: -1 }),
  script: ({ performer, mediator }) => {
    mediator.addLog(`${performer.getName()} gained 1 focus!`)
  },
  tags: new Set([SkillTags.Buff]),
  description: "Gain 1 focus.",
})
const strengthBoost = skillCatalog.createBoost({
  name: "Strength Boost",
  costs: costs({ stamina: 40 }),
  effect: (arg) =>
    effectCatalog.statEffect({
      id: "_strengthup_" + arg?.mediator?.genID(),
      mods: new Map().set(StatName.STRENGTH, 2),
      tickScript: ({ event }) => {
        event.updateMod(StatName.STRENGTH, (prev) => prev - 1)
      },
      timer: 100,
      log: arg ? `${arg.performer} gained 2 strength temporarily!` : "",
    }),
  tags: new Set([SkillTags.Buff]),
  description: "Gain 2 strength temporarily.",
})
const focusBoost = skillCatalog.createBoost({
  name: "Focus Boost",
  costs: costs({ stamina: 40 }),
  effect: (arg) =>
    effectCatalog.statEffect({
      id: "_focusup_" + arg?.mediator?.genID(),
      mods: new Map().set(StatName.FOCUS, 2),
      tickScript: ({ event }) => {
        event.updateMod(StatName.FOCUS, (prev) => prev - 1)
      },
      timer: 100,
      log: arg ? `${arg.performer} gained 2 focus temporarily!` : "",
    }),
  tags: new Set([SkillTags.Buff]),
  description: "Gain 2 focus temporarily.",
})
const encourageBoost = skillCatalog.createBoost({
  name: "Encourage",
  costs: costs({ stamina: 40 }),
  effect: () =>
    effectCatalog.statEffect({
      name: "Encouraged",
      mods: new Map().set(StatName.STRENGTH, 2).set(StatName.FOCUS, 2),
      duration: 100,
    }),
  tags: new Set([SkillTags.Buff]),
  description: "Gain 2 focus temporarily.",
})
const strengthGambit = skillCatalog.createSkill({
  name: "Strength Gambit",
  costs: costs({ stamina: 150, health: 15, strength: -3 }),
  script: ({ performer, mediator }) => {
    mediator.addLog(
      `${performer.getName()} gained 3 strength, 
      but lost 15 health!`
    )
  },
  tags: new Set([SkillTags.Buff]),
  description: "Gain 3 strength at the cost of some health.",
})
const focusGambit = skillCatalog.createSkill({
  name: "Focus Gambit",
  costs: costs({ stamina: 150, health: 15, focus: -3 }),
  script: ({ performer, mediator }) => {
    mediator.addLog(
      `${performer.getName()} gained 3 focus, 
      but lost 15 health!`
    )
  },
  tags: new Set([SkillTags.Buff]),
  description: "Gain 3 focus at the cost of some health.",
})

const shield = skillCatalog.createBoost({
  name: "Shield",
  costs: costs({ stamina: 50 }),
  effect: () =>
    effectCatalog.shieldEffect({
      name: "Shield",
      health: 15,
      duration: 150,
      tags: new Set([EffectTags.ProcDamage]),
    }),
  tags: new Set([SkillTags.Shield]),
  description: "Gain a weak, breakable, temporary shield.",
})
const sturdyArmor = skillCatalog.createBoost({
  name: "Sturdy Armor",
  costs: costs({ stamina: 150 }),
  effect: () =>
    effectCatalog.shieldEffect({
      name: "Sturdy Armor",
      health: 50,
      defense: 5,
      duration: 450,
      tags: new Set([EffectTags.ProcDamage]),
    }),
  tags: new Set([SkillTags.Shield]),
  description: "Gain a weak but long lasting shield.",
})
const glassScreen = skillCatalog.createBoost({
  name: "Glass Screen",
  costs: costs({ stamina: 50 }),
  effect: () =>
    effectCatalog.shieldEffect({
      name: "Glass Screen",
      defense: 50,
      duration: 150,
      count: 1,
      tags: new Set([EffectTags.ProcDamage]),
    }),
  tags: new Set([SkillTags.Shield]),
  description: "Gain a single use, highly protective shield.",
})

const strengthDown = skillCatalog.createSkill({
  name: "Strength Down",
  costs: costs({ stamina: 75 }),
  script: ({ target, mediator }) => {
    target.setStat(StatName.STRENGTH, (prev) => prev - 1)
    mediator.addLog(`${target.getName()} lost 1 strength!`)
  },
  tags: new Set([SkillTags.Nerf]),
  description: "Give a target -1 strength.",
})
const focusDown = skillCatalog.createSkill({
  name: "Focus Down",
  costs: costs({ stamina: 75 }),
  script: ({ performer: target, mediator }) => {
    target.setStat(StatName.FOCUS, (prev) => prev - 1)
    mediator.addLog(`${target.getName()} lost 1 focus!`)
  },
  tags: new Set([SkillTags.Nerf]),
  description: "Give a target -1 focus.",
})
const weakenAfflict = skillCatalog.createAfflict({
  name: "Weaken",
  costs: costs({ stamina: 60 }),
  effect: (arg) =>
    effectCatalog.statEffect({
      id: "_strengthdown_" + arg?.mediator?.genID(),
      mods: new Map().set(StatName.STRENGTH, -3),
      tickScript: ({ event }) => {
        event.updateMod(StatName.STRENGTH, (prev) => prev + 1)
      },
      timer: 100,
      log: `${arg?.target?.getName()} lost 3 strength temporarily!`,
    }),
  tags: new Set([SkillTags.Nerf]),
  description: "Decrease target's strength temporarily.",
})
const distractAfflict = skillCatalog.createAfflict({
  name: "Distract",
  costs: costs({ stamina: 60 }),
  effect: (arg) =>
    effectCatalog.statEffect({
      id: "_focusdown_" + arg?.mediator?.genID(),
      mods: new Map().set(StatName.FOCUS, -3),
      duration: 200,
      log: `${arg?.target?.getName()} lost 3 focus temporarily!`,
    }),
  tags: new Set([SkillTags.Nerf]),
  description: "Decrease target's focus temporarily.",
})

const multiStrike = skillCatalog.createSkill({
  name: "Multi-Strike",
  requirements: requirements({ strength: 8 }),
  costs: costs({ stamina: 100 }),
  script: ({ performer, target, mediator }) => {
    const hitCount = 2 + randomRange(4)
    for (let i = 0; i < hitCount; i++) {
      mediator.damage(
        target,
        Math.floor(performer.getStat(StatName.STRENGTH) / 8) +
          randomRange(performer.getStat(StatName.STRENGTH) / 4),
        new Set([DamageTags.Physical])
      )
    }
    mediator.addLog(`${target.getName()} was struck ${hitCount} times!`)
  },
  tags: new Set([SkillTags.Attack, SkillTags.Multi]),
  description: `Strike multiple times, 
    each time dealing damage based on strength.`,
})
const pinBarrage = skillCatalog.createSkill({
  name: "Pin Barrage",
  requirements: requirements({ focus: 12 }),
  costs: costs({ stamina: 100 }),
  script: ({ performer, target, mediator }) => {
    const hitCount =
      Math.floor(performer.getStat(StatName.FOCUS) / 4) +
      randomRange(performer.getStat(StatName.FOCUS) * 1.5)
    for (let i = 0; i < hitCount; i++) {
      mediator.damage(target, 1, new Set([DamageTags.Psychic]))
    }
    mediator.addLog(`${target.getName()} was struck ${hitCount} times!`)
  },
  tags: new Set([SkillTags.Attack, SkillTags.Multi]),
  description: "Strike multiple times based on your focus.",
})
const healAndHurt = skillCatalog.createSkill({
  name: "Heal & Hurt",
  requirements: requirements({ strength: 4, focus: 4 }),
  costs: costs({ stamina: 100 }),
  script: ({ performer, target, mediator }) => {
    mediator.recover(
      performer,
      Math.floor(performer.getStat(StatName.FOCUS) / 4)
    )
    mediator.damage(
      target,
      Math.floor(performer.getStat(StatName.STRENGTH) / 4)
    )
  },
  tags: new Set([SkillTags.Heal, SkillTags.Attack]),
  description: `Deal damage proportional with the performer's strength, 
    then heal proportional with the performer's focus.`,
})
const vampire = skillCatalog.createSkill({
  name: "Vampire",
  requirements: requirements({ strength: 10, focus: 5 }),
  costs: costs({ stamina: 70, focus: 1 }),
  script: ({ performer, target, mediator }) => {
    const drain = mediator.damage(
      target,
      Math.floor(performer.getStat(StatName.STRENGTH) / 4) +
        randomRange(performer.getStat(StatName.STRENGTH) / 2),
      new Set([DamageTags.Physical, DamageTags.Piercing])
    )
    mediator.recover(performer, drain)
  },
  tags: new Set([SkillTags.Attack, SkillTags.Heal]),
  description: `Deal damage proportional with the performer's strength, 
    then heal equal to the damage dealt.`,
})

const regenBoost = skillCatalog.createBoost({
  name: "Peaceful Recover",
  costs: costs({ stamina: 100 }),
  effect: () =>
    effectCatalog.customEffect({
      name: "Peaceful Recover",
      tickScript: ({ target, mediator }) => {
        mediator.recover(target, 1)
      },
      count: 1,
      duration: 300,
      timer: 15,
      tags: new Set([EffectTags.ProcDamage]),
    }),
  tags: new Set([SkillTags.Heal, SkillTags.Boost]),
  description: "The performer slowly recovers health until they take damage.",
})
const doTAfflict = skillCatalog.createAfflict({
  name: "Lingering Pain",
  costs: costs({ stamina: 50 }),
  effect: (arg) =>
    effectCatalog.customEffect({
      id: "_doT_" + arg?.mediator?.genID(),
      tickScript: ({ target, mediator }) => {
        mediator.damage(target, 1)
      },
      duration: 500,
      timer: 100,
      log: `${arg?.target?.getName()} feels sore!`,
    }),
  tags: new Set([SkillTags.Attack, SkillTags.Afflict]),
  description: `The target slowly takes damage over a long duration. 
    Stackable.`,
})

const flamingFist = skillCatalog.createSkill({
  name: "Flaming Fist",
  requirements: requirements({ strength: 12, focus: 12 }),
  costs: costs({ stamina: 100 }),
  script: ({ performer, target, mediator }) => {
    mediator.damage(
      target,
      Math.floor(performer.getStat(StatName.STRENGTH) / 4) +
        randomRange(performer.getStat(StatName.STRENGTH) / 2),
      new Set([DamageTags.Physical])
    )
    mediator.apply(
      target,
      effectCatalog.customEffect({
        id: "_firedot_" + mediator.genID(),
        name: "Burn",
        tickScript: ({ target, mediator }) => {
          mediator.damage(
            target,
            1 + randomRange(5),
            new Set([DamageTags.Fire])
          )
        },
        duration: (1 + randomRange(10)) * 30,
        timer: 30,
        log: `${target.getName()} is lit ablaze!`,
      })
    )
  },
  tags: new Set([SkillTags.Attack, SkillTags.Afflict]),
  description: `Deal damage proportional with the performer's strength, 
    and deal lingering damage.`,
})

const overloadedStrike = skillCatalog.createAttack({
  name: "Overloaded Strike",
  requirements: requirements({ strength: 15 }),
  costs: costs({
    stamina: 250,
    strength: ({ performer }) => performer.getStat(StatName.STRENGTH),
  }),
  damage: ({ performer }) => performer.getStat(StatName.STRENGTH) * 3,
  type: new Set([DamageTags.Physical]),
  description: `Deal damage greatly proportional to your strength, 
    but lose all your strength.`,
})
const strategicShot = skillCatalog.createSkill({
  name: "Strategic Shot",
  requirements: requirements({ focus: 15 }),
  costs: costs({
    stamina: 250,
    focus: ({ performer }) => performer.getStat(StatName.FOCUS),
  }),
  script: ({ performer, target, mediator }) => {
    const magnitude = performer.getStat(StatName.FOCUS) * 3
    mediator.damage(target, magnitude, new Set([DamageTags.Psychic]))
    mediator.apply(
      performer,
      effectCatalog.statEffect({
        id: "_focusdown_" + mediator.genID(),
        mods: new Map().set(StatName.FOCUS, -magnitude),
        tickScript: ({ event }) => {
          event.updateMod(StatName.FOCUS, (prev) => prev + 1)
        },
        timer: 50,
      })
    )
  },
  description: `Deal damage proportional with the performer's focus, 
    but lose all your focus temporarily.`,
})

const armWrestle = skillCatalog.createSkill({
  name: "Arm Wrestle",
  requirements: requirements({
    focus: 8,
    strength: ({ target }) =>
      Math.max(15, target.getStat(StatName.STRENGTH) + 1),
  }),
  costs: costs({
    stamina: 250,
  }),
  script: ({ performer, target, mediator }) => {
    const diff =
      performer.getStat(StatName.STRENGTH) - target.getStat(StatName.STRENGTH)
    if (diff > 0) {
      mediator.damage(target, diff * 3, new Set([DamageTags.Physical]))
      effectCatalog.statEffect({
        id: "_strengthdown_" + mediator.genID(),
        mods: new Map().set(StatName.STRENGTH, Math.min(0, -diff)),
        tickScript: ({ event }) => {
          event.updateMod(StatName.STRENGTH, (prev) => prev + 1)
        },
        timer: 100,
      })
    } else
      mediator.addLog(
        `${performer.getName()} could not outwrestle ${target.getName()}...`
      )
  },
  tags: new Set([SkillTags.Attack]),
  description:
    "Deal damage proportional to how much more strength you have than your opponent.",
})
const mindBlow = skillCatalog.createSkill({
  name: "Mind Blow",
  requirements: requirements({
    strength: 8,
    focus: ({ target }) => Math.max(15, target.getStat(StatName.FOCUS) + 1),
  }),
  costs: costs({
    stamina: 250,
  }),
  script: ({ performer, target, mediator }) => {
    const diff =
      performer.getStat(StatName.FOCUS) - target.getStat(StatName.FOCUS)
    if (diff > 0) {
      mediator.damage(target, diff * 3, new Set([DamageTags.Psychic]))
      mediator.apply(
        performer,
        effectCatalog.statEffect({
          id: "_focusdown_" + mediator.genID(),
          mods: new Map().set(StatName.FOCUS, Math.min(0, -diff)),
          tickScript: ({ event }) => {
            event.updateMod(StatName.FOCUS, (prev) => prev + 1)
          },
          timer: 100,
        })
      )
    } else
      mediator.addLog(
        `${performer.getName()} could not outthink ${target.getName()}...`
      )
  },
  tags: new Set([SkillTags.Attack]),
  description:
    "Deal damage proportional to how much more focus you have than your opponent.",
})

const specialAttack = skillCatalog.createAttack({
  name: "Special Attack",
  requirements: requirements({ stamina: 100, strength: 10, focus: 10 }),
  costs: costs({
    stamina: ({ performer }) => performer.getStat(StatName.STAMINA),
  }),
  damage: ({ performer }) => {
    const statAve =
      performer.getStat(StatName.STRENGTH) + performer.getStat(StatName.FOCUS)
    const stamina = performer.getStat(StatName.STAMINA)
    return (
      Math.floor(statAve / 5) +
      randomRange(
        ((stamina + Math.max(stamina - 100, 0) ** 1.5) * statAve ** 1.5) / 20000
      )
    )
  },
  tags: new Set([SkillTags.Signature]),
  description: `Has a increasing chance of dealing high damage the more stamina you have.`,
})

const lastResort = skillCatalog.createSkill({
  name: "The Last Resort",
  requirements: requirements({ health: 1 }),
  costs: costs({
    stamina: 250,
  }),
  script: ({ performer, target, mediator }) => {
    mediator.damage(
      target,
      10 +
        performer.getStat(StatName.STRENGTH) +
        performer.getStat(StatName.FOCUS)
    )
    mediator.apply(
      performer,
      effectCatalog.customEffect({
        id: "_death_" + mediator.genID(),
        tickScript: ({ target }) => {
          target.setStat(StatName.HEALTH, 0)
        },
        duration: 500,
      })
    )
  },
  tags: new Set([SkillTags.Attack, SkillTags.Final]),
  description:
    "Deal a great amount of damage, then become defeated shortly after.",
})

const clearMind = skillCatalog.createSkill({
  name: "Clear Mind",
  /* requirements: requirements({
    focus: ({ performer }) =>
      performer.getStat(StatName.FOCUS) + performer.getStat(StatName.FOCUS, false, true),
  }), */
  costs: costs({ stamina: 150 }),
  script: ({ performer, mediator }) => {
    if (
      performer.getStatBase(StatName.FOCUS) <=
        performer.getStat(StatName.FOCUS) &&
      [...performer.getEffects().keys()].every(
        (value) => !value.includes("focusdown")
      )
    )
      performer.setStat(StatName.FOCUS, (prev) => prev + 3)
    else {
      if (
        performer.getStatBase(StatName.FOCUS) >
        performer.getStat(StatName.FOCUS)
      )
        performer.setStat(StatName.FOCUS, performer.getStatBase(StatName.FOCUS))
      for (const [id, effect] of performer.getEffects())
        if (effect.getID().includes("focusdown"))
          performer.getEffects().delete(id)
    }
    mediator.addLog(`${performer.getName()} cleared their mind!`)
  },
  tags: new Set([SkillTags.Buff, SkillTags.Signature]),
  description: `Remove focus drain. If you have no focus drain, gain 3 focus.`,
})
const statReset = skillCatalog.createSkill({
  name: "Stat Reset",
  costs: costs({ stamina: 250 }),
  script: ({ target, mediator }) => {
    target.setStat(StatName.STRENGTH, target.getStatBase(StatName.STRENGTH))
    target.setStat(StatName.FOCUS, target.getStatBase(StatName.FOCUS))
    for (const effect of target.getEffects().values())
      mediator.remove(target, effect)
    mediator.addLog(`${target.getName()} had their stats and effects reset!`)
  },
  tags: new Set([SkillTags.Signature]),
  description: `Set the target's stats back to their original values, 
  and remove their effects.`,
})
const statStabilize = skillCatalog.createSkill({
  name: "Stat Stabilize",
  costs: costs({
    stamina: 250,
  }),
  script: ({ performer, mediator }) => {
    for (const effect of [...performer.getEffects().values()]
      .filter(
        (value) =>
          value.getID().includes("strength") || value.getID().includes("focus")
      )
      .map((value) => value as StatEffect)) {
      performer.setStat(
        StatName.STRENGTH,
        (prev) => prev + effect.getMods(StatName.STRENGTH)
      )
      performer.setStat(
        StatName.FOCUS,
        (prev) => prev + effect.getMods(StatName.FOCUS)
      )
      mediator.remove(performer, effect)
    }
    mediator.addLog(`${performer.getName()} had their stats stabilized!`)
  },
  tags: new Set([SkillTags.Signature]),
  description: `Set the target's stats back to their original values, 
  and remove their effects.`,
})

/**Ideas
 * Random Perform
 * Multi-team oriented skills
 *  Heal teammate
 *  Attack multiple foes
 *  Defend teammate
 */

export const allSkills = [
  nullSkill,

  standardAttack,
  normalAttack,

  typicalStrike,
  basicStrike,
  quickShot,

  normalHeal,
  strengthHeal,
  focusHeal,
  staminaHeal,

  strengthUp,
  focusUp,
  strengthBoost,
  focusBoost,
  strengthGambit,
  focusGambit,

  shield,
  sturdyArmor,
  glassScreen,

  strengthDown,
  focusDown,
  weakenAfflict,
  distractAfflict,

  multiStrike,
  pinBarrage,

  healAndHurt,
  vampire,

  regenBoost,
  doTAfflict,

  flamingFist,

  overloadedStrike,
  strategicShot,
  armWrestle,
  mindBlow,

  specialAttack,
  lastResort,

  clearMind,
  statReset,
  statStabilize,
  encourageBoost,
]

export const legalSkills = [
  basicStrike,
  quickShot,
  encourageBoost,
  normalHeal,
  strengthUp,
  focusBoost,
  shield,
  sturdyArmor,
  glassScreen,
  weakenAfflict,
  distractAfflict,
  multiStrike,
  vampire,
  flamingFist,
  regenBoost,
  overloadedStrike,
  mindBlow,
  clearMind,
  specialAttack,
]

const startingSkills = [basicStrike, normalHeal, strengthUp, shield]

const strongMan = [
  typicalStrike,
  typicalStrike,
  basicStrike,
  basicStrike,
  strengthBoost,
  strengthBoost,
  strengthBoost,
  strengthBoost,
  strengthUp,
  strengthUp,
  strengthUp,
  strengthUp,
  strengthGambit,
  multiStrike,
  multiStrike,
  overloadedStrike,
  armWrestle,
  strengthHeal,
]

const masterMind = [
  quickShot,
  quickShot,
  quickShot,
  quickShot,
  focusUp,
  focusUp,
  focusUp,
  focusUp,
  focusBoost,
  focusBoost,
  focusBoost,
  focusBoost,
  pinBarrage,
  pinBarrage,
  strategicShot,
  mindBlow,
  focusHeal,
]

const longGame = [
  shield,
  shield,
  shield,
  glassScreen,
  glassScreen,
  glassScreen,
  sturdyArmor,
  sturdyArmor,
  staminaHeal,
  normalAttack,
  normalAttack,
]

const allIn = [
  strengthBoost,
  strengthGambit,
  focusBoost,
  focusGambit,
  mindBlow,
  overloadedStrike,
  lastResort,
]

const OpponentSkillSets = [
  startingSkills,
  legalSkills,
  strongMan,
  masterMind,
  longGame,
  allIn,
]

export const opponentRoles = new DefaultMap<string, Skill[]>(
  randomIndex(OpponentSkillSets)
)
opponentRoles.set("Starter", startingSkills)
opponentRoles.set("Strong", strongMan)
opponentRoles.set("Smart", masterMind)
opponentRoles.set("Defensive", longGame)
opponentRoles.set("Offensive", allIn)
opponentRoles.set("Random", allSkills)
opponentRoles.set("Any", randomIndex(OpponentSkillSets))
opponentRoles.set("DEBUG", [])
