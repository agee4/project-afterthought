// ReferenceFooter.jsx
import { useState } from "react"
import { Link } from "react-router"
import bobLogo from "../assets/logo/logo.svg"
import ResumeButton from "./ResumeButton"
import Emoji from "./Emoji"

const EmailIcon = (
  <svg
    className="inline-block h-4 fill-black align-baseline hover:fill-indigo-500 dark:fill-white"
    version="1.1"
    baseProfile="tiny"
    id="Layer_1"
    xmlns:x="http://ns.adobe.com/Extensibility/1.0/"
    xmlns:i="http://ns.adobe.com/AdobeIllustrator/10.0/"
    xmlns:graph="http://ns.adobe.com/Graphs/1.0/"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
    viewBox="-0.5 0.5 42 42"
    xmlSpace="preserve"
  >
    <path d="M40.5,31.5v-18c0,0-18.2,12.7-19.97,13.359C18.79,26.23,0.5,13.5,0.5,13.5v18c0,2.5,0.53,3,3,3h34  C40.029,34.5,40.5,34.061,40.5,31.5z M40.471,9.971c0-1.821-0.531-2.471-2.971-2.471h-34c-2.51,0-3,0.78-3,2.6l0.03,0.28  c0,0,18.069,12.44,20,13.12C22.57,22.71,40.5,10.1,40.5,10.1L40.471,9.971z" />
  </svg>
)
const GitHubIcon = (
  <svg
    className="inline-block h-4 fill-black stroke-black align-baseline group-hover:stroke-indigo-500 hover:fill-indigo-500 dark:fill-white dark:stroke-white"
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 240.000000 240.000000"
    preserveAspectRatio="xMidYMid meet"
  >
    <g transform="translate(0.000000,240.000000) scale(0.100000,-0.100000)">
      <path d="M970 2301 c-305 -68 -555 -237 -727 -493 -301 -451 -241 -1056 143 -1442 115 -116 290 -228 422 -271 49 -16 55 -16 77 -1 24 16 25 20 25 135 l0 118 -88 -5 c-103 -5 -183 13 -231 54 -17 14 -50 62 -73 106 -38 74 -66 108 -144 177 -26 23 -27 24 -9 37 43 32 130 1 185 -65 96 -117 133 -148 188 -160 49 -10 94 -6 162 14 9 3 21 24 27 48 6 23 22 58 35 77 l24 35 -81 16 c-170 35 -275 96 -344 200 -64 96 -85 179 -86 334 0 146 16 206 79 288 28 36 31 47 23 68 -15 36 -11 188 5 234 13 34 20 40 47 43 45 5 129 -24 214 -72 l73 -42 64 15 c91 21 364 20 446 0 l62 -16 58 35 c77 46 175 82 224 82 39 0 39 -1 55 -52 17 -59 20 -166 5 -217 -8 -30 -6 -39 16 -68 109 -144 121 -383 29 -579 -62 -129 -193 -219 -369 -252 l-84 -16 31 -55 32 -56 3 -223 4 -223 25 -16 c23 -15 28 -15 76 2 80 27 217 101 292 158 446 334 590 933 343 1431 -145 293 -419 518 -733 602 -137 36 -395 44 -525 15z" />
    </g>
  </svg>
)
const LinkedInIcon = (
  <svg
    className="inline-block h-4 fill-black align-baseline hover:fill-indigo-500 dark:fill-white"
    viewBox="0 0 24 24"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>LinkedIn icon</title>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const ReferenceFooter = () => {
  const [randomPath, setRandomPath] = useState("/")

  const randomPage = () => {
    const routeList = [
      "/",
      "/overview",
      "/about-site",
      "/about-me",
      "/contact",
      "/projects",
      "/projects/ride-organizer",
      "/projects/fire-detector",
      "/projects/portfolio-site",
      "/projects/ride-organizer-v2a",
      "/projects/pvz-bb",
      "/changelog",
      "/future",
      "/friends",
      "/thanks",
      "/YzJWamNtVjBNZw",
    ]
    let randomIndex = Math.floor(Math.random() * routeList.length)
    setRandomPath(routeList[randomIndex])
  }

  return (
    <footer className="justify-between bg-neutral-100 py-2 text-sm text-neutral-700 shadow-md dark:bg-neutral-900 dark:text-neutral-300">
      <nav className="flex flex-row flex-wrap justify-evenly">
        <menu className="px-2">
          <li>
            <h1>
              <Link
                to="../"
                title="Home"
                className="font-bold text-black hover:text-indigo-500 dark:text-white"
              >
                Home
              </Link>
            </h1>
          </li>
          <li>
            <Link
              to="../overview"
              title="Overview"
              className="hover:text-indigo-500"
            >
              Overview
            </Link>
          </li>
          <li>
            <Link
              to="../about-site"
              title="About the Site"
              className="hover:text-indigo-500"
            >
              About the Site
            </Link>
          </li>
          <li>
            <Link
              to="../about-me"
              title="About Me"
              className="hover:text-indigo-500"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="../changelog"
              title="Change Log"
              className="hover:text-indigo-500"
            >
              Change Log
            </Link>
          </li>
        </menu>
        <menu className="px-2">
          <li>
            <h1>
              <Link
                to="../projects"
                title="Projects Home"
                className="font-bold text-black hover:text-indigo-500 dark:text-white"
              >
                Projects
              </Link>
            </h1>
          </li>
          <li>
            <Link
              to="../projects/ride-organizer"
              title="Ride Organizer App"
              className="hover:text-indigo-500"
            >
              Ride Organizer App
            </Link>
          </li>
          <li>
            <Link
              to="../projects/fire-detector"
              title="Fire Detection Model"
              className="hover:text-indigo-500"
            >
              Fire Detection Model
            </Link>
          </li>
          <li>
            <Link
              to="../projects/portfolio-site"
              title="Portfolio Website"
              className="hover:text-indigo-500"
            >
              Portfolio Website
            </Link>
          </li>
          <li>
            <Link
              to="../projects/pvz-bb"
              title="Plants vs. Zombies Fangame"
              className="hover:text-indigo-500"
            >
              PvZ Fangame
            </Link>
          </li>
        </menu>
        <menu className="px-2">
          <li>
            <h1 className="font-bold text-black dark:text-white">Fun</h1>
          </li>
          <li>
            <Link
              onClick={randomPage}
              to={randomPath}
              className="hover:text-indigo-500"
            >
              Random Page
            </Link>
          </li>
          <li>
            <Link
              to="../future"
              title="Future Features"
              className="hover:text-indigo-500"
            >
              Future Features
            </Link>
          </li>
          <li>
            <Link
              to="../friends"
              title="Friends"
              className="hover:text-indigo-500"
            >
              Friends
            </Link>
          </li>
          <li>
            <Link
              to="../thanks"
              title="Special Thanks"
              className="hover:text-indigo-500"
            >
              Thanks
            </Link>
          </li>
        </menu>
        <menu className="px-2">
          <li>
            <h1>
              <Link
                to="../contact"
                title="Contact"
                className="font-bold text-black hover:text-indigo-500 dark:text-white"
              >
                Contact
              </Link>
            </h1>
          </li>
          <span className="flex flex-col justify-evenly sm:flex-row">
            <li>
              <Link
                to="mailto:aarongeenius@gmail.com"
                className="hover:text-indigo-500"
              >
                {EmailIcon}
              </Link>
            </li>
            <li>
              <Link
                to="https://www.linkedin.com/in/aarongee0925"
                className="hover:text-indigo-500"
              >
                {LinkedInIcon}
              </Link>
            </li>
            <li>
              <Link
                to="https://github.com/agee4"
                className="h-full w-full content-[''] hover:after:bg-indigo-500 hover:after:mix-blend-multiply"
              >
                {GitHubIcon}
              </Link>
            </li>
          </span>
          <li>
            <ResumeButton className="border-transparent" />
          </li>
        </menu>
      </nav>
      <br />
      <p className="text-neutral-500">
        <b>This site was designed by Aaron Gee</b>
        <br />
        Copypaste 2025. idk what rights are reserved{" "}
        <Emoji src={bobLogo} alt=":D" />
      </p>
    </footer>
  )
}

export default ReferenceFooter
