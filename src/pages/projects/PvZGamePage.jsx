// PvZGamePage.jsx
import pageTitle from "../../components/Functions/pageTitleFunct"

const PvZGamePage = () => {
  pageTitle("Plants vs. Zombies Fan Game")

  return (
    <main className="flex-1 animate-fadein">
      <h1 className="m-5 text-5xl font-bold text-green-500">Project Chloroville</h1>
      <p>
        <i>A spin on the 2009 classic.</i>
      </p>
      <h2 className="m-3 text-3xl font-bold">What is this project?</h2>
      <p>
        <b className="text-lime-400">Project Chloroville</b>, also known as{" "}
        <b className="text-lime-400">Plants vs. Zombies: Botanical Battles</b>,
        is a video game project designed to recreate and expand upon the
        gameplay of the 2009 tower defense game Plants vs. Zombies. It
        incorporates familiar elements of the official series, such as
        grid-based arena and sun costs, while introducing new mechanics that aim
        to compliment and enhance the gameplay experience, such as in-level
        plant upgrading and an overhauled attack type system.
      </p>
      <h2 className="m-3 text-3xl font-bold">What makes this different?</h2>
      <ul>
        <li>
          <span className="m-auto px-2 py-1 text-xl font-bold text-amber-200 not-dark:bg-amber-600">
            Limited Sun Storage
          </span>
        </li>
        <li>
          Expensive plants won't just require you to find a way to obtain Sun;
          they also require you to keep a healthy amount of "Sun Storage" plants
          alive in order to hold that Sun in the first place! Better start growing
          some Cachevas.
        </li>
        <li>
          <span className="m-auto px-2 py-1 text-xl font-bold text-lime-400 not-dark:bg-green-600">
            Greenhouse Growing
          </span>
        </li>
        <li>
          No longer will you have to risk growing your precious plants out on the dangerous battlefield!
          Plants can now be directly grown in a zombie-free greenhouse, allowing you to further plan out
          your dendritic defenses in advance!
        </li>
        <li className="m-1 text-xl font-bold">New Plants to grow!</li>
        <li>
          Alongside fan favorites like Peashooters, Sunflowers, and Chompers, a whole new cast
          of botanical buddies are waiting to help keep your brains in your head!{" "}
          <span className="text-orange-500">Bow n Carrow</span> shoot pointy carrots at the highest-health zombie in their lane,
          taking out slow and bulky targets. <span className="text-yellow-500 bg-green-700">Effreesiant</span> speed
          up surrounding plants, making them attack and produce faster! And of course,{" "}
          <span className="font-bold">Bloom Blaster</span> can decimate zombies while more flower plants
          are planted!

          These plants and more are just a few of the new faces to get to meet in this game!
        </li>
      </ul>
    </main>
  )
}

export default PvZGamePage
