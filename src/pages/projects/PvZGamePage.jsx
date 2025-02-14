// PvZGamePage.jsx
import pageTitle from "../../components/pageTitleFunct"

const PvZGamePage = () => {
  pageTitle("Plants vs. Zombies Fan Game")

  return (
    <div className="page">
      <h1>Project Chloroville</h1>
      <p>
        <i>A spin on the 2009 classic.</i>
      </p>
      <h2>What is this project?</h2>
      <p>
        <b>Project Chloroville</b>, also known as <b>Plants vs. Zombies: Botanical Battles</b>, 
        is a video game project designed to recreate and expand upon the gameplay of the 2009 
        tower defense game Plants vs. Zombies. It incorporates familiar elements of the official 
        series, such as grid-based arena and sun costs, while introducing new mechanics that aim 
        to compliment and enhance the gameplay experience, such as in-level plant upgrading and 
        an overhauled attack type system.
      </p>
      <h2>What makes this different?</h2>
      <ul>
        <li>New plants (Bow and Carrow, Effreesiant, Peavolver)</li>
        <li>New zombies (Sign Holder, Unicyclist, Fish Monger)</li>
        <li>New tools (Sprinklers, Sun Magnifier, Phytolite)</li>
      </ul>
    </div>
  )
}

export default PvZGamePage