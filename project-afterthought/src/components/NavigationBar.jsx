// NavigationBar.js
import { Link, } from "react-router-dom"
import React, { useState } from "react"

const NavigationBar = () => {
  const toggleNav = () => {
  }

  return (
    <nav className="navigation">
      <Link to="/" className="site-title">
        Project Afterthought
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
            <li><Link to="/projects/ride-organizer">Old Ride Organizer</Link></li>
            <li><Link to="/projects/fire-detector">Fire Detection Model</Link></li>
            <li><hr /></li>
            <li><Link to="/purpose">Portfolio Website</Link></li>
            <li><Link to="/projects/pvz-bb">PvZ Fangame</Link></li>
          </ul>
        </li>
      </ul>
      <button className="mobile" onClick={toggleNav}>=</button>
    </nav>
  )
}

export default NavigationBar