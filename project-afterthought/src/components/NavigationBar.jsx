// NavigationBar.js
import { Link, } from "react-router-dom"
import React, { useState } from 'react'

const NavigationBar = () => {
  return (
    <nav className="navigation">
      <Link to="/" className="site-title">
        Project Afterthought
      </Link>
      <ul>
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
            <li><Link to="/projects/ride-organizer">Ride Organizer</Link></li>
            <li><Link to="/projects/fire-detector">Fire Detection Model</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}

export default NavigationBar