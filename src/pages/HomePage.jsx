// HomePage.jsx
import { Link } from "react-router"
import pageTitle from "../components/Functions/pageTitleFunct"
import LinkImage from "../components/LinkImage"
import Logo from "../assets/logo/logo_shadow.png"
import RideOrganizerImg from "../assets/rideorganizerapploggedin.png"
import FireDetectorImg from "../assets/firedetectordronefinal.png"
import PortfolioWebsiteImg from "../assets/portfoliowebsiterecursive.png"

const HomePage = () => {
  pageTitle()
  return (
    <main className="flex-1 animate-fadein">
      <h1 className="m-5 text-5xl font-bold">
        Aaron Gee's Amazing Digital Portfolio
      </h1>
      <img
        className="m-auto max-w-3/20 min-w-[135px]"
        src={Logo}
        alt="a crudely drawn simplistic face"
        title="hello!"
      />
      <h2 className="m-3 text-3xl font-bold">
        An online collection of Aaron Gee's past and present work
      </h2>
      <p>
        Welcome to my site! Check out my work and learn what I might be able to
        do for you!
      </p>
      <h2 className="m-3 text-xl">
        <Link
          className="cursor-pointer rounded-lg border border-transparent bg-gray-900 px-4 py-2 font-medium text-white transition-colors duration-200 hover:border-indigo-500 hover:text-indigo-500 focus:ring-4 focus:ring-indigo-500 focus:outline-none dark:bg-gray-100 dark:text-black"
          to="/overview"
          title="Overview"
        >
          Overview
        </Link>
      </h2>
      <h2 className="m-3 text-3xl font-bold hover:text-indigo-500">
        <Link to="/projects" title="Projects Home">
          Projects
        </Link>
      </h2>
      <hr />
      <ul className="gallery/home m-0 flex list-none flex-col justify-evenly p-0 text-center whitespace-nowrap sm:flex-row">
        <li className="hover:text-indigo-500">
          <Link to="../projects/ride-organizer" title="Ride Organizer App">
            <h3>Ride Organizer App</h3>
          </Link>
          <LinkImage
            className="m-auto max-w-[80%]"
            to="../projects/ride-organizer"
            src={RideOrganizerImg}
            alt="Screenshot of the final Ride Organizer App"
            title="We ride together, we organize together!"
          />
        </li>
        <li className="hover:text-indigo-500">
          <Link to="../projects/fire-detector" title="Fire Detection Model">
            <h3>Fire Detector Model</h3>
          </Link>
          <LinkImage
            className="m-auto max-w-[80%]"
            to="../projects/fire-detector"
            src={FireDetectorImg}
            alt="The final fire detection drone"
            title="Finding fires!"
          />
        </li>
        <li className="hover:text-indigo-500">
          <Link to="../projects/portfolio-site" title="Portfolio Website">
            <h3>Portfolio Website</h3>
          </Link>
          <LinkImage
            className="m-auto max-w-[80%]"
            to="../projects/portfolio-site"
            src={PortfolioWebsiteImg}
            alt="The homepage of my portfolio website"
            title="Recursive!"
          />
        </li>
      </ul>
      <br />
    </main>
  )
}

export default HomePage
