// Skills.Logic.tsx
import { randomIndex } from "../../../../components/Functions/_helpers"
import { SkillTags, type PerformanceInterface, Skill } from "./Skill"
import { StatName } from "./Statistic"

/**Randomly selects a Skill from performer's skillset to perform.
 * Optionally filter Skills chosen based on tags.
 */
const randomSkill = (
  skills: Skill[],
  filter: (skill: Skill) => boolean = () => true
): Skill | undefined => {
  const filteredSkills = skills.filter(filter)
  return randomIndex(filteredSkills.length > 0 ? filteredSkills : skills)
}

/**Does not only heal if the performer has full health. Heal if on low health. */
export const randomSkillSmart = ({
  performer,
  target,
  mediator,
}: PerformanceInterface): Skill | undefined => {
  const allSkills = performer
    .getSkills()
    .filter((skill) => skill.meetRequirements({ performer, target, mediator }))
  if (
    performer.getStat(StatName.HEALTH) >= performer.getStatMax(StatName.HEALTH)
  ) {
    return randomSkill(
      allSkills,
      (skill) =>
        skill.getTags().has(SkillTags.Attack) ||
        skill.getTags().has(SkillTags.Buff) ||
        skill.getTags().has(SkillTags.Nerf) ||
        skill.getTags().has(SkillTags.Afflict) ||
        skill.getTags().has(SkillTags.Shield)
    )
  } else if (
    performer.getStat(StatName.HEALTH) <=
    Math.ceil(performer.getStatMax(StatName.HEALTH) / 5)
  ) {
    return randomSkill(
      allSkills,
      (skill) =>
        skill.getTags().has(SkillTags.Heal) ||
        skill.getTags().has(SkillTags.Shield) ||
        skill.getTags().has(SkillTags.Final)
    )
  } else
    return randomSkill(
      allSkills,
      (skill) => !skill.getTags().has(SkillTags.Final)
    )
}
