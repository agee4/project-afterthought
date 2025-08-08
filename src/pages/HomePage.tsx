// HomePage.jsx
import { Link } from "react-router"
import Page from "../components/Page"
import LinkImage from "../components/LinkImage"
import Logo from "../assets/logo/logo_shadow.png"
import RideOrganizerImg from "../assets/rideorganizerapploggedin.png"
import FireDetectorImg from "../assets/firedetectordronefinal.png"
import PortfolioWebsiteImg from "../assets/portfoliowebsiterecursive.png"
import type { ReactNode } from "react"

const HomeCycleGallery = ({
  children,
}: {
  children: ReactNode | ReactNode[]
}) => {
  return (
    <div className="group/gallery flex flex-row justify-end overflow-hidden whitespace-nowrap">
      <div className="gallery/home m-0 animate-loopscroll p-0 group-hover/gallery:animation-pause flex min-w-full list-none flex-row justify-evenly">
        {children}
      </div>
      <div className="gallery/home-facade m-0 animate-loopscroll p-0 group-hover/gallery:animation-pause flex min-w-full list-none flex-row justify-evenly">
        {children}
      </div>
    </div>
  )
}

const HomePage = () => (
  <Page>
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
      Welcome to my site! Check out my work and learn what I might be able to do
      for you!
    </p>
    <h2 className="m-3 text-xl">
      <Link
        className="animate-shadowpulse rounded-lg bg-gray-900 px-4 py-2 font-bold text-indigo-500 shadow-indigo-500 hover:text-shadow-portfolio focus:ring-indigo-500 dark:bg-gray-100 cursor-pointer border border-transparent transition-colors duration-200 hover:animate-none focus:ring-4 focus:outline-none"
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
  </Page>
)

export default HomePage
