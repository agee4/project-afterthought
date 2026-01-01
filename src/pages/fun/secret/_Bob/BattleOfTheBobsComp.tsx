// BattleOfTheBobsComp.tsx
import { useEffect, useReducer, useState, type JSX } from "react"
import bobLogo from "../../../../assets/logo/logo.svg"
import { DefaultMap } from "../../../../components/Functions/_helpers"
import useModal from "../../../../components/Modal/useModal"
import { BattleFactory } from "./Battle"
import { ActorFactory } from "./Actor"
import { StatName } from "./Statistic"
import { SkillTags, type Skill } from "./Skill"
import { legalSkills, allSkills, opponentRoles } from "./Skill.Catalog"
import { randomSkillSmart } from "./Skill.Logic"
import { LogFactory } from "./Log"
import { RTBattleMediator, rtBattleReducer } from "./Battle.Mediator"

const debug = false

const GameState = {
  NEW: "NEW",
  RUNNING: "RUNNING",
  PAUSED: "PAUSED",
  WIN: "WIN",
  LOSE: "LOSE",
  TIE: "TIE",
  UNKNOWN: "UNKNOWN",
} as const
type GameState = (typeof GameState)[keyof typeof GameState]

const EndStates: GameState[] = [GameState.WIN, GameState.LOSE, GameState.TIE]
const RestStates: GameState[] = [GameState.NEW, ...EndStates]
const LiveStates: GameState[] = [GameState.RUNNING, GameState.PAUSED]

const GameSpeed = {
  HYPER: { name: "HYPER", value: 1 },
  FAST: { name: "FAST", value: 10 },
  MED: { name: "MED", value: 50 },
  SLOW: { name: "SLOW", value: 100 },
  LAGGY: { name: "LAGGY", value: 1000 },
  UNKNOWN: { name: "UNKNOWN", value: 0 },
} as const
type GameSpeed = (typeof GameSpeed)[keyof typeof GameSpeed]
const GameSpeeds: GameSpeed[] = [
  GameSpeed.HYPER,
  GameSpeed.FAST,
  GameSpeed.MED,
  GameSpeed.SLOW,
  GameSpeed.LAGGY,
]

interface Result {
  message: string
  component: JSX.Element
}

