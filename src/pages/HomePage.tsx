// HomePage.jsx
import { Link } from "react-router"
import Page from "../components/Page"
import LinkImage from "../components/LinkImage"
import Logo from "../assets/logo/logo_shadow.png"
import RideOrganizerImg from "../assets/rideorganizerapploggedin.png"
import FireDetectorImg from "../assets/firedetectordronefinal.png"
import PortfolioWebsiteImg from "../assets/portfoliowebsiterecursive2.png"
import RideOrganizerV2AImg from "../assets/rideorganizerv2aapp.png"
import GroupUOrganizerImg from "../assets/groupuorganizerapp.png"
import { useEffect, useState, type ReactNode } from "react"
import { randomIndex } from "../components/Functions/_helpers"

const HomeCycleGallery = ({
  children,
}: {
  children: ReactNode | ReactNode[]
}) => {
  const SingleCycle = () => (
    <div className="gallery/home m-0 flex min-w-full list-none flex-row justify-evenly p-0 group-hover/gallery:animation-pause motion-safe:animate-loopscroll">
      {children}
    </div>
  )
  return (
    <div className="group/gallery flex flex-row justify-end overflow-hidden whitespace-nowrap">
      <SingleCycle />
      <SingleCycle />
    </div>
  )
}

const LogoComponent = () => {
  let animationCSS = ""
  const test = Math.floor(Math.random() * 10)
  switch (test) {
    /* pulsing */
    case 0:
    case 1:
    case 2:
      animationCSS =
        " motion-safe:animate-jump motion-safe:animate-infinite motion-safe:animate-duration-10000"
      break
    /* wiggling */
    case 3:
    case 4:
      animationCSS =
        " motion-safe:animate-wiggle motion-safe:animate-infinite motion-safe:animate-duration-5000"
      break
    /* spinning */
    case 5:
      animationCSS =
        " motion-safe:animate-spin motion-safe:animate-infinite motion-safe:animate-duration-10000"
      break
    case 6:
      animationCSS =
        " motion-safe:animate-spin motion-safe:animate-reverse motion-safe:animate-infinite motion-safe:animate-duration-10000"
      break
    case 7:
    case 8:
    case 9:
    default:
      break
  }
  return (
    <img
      className={"max-w-3/20 min-w-[135px]" + animationCSS}
      src={Logo}
      alt="a crudely drawn simplistic face"
      title="hello!"
    />
  )
}

const JumpScare = ({ src }: { src: string }) => {
  const durations = [
    { duration: 1000, css: "animate-duration-1000 " },
    { duration: 2000, css: "animate-duration-2000 " },
    { duration: 3000, css: "animate-duration-3000 " },
    { duration: 4000, css: "animate-duration-4000 " },
    { duration: 5000, css: "animate-duration-5000 " },
    { duration: 6000, css: "animate-duration-6000 " },
    { duration: 7000, css: "animate-duration-7000 " },
    { duration: 8000, css: "animate-duration-8000 " },
    { duration: 9000, css: "animate-duration-9000 " },
    { duration: 10000, css: "animate-duration-10000 " },
  ]
  const topPositions = [
    "top-1/12 ",
    "top-1/8 ",
    "top-1/6 ",
    "top-1/5 ",
    "top-1/4 ",
    "top-1/3 ",
    "top-1/2 ",
  ]
  const leftPositions = [
    "left-1/12 ",
    "left-1/6 ",
    "left-1/4 ",
    "left-3/4 ",
    "left-5/6 ",
    "left-7/8 ",
    "left-11/12 ",
  ]
  const widths = [
    "w-1/20 ",
    "w-1/20 ",
    "w-1/20 ",
    "w-1/10 ",
    "w-1/10 ",
    "w-1/5 ",
  ]
  const durationGenerator = () => randomIndex(durations)
  const [duration, setDuration] = useState<{
    duration: number
    css: string
  }>(durationGenerator())
  useEffect(() => {
    const durationTimeoutID = setTimeout(() => {
      setDuration(durationGenerator())
      /* console.log(duration.duration) */
    }, duration.duration * 2)

    return () => {
      clearTimeout(durationTimeoutID)
    }
  }, [duration])

  const imgClassName =
    duration.css +
    randomIndex(topPositions) +
    randomIndex(leftPositions) +
    randomIndex(widths) +
    "absolute -z-10 m-auto pointer-events-none animate-fade animate-infinite animate-alternate animate-fill-backwards motion-reduce:hidden"
  /* console.log(imgClassName) */
  return (
    <div className="-z-10 bg-auto opacity-20">
      <img className={imgClassName} src={src} />
    </div>
  )
}

const HomePage = () => (
  <Page>
    <div className="motion-reduce:hidden">
      <JumpScare src={GroupUOrganizerImg} />
      <JumpScare src={FireDetectorImg} />
      <JumpScare src={PortfolioWebsiteImg} />
    </div>
    <h1 className="m-5 text-5xl font-bold">
      Aaron Gee's Amazing Digital Portfolio
    </h1>
    <div className="flex place-content-center">
      <LogoComponent />
    </div>
    <h2 className="m-3 text-3xl font-bold">
      An online collection of Aaron Gee's past and present work
    </h2>
    <p>
      Welcome to my site! Check out my work and learn what I might be able to do
      for you!
    </p>
    <h2 className="m-3 text-xl">
      <Link
        className="animate-shadowpulse cursor-pointer rounded-lg border border-transparent bg-gray-900 px-4 py-2 font-bold text-indigo-500 transition-colors duration-200 text-shadow-indigo-500 hover:animate-none hover:text-shadow-test-[16px] focus:ring-4 focus:ring-indigo-500 focus:outline-none dark:bg-gray-100"
        to="/overview"
        title="Overview"
      >
        Overview
      </Link>
    </h2>
    <br />
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
    <HomeCycleGallery>
      <LinkImage
        to="../projects/ride-organizer"
        src={RideOrganizerV2AImg}
        alt="Screenshot of the Ride Organizer v2A App"
        title="Ride Organizer v2A"
        caption="We ride together, we organize together... but better!"
      />
      <LinkImage
        to="../projects/groupu-organizer"
        src={GroupUOrganizerImg}
        alt="GroupU Organizer App"
        title="GroupU Organizer"
        caption="An organizer for me and U!"
      />
    </HomeCycleGallery>
    <br />
  </Page>
)

export default HomePage
