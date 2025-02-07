// NavigationBar.js
import { Link, } from "react-router-dom"
import React, { useState } from "react"
import bobLogo from "../assets/logo/logo_shadow.svg"
import ResumeButton from "./ResumeButton"

const NavigationBar = () => {
  const [mobileNavOff, setMobileNavOff] = useState(true)
  const toggleNav = () => {
    setMobileNavOff(!mobileNavOff)
  }

  return (
    <header className="navigation">
      <Link to="/" className="site-title" title="Return Home">
        <img className="site-title" src={bobLogo} />
        Aaron Gee's Portfolio
      </Link>
      <ul className="laptop">
        <li className="dropdown">
          About
          <ul className="dropdown-content">
            <li><Link to="/purpose" title="Purpose">About the Project</Link></li>
            <li><Link to="/about-me" title="About Me">About Me</Link></li>
            <li><Link to="/contact" title="Contact">Contact Me</Link></li>
          </ul>
        </li>
        <li className="dropdown">
          <Link to="/projects" title="Projects Home">Projects</Link>
          <ul className="dropdown-content">
            <li><Link to="/projects/ride-organizer" title="Ride Organizer App">Ride Organizer App</Link></li>
            <li><Link to="/projects/fire-detector" title="Fire Detection Model">Fire Detection Model</Link></li>
            <li><hr /></li>
            <li><Link to="/projects/portfolio-site" title="Portfolio Website">Portfolio Website</Link></li>
            <li><Link to="/projects/pvz-bb" title="Plants vs. Zombies Fangame">PvZ Fangame</Link></li>
          </ul>
        </li>
        <li><ResumeButton /></li>
      </ul>
      <div className="mobile">
        <button onClick={toggleNav}>{mobileNavOff ? "≡" : "⨯"}</button>
        { !mobileNavOff &&
          <ul className="dropdown-mobile">
            <li><Link to="/purpose" title="Purpose">About the Site</Link></li>
            <li><Link to="/about-me" title="About Me">About Me</Link></li>
            <li><Link to="/contact" title="Contact">Contact Me</Link></li>
            <li><br /></li>
            <li><Link to="/projects" title="Projects Home"><u>Projects</u></Link></li>
            <li><Link to="/projects/ride-organizer" title="Ride Organizer App">Ride Organizer App</Link></li>
            <li><Link to="/projects/fire-detector" title="Fire Detection Model">Fire Detection Model</Link></li>
            <li><hr /></li>
            <li><Link to="/projects/portfolio-site" title="Portfolio Website">Portfolio Website</Link></li>
            <li><Link to="/projects/pvz-bb" title="Plants vs. Zombies Fangame">PvZ Fangame</Link></li>
            <li><br /></li>
            <li><ResumeButton /></li>
          </ul>
        }
      </div>
      
    </header>
  )
}

export default NavigationBar