const BattleOfTheBobs = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.NEW)
  const [speedType, setSpeedType] = useState<string>("")
  let speed: number = GameSpeed.MED.value
  switch (speedType) {
    case GameSpeed.HYPER.name:
      speed = GameSpeed.HYPER.value
      break
    case GameSpeed.FAST.name:
      speed = GameSpeed.FAST.value
      break
    case GameSpeed.SLOW.name:
      speed = GameSpeed.SLOW.value
      break
    case GameSpeed.LAGGY.name:
      speed = GameSpeed.LAGGY.value
      break
    case "Med":
    default:
      speed = GameSpeed.MED.value
  }

  const [skillSet, setSkillSet] = useState<Set<Skill>>(new Set())
  const [clickedSkillDef, setClickedSkillDef] = useState<string>(
    "Click a Skill to see its description!"
  )
  const updateSkillSet = (newSkill: Skill) => {
    setClickedSkillDef(newSkill.getDescription())
    if (skillSet.has(newSkill)) {
      skillSet.delete(newSkill)
    } else {
      skillSet.add(newSkill)
    }
    setSkillSet(new Set(skillSet))
  }
  const [opponentRoleName, setOpponentSkillType] = useState<string>(
    debug ? "DEBUG" : ""
  )
  let opponentSkillSet = opponentRoles.get(opponentRoleName)
  const actorFactory = new ActorFactory()
  const newBattle = () =>
    new BattleFactory().createBattle({
      player: actorFactory.createActor({
        name: "You",
        skills: [...skillSet],
      }),
      opponent: actorFactory.createActor({
        name: "Opponent",
        skills: opponentSkillSet,
      }),
      log: new LogFactory().createLog({ type: "array" }),
    })
  const [battleMediator, battleMediatorDispatch] = useReducer(
    rtBattleReducer(),
    new RTBattleMediator(newBattle())
  )
  const battle = battleMediator.getBattle()
  const player = battle.getPlayer()
  const opponent = battle.getOpponent()

  const [Modal, setModal] = useModal(null, true)
  const LogModal = () => (
    <div className="rounded-lg bg-neutral-500 p-2">
      <h1 className="text-lg">Battle Log</h1>
      <hr />
      {battle
        .getLog()
        .getLog()
        .map((val, ind) => (
          <p key={ind}>{val}</p>
        ))}
    </div>
  )
  const openLog = () => {
    setGameState((prev) =>
      prev == GameState.RUNNING ? GameState.PAUSED : prev
    )
    setModal(<LogModal />)
  }

  useEffect(() => {
    if (gameState == GameState.RUNNING) {
      const attackTimer = setInterval(() => {
        battleMediatorDispatch({ type: "tick" })
      }, speed)

      return () => {
        clearInterval(attackTimer)
      }
    }
    return
  }, [gameState, speed])

  const togglePlay = () => {
    setGameState((prev) =>
      prev == GameState.RUNNING ? GameState.PAUSED : GameState.RUNNING
    )
    if (gameState != GameState.RUNNING && gameState != GameState.PAUSED)
      battleMediatorDispatch({ type: "set", battle: newBattle() })
  }

  const playerPerform = (skill: Skill) => {
    battleMediatorDispatch({
      type: "perform",
      skill,
      performer: player,
      target: opponent,
    })
  }

  if (opponent.getStat(StatName.STAMINA) >= 250) {
    const skill = randomSkillSmart({
      performer: opponent,
      target: player,
      mediator: battleMediator,
    })
    if (skill)
      battleMediatorDispatch({
        type: "perform",
        skill,
        performer: opponent,
        target: player,
      })
  }

  if (
    (player.getStat(StatName.HEALTH) <= 0 ||
      opponent.getStat(StatName.HEALTH) <= 0) &&
    gameState == GameState.RUNNING
  ) {
    const finalState =
      player.getStat(StatName.HEALTH) > 0
        ? opponent.getStat(StatName.HEALTH) > 0
          ? GameState.UNKNOWN
          : GameState.WIN
        : opponent.getStat(StatName.HEALTH) > 0
          ? GameState.LOSE
          : GameState.TIE

    battleMediatorDispatch({
      type: "script",
      script: ({ mediator }) =>
        mediator.addLog(results.get(finalState).message),
    })
    setGameState(finalState)
  }

  const results = new DefaultMap<GameState, Result>(
    {
      message: "Wait, what happened?",
      component: <div className="text-3xl">???</div>,
    },
    [
      [
        GameState.NEW,
        {
          message: "Undecided",
          component: <div className="text-3xl">Who will win?</div>,
        },
      ],
      [
        GameState.WIN,
        {
          message: "You wonned!",
          component: <div className="text-3xl text-green-500">You wonned!</div>,
        },
      ],
      [
        GameState.LOSE,
        {
          message: "You losed...",
          component: <div className="text-3xl text-red-500">You losed...</div>,
        },
      ],
      [
        GameState.TIE,
        {
          message: "You tied?",
          component: <div className="text-3xl">You tied?</div>,
        },
      ],
    ]
  )

  return (
    <>
      {Modal}
      {!LiveStates.includes(gameState) ? (
        <div>
          {results.get(gameState).component}
          <br />
          <div>
            <div className="text-lg italic">
              Choose up to 4 skills to help you on your journey.
            </div>
            <div className="text-md italic">{clickedSkillDef}</div>
            {(debug ? allSkills : legalSkills).map((value, index) => (
              <button
                key={index}
                className={
                  "m-1 cursor-pointer rounded-lg border border-transparent px-4 py-2 font-bold text-indigo-500 transition-colors duration-200 text-shadow-indigo-500 hover:animate-none hover:text-shadow-test-[16px] focus:ring-4 focus:ring-indigo-500 focus:outline-none disabled:bg-gray-500/70" +
                  (skillSet.has(value)
                    ? " bg-blue-800 dark:bg-blue-200"
                    : " bg-gray-900 dark:bg-gray-100")
                }
                onClick={() => updateSkillSet(value)}
                disabled={
                  !skillSet.has(value) &&
                  (skillSet.size >= 4 ||
                    (value.getTags().has(SkillTags.Signature) &&
                      [...skillSet.values()].some((value) =>
                        value.getTags().has(SkillTags.Signature)
                      ))) &&
                  !debug
                }
                title={value.getDescription()}
              >
                {value.getTags().has(SkillTags.Signature) && "★ "}
                {value.getName()}
              </button>
            ))}
          </div>
          <br />
        </div>
      ) : (
        <>
          <div
            className={
              "flex p-4" +
              (gameState == GameState.RUNNING ? "" : " bg-auto opacity-20")
            }
          >
            <div>
              <div className="text-lg font-bold">{opponent.getName()}</div>
              <img
                className="pointer-events-none inline-block h-1/5 align-baseline invert"
                src={bobLogo}
                alt=":D"
              />
              <div>❤️ {opponent.getStat(StatName.HEALTH)}</div>
              <div className="flex flex-col place-content-center gap-2">
                {[...opponent.getEffects().values()]
                  .filter((value) => value.getName())
                  .map((value, index) => (
                    <div key={index}>{value.getName()}</div>
                  ))}
              </div>
            </div>
            <div>
              <div className="text-lg font-bold">{player.getName()}</div>
              <img
                className="pointer-events-none inline-block h-1/5 align-baseline"
                src={bobLogo}
                alt=":D"
              />
              <div>❤️ {Math.floor(player.getStat(StatName.HEALTH))}</div>
              <div>💧 {Math.floor(player.getStat(StatName.STAMINA))}</div>
              <div className="flex justify-evenly">
                <div>💪 {player.getStat(StatName.STRENGTH)}</div>
                <div>🧠 {player.getStat(StatName.FOCUS)}</div>
              </div>
              <div className="flex flex-col place-content-center gap-2">
                {player.getSkills().map((value, index) => (
                  <button
                    key={index}
                    className="cursor-pointer rounded-lg border border-transparent bg-gray-900 px-4 py-2 font-bold text-indigo-500 transition-colors duration-200 text-shadow-indigo-500 hover:animate-none hover:text-shadow-test-[16px] focus:ring-4 focus:ring-indigo-500 focus:outline-none disabled:pointer-events-none disabled:cursor-default disabled:bg-gray-500 dark:bg-gray-100"
                    onClick={() => playerPerform(value)}
                    disabled={
                      !value.meetRequirements({
                        performer: player,
                        target: opponent,
                        mediator: battleMediator,
                      }) || gameState != GameState.RUNNING
                    }
                  >
                    {value.getName()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
      <div className="flex place-content-center gap-2">
        <button
          className="cursor-pointer rounded-lg border border-transparent bg-gray-900 px-4 py-2 font-bold text-indigo-500 transition-colors duration-200 text-shadow-indigo-500 hover:animate-none hover:text-shadow-test-[16px] focus:ring-4 focus:ring-indigo-500 focus:outline-none disabled:bg-gray-500 dark:bg-gray-100"
          onClick={togglePlay}
        >
          {gameState == GameState.RUNNING
            ? "⏸️Stop"
            : gameState == GameState.PAUSED
              ? "▶Resume"
              : "▶Play"}
        </button>
        {LiveStates.includes(gameState) && (
          <button
            className="cursor-pointer rounded-lg border border-transparent bg-gray-900 px-4 py-2 font-bold text-indigo-500 transition-colors duration-200 text-shadow-indigo-500 hover:animate-none hover:text-shadow-test-[16px] focus:ring-4 focus:ring-indigo-500 focus:outline-none disabled:bg-gray-500 dark:bg-gray-100"
            onClick={() => setGameState(GameState.NEW)}
          >
            RESET
          </button>
        )}
        <select
          className="cursor-pointer rounded-lg border border-transparent bg-gray-900 px-4 py-2 font-bold text-indigo-500 transition-colors duration-200 text-shadow-indigo-500 hover:animate-none hover:text-shadow-test-[16px] focus:ring-4 focus:ring-indigo-500 focus:outline-none disabled:bg-gray-500 dark:bg-gray-100"
          name="speedType"
          value={speedType}
          onChange={(e) => {
            setSpeedType(e.target.value)
          }}
        >
          <option className="dark:text-neutral-500" value="" disabled>
            Speed
          </option>
          {GameSpeeds.map((speed) => (
            <option className="dark:text-black" key={speed.name}>
              {speed.name}
            </option>
          ))}
        </select>
        {RestStates.includes(gameState) && (
          <select
            className="cursor-pointer rounded-lg border border-transparent bg-gray-900 px-4 py-2 font-bold text-indigo-500 transition-colors duration-200 text-shadow-indigo-500 hover:animate-none hover:text-shadow-test-[16px] focus:ring-4 focus:ring-indigo-500 focus:outline-none disabled:bg-gray-500 dark:bg-gray-100"
            name="opponentSkillType"
            value={opponentRoleName}
            onChange={(e) => {
              setOpponentSkillType(e.target.value)
            }}
          >
            <option className="dark:text-neutral-500" value="" disabled>
              Opponent
            </option>
            {[...opponentRoles.keys()].map(
              (value) =>
                (value != "DEBUG" || debug) && (
                  <option className="dark:text-black" key={value}>
                    {value}
                  </option>
                )
            )}
          </select>
        )}
        {gameState != GameState.NEW && (
          <button
            className="cursor-pointer rounded-lg border border-transparent bg-gray-900 px-4 py-2 font-bold text-indigo-500 transition-colors duration-200 text-shadow-indigo-500 hover:animate-none hover:text-shadow-test-[16px] focus:ring-4 focus:ring-indigo-500 focus:outline-none disabled:bg-gray-500 dark:bg-gray-100"
            onClick={openLog}
          >
            Log
          </button>
        )}
      </div>
    </>
  )
}

export default BattleOfTheBobs
