// PvZGamePage.jsx
import pageTitle from "../../components/Functions/pageTitleFunct"

const PvZGamePage = () => {
  pageTitle("Plants vs. Zombies Fan Game")

  return (
    <>
      <h1 className="font-bold text-5xl m-5">Project Chloroville</h1>
      <p>
        <i>A spin on the 2009 classic.</i>
      </p>
      <h2 className="font-bold text-3xl m-3">What is this project?</h2>
      <p>
        <b className="text-lime-400">Project Chloroville</b>, also known as <b className="text-lime-400">Plants vs. Zombies: Botanical Battles</b>, is a video game 
        project designed to recreate and expand upon the gameplay of the 2009 tower defense game 
        Plants vs. Zombies. It incorporates familiar elements of the official series, such as grid-based 
        arena and sun costs, while introducing new mechanics that aim to compliment and enhance the 
        gameplay experience, such as in-level plant upgrading and an overhauled attack type system.
      </p>
      <h2 className="font-bold text-3xl m-3">What makes this different?</h2>
      <ul>
        <li><span className="font-bold text-xl m-auto py-1 px-2 text-amber-200  not-dark:bg-amber-600">Limited Sun Storage</span></li>
        <li>
          Expensive plants won't just require you to find a way to obtain Sun; they also 
          require you to keep a healthy amount of "Sun Storage" plants alive in order to 
          hold that Sun in the first place!
        </li>
        <li></li>
        <li className="font-bold text-xl m-1">Plant upgrading</li>
        <li>
          With a little extra Sun, you can directly alter and upgrade plants already on your lawn!
        </li>
        <li className="font-bold text-xl m-1">New synergies</li>
        <li>
          With a little extra Sun, you can directly alter and upgrade plants already on your lawn!
        </li>
      </ul>
    </>
  )
}

export default PvZGamePage