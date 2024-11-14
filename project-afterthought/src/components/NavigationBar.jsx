// NavigationBar.js
import { Link, } from "react-router-dom"
import React, { useState } from 'react'
//import BereanLogoPng from "../Resources/BereanLogoNoText.png"
import "../styles/NavigationBar.css"
import '../App.css'

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
            <li>
              <Link to="/purpose">Project Goals</Link>
            </li>
            <li>
              <Link to="/about-me">About Me</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <Link to="/projects">Projects</Link>
          <ul className="dropdown-content">
            <li>
              <Link to="/projects/ride-organizer">Ride Organizer</Link>
            </li>
            <li>
              <Link to="/projects/fire-detector">Fire Detection Model</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}

export default NavigationBar