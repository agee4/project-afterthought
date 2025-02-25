// NavigationBar.js
import React, { useState, useRef } from "react"
import { Link, } from "react-router"
import bobLogo from "../assets/logo/logo_shadow.svg"
import ResumeButton from "./ResumeButton"
import clickOutside from "./clickOutsideFunct"

const NavigationBar = () => {
  const [mobileNavOff, setMobileNavOff] = useState(true)
  const navRef = useRef(null)
  const toggleMobNav = () => {
    setMobileNavOff(!mobileNavOff)
  }
  const disableMobNav = () => {
    setMobileNavOff(true)
  }

  clickOutside(navRef, disableMobNav)

  return (
    <header className="navbar bg-white dark:bg-black text-neutral-700 dark:text-neutral-300 sticky top-0 flex justify-between items-stretch gap-8 shadow-md pr-5">
      <Link to="../" title="Return Home" className="logo m-3 h-8 flex items-center active:invert">
        <img src={bobLogo} className="logo/image h-8 border-0"/>
        <h1 className="logo/text text-2xl font-semibold truncate hidden sm:block">Aaron Gee's Portfolio</h1>
      </Link>
      <menu className="navbar/desktop items-center gap-4 hidden sm:flex">
        <li className="group/dropdown relative inline-block">
          About
          <menu className="absolute right-0 bg-white dark:bg-black shadow-md p-3 whitespace-nowrap text-right hidden group-hover/dropdown:block">
            <li><Link to="../purpose" title="Purpose">About the Site</Link></li>
            <li><Link to="../about-me" title="About Me">About Me</Link></li>
            <li><Link to="../changelog" title="Change Log">Change Log</Link></li>
          </menu>
        </li>
        <li className="group/dropdown relative inline-block">
          <Link to="../projects" title="Projects Home">Projects</Link>
          <menu className="absolute right-0 bg-white dark:bg-black shadow-md p-3 whitespace-nowrap text-right hidden group-hover/dropdown:block">
            <li><Link to="../projects/ride-organizer" title="Ride Organizer App">Ride Organizer App</Link></li>
            <li><Link to="../projects/fire-detector" title="Fire Detection Model">Fire Detection Model</Link></li>
            <li><hr /></li>
            <li><Link to="../projects/portfolio-site" title="Portfolio Website">Portfolio Website</Link></li>
            <li><Link to="../projects/pvz-bb" title="Plants vs. Zombies Fangame">PvZ Fangame</Link></li>
          </menu>
        </li>
        <li className="group/dropdown relative inline-block">
          <Link to="../contact" title="Contact">Contact</Link>
          <menu className="absolute right-0 bg-white dark:bg-black shadow-md p-3 hidden group-hover/dropdown:block">
            <li><ResumeButton /></li>
          </menu>
        </li>
      </menu>
      <div className="navbar/mobile flex items-center gap-4 sm:hidden" ref={navRef}>
        <button onClick={toggleMobNav}>{mobileNavOff ? "≡" : "⨯"}</button>
        { !mobileNavOff &&
          <menu className="absolute right-0 bg-white dark:bg-black shadow-md p-3 whitespace-nowrap text-right top-[3rem]">
            <li><Link to="../" title="Home"><u>Home</u></Link></li>
            <li><Link to="../purpose" title="Purpose">About the Site</Link></li>
            <li><Link to="../about-me" title="About Me">About Me</Link></li>
            <li><Link to="../changelog" title="Change Log">Change Log</Link></li>
            <li><br /></li>
            <li><Link to="../projects" title="Projects Home"><u>Projects</u></Link></li>
            <li><Link to="../projects/ride-organizer" title="Ride Organizer App">Ride Organizer App</Link></li>
            <li><Link to="../projects/fire-detector" title="Fire Detection Model">Fire Detection Model</Link></li>
            <li><hr /></li>
            <li><Link to="../projects/portfolio-site" title="Portfolio Website">Portfolio Website</Link></li>
            <li><Link to="../projects/pvz-bb" title="Plants vs. Zombies Fangame">PvZ Fangame</Link></li>
            <li><br /></li>
            <li><Link to="../contact" title="Contact"><u>Contact Me</u></Link></li>
            <li><ResumeButton /></li>
          </menu>
        }
      </div>
      
    </header>
  )
}

export default NavigationBar