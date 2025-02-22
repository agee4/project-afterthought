// NavigationBar.js
import React, { useState, useRef } from "react"
import { Link, } from "react-router-dom"
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
    <header id="navigation">
      <Link to="../" id="site-title" title="Return Home">
        <img id="title-img" src={bobLogo} />
        <div id="title-text">Aaron Gee's Portfolio</div>
      </Link>
      <ul className="laptop">
        <li className="dropdown">
          About
          <ul className="dropdown-content">
            <li><Link to="../purpose" title="Purpose">About the Site</Link></li>
            <li><Link to="../about-me" title="About Me">About Me</Link></li>
          </ul>
        </li>
        <li className="dropdown">
          <Link to="../projects" title="Projects Home">Projects</Link>
          <ul className="dropdown-content">
            <li><Link to="../projects/ride-organizer" title="Ride Organizer App">Ride Organizer App</Link></li>
            <li><Link to="../projects/fire-detector" title="Fire Detection Model">Fire Detection Model</Link></li>
            <li><hr /></li>
            <li><Link to="../projects/portfolio-site" title="Portfolio Website">Portfolio Website</Link></li>
            <li><Link to="../projects/pvz-bb" title="Plants vs. Zombies Fangame">PvZ Fangame</Link></li>
          </ul>
        </li>
        <li className="dropdown">
          <Link to="../contact" title="Contact">Contact</Link>
          <ul className="dropdown-content">
            <li><ResumeButton /></li>
          </ul>
        </li>
      </ul>
      <div className="mobile" ref={navRef}>
        <button onClick={toggleMobNav}>{mobileNavOff ? "≡" : "⨯"}</button>
        { !mobileNavOff &&
          <ul className="dropdown-mobile">
            <li><Link to="../" title="Home"><u>Home</u></Link></li>
            <li><Link to="../purpose" title="Purpose">About the Site</Link></li>
            <li><Link to="../about-me" title="About Me">About Me</Link></li>
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
          </ul>
        }
      </div>
      
    </header>
  )
}

export default NavigationBar