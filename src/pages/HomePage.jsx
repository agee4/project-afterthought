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
    <>
      <h1 className="font-bold text-5xl m-5">Aaron Gee's Amazing Digital Portfolio</h1>
      <img
        className="m-auto min-w-[135px] max-w-3/20"
        src={Logo}
        alt="a crudely drawn simplistic face"
        title="hello!"
      />
      <h2 className="font-bold text-3xl m-3">An online collection of Aaron Gee's past and present work</h2>
      <p>
        Welcome to my site! Check out my work and learn what I might be able to do for you!
      </p>
      <h2 className="text-xl m-3"><Link 
        className="rounded-lg border border-transparent py-2 px-4 font-medium text-white dark:text-black bg-gray-900 dark:bg-gray-100  cursor-pointer transition-colors duration-200 hover:text-indigo-500 hover:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500"
        to="/resume" 
        title="Digital Resume">Resume</Link></h2>
      <h2><Link to="/projects" title="Projects Home">Projects</Link></h2>
      <hr />
      <ul className="gallery/home flex flex-col sm:flex-row justify-evenly p-0 m-0 list-none text-center whitespace-nowrap">
        <li>
          <Link to="../projects/ride-organizer" title="Ride Organizer App"><h3>Ride Organizer App</h3></Link>
          <LinkImage
            className="max-w-[80%] m-auto"
            to="../projects/ride-organizer"
            src={RideOrganizerImg}
            alt="Screenshot of the final Ride Organizer App"
            title="We ride together, we organize together!"
          />
        </li>
        <li>
          <Link to="../projects/fire-detector" title="Fire Detection Model"><h3>Fire Detector Model</h3></Link>
          <LinkImage
            className="max-w-[80%] m-auto"
            to="../projects/fire-detector"
            src={FireDetectorImg}
            alt="The final fire detection drone"
            title="Finding fires!"
          />
        </li>
        <li>
          <Link to="../projects/portfolio-site" title="Portfolio Website"><h3>Portfolio Website</h3></Link>
          <LinkImage
            className="max-w-[80%] m-auto"
            to="../projects/portfolio-site"
            src={PortfolioWebsiteImg}
            alt="The homepage of my portfolio website"
            title="Recursive!"
          />
        </li>
      </ul>
      <br />
    </>
  )
}

export default HomePage