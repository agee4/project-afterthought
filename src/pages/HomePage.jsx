// HomePage.jsx
import { Link } from "react-router"
import pageTitle from "../components/Functions/pageTitleFunct"
import LinkImage from "../components/LinkImage"
import Logo from "../assets/logo/logo_shadow.png"
import RideOrganizerImg from "../assets/rideorganizerapploggedin.png"
import FireDetectorImg from "../assets/firedetectordronefinal.png"
import PortfolioWebsiteImg from "../assets/portfoliowebsiterecursive.png"

const HomeCycleGallery = (props) => {
  return (
    <div className="group/gallery flex flex-row justify-end overflow-hidden whitespace-nowrap">
      <div className="gallery/home m-0 flex min-w-full animate-loopscroll list-none flex-row justify-evenly p-0 group-hover/gallery:animation-pause">
        {props.children}
      </div>
      <div className="gallery/home-facade m-0 flex min-w-full animate-loopscroll list-none flex-row justify-evenly p-0 group-hover/gallery:animation-pause">
        {props.children}
      </div>
    </div>
  )
}

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
          className="animate-shadowpulse cursor-pointer rounded-lg border border-transparent bg-gray-900 px-4 py-2 font-bold text-indigo-500 shadow-indigo-500 transition-colors duration-200 hover:animate-none hover:text-shadow-portfolio focus:ring-4 focus:ring-indigo-500 focus:outline-none dark:bg-gray-100"
          to="/overview"
          title="Overview"
        >
          Overview
        </Link>
      </h2>
      <h2 className="m-3">
        <Link
          className="text-3xl font-bold hover:text-indigo-500"
          to="/projects"
          title="Projects Home"
        >
          Projects
        </Link>
      </h2>
      <HomeCycleGallery>
        <LinkImage
          to="../projects/ride-organizer"
          src={RideOrganizerImg}
          alt="Screenshot of the final Ride Organizer App"
          title="Ride Organizer"
          caption="We ride together, we organize together!"
        />
        <LinkImage
          className="group/linkimg relative m-auto min-w-[27%]"
          to="../projects/fire-detector"
          src={FireDetectorImg}
          alt="The final fire detection drone"
          title="Fire Detector"
          caption="Finding fires!"
        />
        <LinkImage
          to="../projects/portfolio-site"
          src={PortfolioWebsiteImg}
          alt="The homepage of my portfolio website"
          title="Portfolio Website"
          caption="Recursive!"
        />
      </HomeCycleGallery>
      <br />
    </main>
  )
}

export default HomePage
