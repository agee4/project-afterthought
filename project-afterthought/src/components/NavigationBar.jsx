// NavigationBar.js
import { Link, } from "react-router-dom"
import React, { useState } from "react"
import bobLogo from "../assets/logo.svg"

const NavigationBar = () => {
  const [mobileNavOff, setMobileNavOff] = useState(true)
  const toggleNav = () => {
    setMobileNavOff(!mobileNavOff)
  }

  return (
    <nav className="navigation">
      <Link to="/" className="site-title">
        <img className="site-title" src={bobLogo} />
        <div className="laptop">Aaron Gee's Portfolio</div>
      </Link>
      <ul className="laptop">
        <li className="dropdown">
          About
          <ul className="dropdown-content">
            <li><Link to="/purpose">About the Project</Link></li>
            <li><Link to="/about-me">About Me</Link></li>
            <li><Link to="/contact">Contact Me</Link></li>
          </ul>
        </li>
        <li className="dropdown">
          <Link to="/projects">Projects</Link>
          <ul className="dropdown-content">
            <li><Link to="/projects/ride-organizer">Ride Organizer App</Link></li>
            <li><Link to="/projects/fire-detector">Fire Detection Model</Link></li>
            <li><hr /></li>
            <li><Link to="/projects/portfolio-site">Portfolio Website</Link></li>
            <li><Link to="/projects/pvz-bb">PvZ Fangame</Link></li>
          </ul>
        </li>
      </ul>
      <div className="mobile">
        <button onClick={toggleNav}>=</button>
        { !mobileNavOff ?
          <ul className="dropdown-mobile">
            <li><Link to="/purpose">About the Site</Link></li>
            <li><Link to="/about-me">About Me</Link></li>
            <li><Link to="/contact">Contact Me</Link></li>
            <li><br /></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/projects/ride-organizer">Ride Organizer App</Link></li>
            <li><Link to="/projects/fire-detector">Fire Detection Model</Link></li>
            <li><hr /></li>
            <li><Link to="/projects/portfolio-site">Portfolio Website</Link></li>
            <li><Link to="/projects/pvz-bb">PvZ Fangame</Link></li>
          </ul> : <></>
        }
      </div>
      
    </nav>
  )
}

export default NavigationBar