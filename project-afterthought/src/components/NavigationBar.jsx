// NavigationBar.js
import { Link, } from "react-router-dom"
import React, { useState } from 'react'
//import BereanLogoPng from "../Resources/BereanLogoNoText.png"
import "../styles/NavigationBar.css"

import '../App.css'

const NavigationBar = () => {
  return (
    <nav className={'navigation'}>
      <Link to="/" className="site-title">
        Project Afterthought
      </Link>
      <ul>
        <li>
        <Link to="/about">About</Link>
        </li>
        <li>
        <Link to="/contact">Contact</Link>
        </li>
        <li>
        <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavigationBar