// NavigationBar.js
import React, { useState, useRef } from "react"
import { Link } from "react-router"
import bobLogo from "../assets/logo/logo.svg"
import bobLogoClick from "../assets/logo/logo_oh.svg"
import ResumeButton from "./ResumeButton"
import clickOutside from "./Functions/clickOutsideFunct"

const NavigationBar = () => {
  const [mobileNavOff, setMobileNavOff] = useState(true)
  const [logo, setLogo] = useState(bobLogo)
  const navRef = useRef(null)
  const toggleMobNav = () => {
    setMobileNavOff(!mobileNavOff)
  }
  const disableMobNav = () => {
    setMobileNavOff(true)
  }
  const logoClick = () => {
    setLogo(bobLogoClick)
    setTimeout(() => {
      setLogo(bobLogo)
    }, 500)
  }

  clickOutside(navRef, disableMobNav)

  return (
    <header className="navbar sticky top-0 z-1 flex items-stretch justify-between gap-8 bg-neutral-100 pr-5 text-neutral-700 shadow-md dark:bg-neutral-900 dark:text-neutral-300">
      <Link
        to="../"
        title="Return Home"
        className="logo m-3 flex h-8 items-center"
      >
        <img
          src={logo}
          className="logo/image h-8 border-0"
          id="logo"
          onClick={logoClick}
        />
        <h1 className="logo/text hidden truncate text-2xl font-semibold xl:block">
          Aaron Gee's Portfolio
        </h1>
      </Link>
      <menu className="navbar/desktop hidden items-center gap-4 xl:flex">
        <li className="group/dropdown relative inline-block animate-shadowpulse font-bold text-indigo-500 shadow-indigo-500 hover:animate-none hover:text-indigo-500 hover:text-shadow-portfolio">
          <Link to="../overview" title="Overview">
            Overview
          </Link>
        </li>
        <li className="group/dropdown relative inline-block">
          About
          <menu className="absolute right-0 hidden bg-white p-3 text-right whitespace-nowrap shadow-md group-hover/dropdown:block dark:bg-black">
            <li>
              <Link className="hover:text-indigo-500" to="../about-site" title="About the Site">
                About the Site
              </Link>
            </li>
            <li>
              <Link className="hover:text-indigo-500" to="../about-me" title="About Me">
                About Me
              </Link>
            </li>
            <li>
              <Link className="hover:text-indigo-500" to="../changelog" title="Change Log">
                Change Log
              </Link>
            </li>
          </menu>
        </li>
        <li className="group/dropdown relative inline-block">
          <Link className="hover:text-indigo-500" to="../projects" title="Projects Home">
            Projects
          </Link>
          <menu className="absolute right-0 hidden bg-white p-3 text-right whitespace-nowrap shadow-md group-hover/dropdown:block dark:bg-black">
            <li>
              <Link className="hover:text-indigo-500" to="../projects/ride-organizer" title="Ride Organizer App">
                Ride Organizer App
              </Link>
            </li>
            <li>
              <Link className="hover:text-indigo-500" to="../projects/fire-detector" title="Fire Detection Model">
                Fire Detection Model
              </Link>
            </li>
            <li>
              <hr />
            </li>
            <li>
              <Link className="hover:text-indigo-500" to="../projects/portfolio-site" title="Portfolio Website">
                Portfolio Website
              </Link>
            </li>
            <li>
              <Link className="hover:text-indigo-500" to="../projects/pvz-bb" title="Plants vs. Zombies Fangame">
                PvZ Fangame
              </Link>
            </li>
          </menu>
        </li>
        <li className="group/dropdown relative inline-block">
          <Link className="hover:text-indigo-500" to="../contact" title="Contact">
            Contact
          </Link>
          <menu className="absolute right-0 hidden bg-white p-3 shadow-md group-hover/dropdown:block dark:bg-black">
            <li>
              <ResumeButton className="cursor-pointer hover:text-indigo-500" />
            </li>
          </menu>
        </li>
      </menu>
      <div
        className="navbar/mobile flex items-center gap-4 xl:hidden"
        ref={navRef}
      >
        <button className="text-3xl" onClick={toggleMobNav}>
          {mobileNavOff ? "≡" : "⨯"}
        </button>
        {!mobileNavOff && (
          <menu className="absolute top-[3rem] right-0 bg-white p-3 text-right whitespace-nowrap shadow-md dark:bg-black overflow-scroll">
            <li className="animate-shadowpulse font-bold text-indigo-500 shadow-indigo-500 hover:animate-none hover:text-indigo-500 hover:text-shadow-portfolio">
              <Link to="../overview" title="Overview">
                Overview
              </Link>
            </li>
            <li>
              <Link to="../purpose" title="Purpose">
                About the Site
              </Link>
            </li>
            <li>
              <Link to="../about-me" title="About Me">
                About Me
              </Link>
            </li>
            <li>
              <Link to="../changelog" title="Change Log">
                Change Log
              </Link>
            </li>
            <li>
              <br />
            </li>
            <li className="font-bold underline">
              <Link to="../projects" title="Projects Home">
                Projects
              </Link>
            </li>
            <li>
              <Link to="../projects/ride-organizer" title="Ride Organizer App">
                Ride Organizer App
              </Link>
            </li>
            <li>
              <Link to="../projects/fire-detector" title="Fire Detection Model">
                Fire Detection Model
              </Link>
            </li>
            <li>
              <hr />
            </li>
            <li>
              <Link to="../projects/portfolio-site" title="Portfolio Website">
                Portfolio Website
              </Link>
            </li>
            <li>
              <Link to="../projects/pvz-bb" title="Plants vs. Zombies Fangame">
                PvZ Fangame
              </Link>
            </li>
            <li>
              <br />
            </li>
            <li className="font-bold underline">
              <Link to="../contact" title="Contact">
                Contact Me
              </Link>
            </li>
            <li>
              <ResumeButton className="cursor-pointer hover:text-indigo-500" />
            </li>
          </menu>
        )}
      </div>
    </header>
  )
}

export default NavigationBar
