// ReferenceFooter.jsx
import React, { useState } from "react"
import { Link } from "react-router"
import bobLogo from "../assets/logo/logo.svg"
import ResumeButton from "./ResumeButton"

const ReferenceFooter = () => {
  const [randomPath, setRandomPath] = useState("/")

  const randomPage = () => {
    const routeList = [
      "/",
      "/overview",
      "/purpose",
      "/about-me",
      "/contact",
      "/projects",
      "/projects/ride-organizer",
      "/projects/fire-detector",
      "/projects/portfolio-site",
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
      <nav className="flex flex-col justify-evenly sm:flex-row">
        <menu>
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
              to="../purpose"
              title="Purpose"
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
        <menu>
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
        <menu>
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
        <menu>
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
          <li>
            <Link
              to="mailto:aarongeenius@gmail.com"
              className="hover:text-indigo-500"
            >
              aarongeenius@gmail.com
            </Link>
          </li>
          <li>
            <Link
              to="https://www.linkedin.com/in/aarongee0925"
              className="hover:text-indigo-500"
            >
              LinkedIn
            </Link>
          </li>
          <li>
            <Link
              to="https://github.com/agee4"
              className="hover:text-indigo-500"
            >
              GitHub
            </Link>
          </li>
          <li>
            <ResumeButton className="cursor-pointer hover:text-indigo-500" />
          </li>
        </menu>
      </nav>
      <br />
      <p className="text-neutral-500">
        <b>This site was designed by Aaron Gee</b>
        <br />
        Copypaste 2025. idk what rights are reserved{" "}
        <img
          className="emoji inline-block h-[0.75rem] align-baseline"
          src={bobLogo}
          alt=":D"
        />
      </p>
    </footer>
  )
}

export default ReferenceFooter
