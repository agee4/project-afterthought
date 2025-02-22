// ReferenceFooter.jsx
import React, { useState } from "react"
import { Link, } from "react-router-dom"
import downloadFile from "./downloadFileFunct"
import bobLogo from "../assets/logo/logo.svg"
import resumePDF from "../assets/aarongeeresume.pdf"

const ReferenceFooter = () => {
  const [randomPath, setRandomPath] = useState('/')

  const downloadResume = () => {
    downloadFile(resumePDF, "aarongee-resume.pdf")
  }

  const randomPage = () => {
    const routeList = [
      '/', 
      '/purpose', 
      '/about-me', 
      '/contact', 
      '/projects', 
      '/projects/ride-organizer', 
      '/projects/fire-detector', 
      '/projects/portfolio-site', 
      '/projects/pvz-bb',
      '/changelog', 
      '/future', 
      '/thanks', 
      '/YzJWamNtVjBNZw', 
    ]
    let randomIndex = Math.floor(Math.random() * routeList.length)
    setRandomPath(routeList[randomIndex])
  }

  return (
    <footer id="reference">
      <nav id="reference-nav">
        <ul>
          <li><h1><Link to="/" title="Home">Home</Link></h1></li>
          <li><Link to="/purpose" title="Purpose">About the Project</Link></li>
          <li><Link to="/about-me" title="About Me">About Me</Link></li>
        </ul>
        <ul>
          <li><h1><Link to="/projects" title="Projects Home">Projects</Link></h1></li>
          <li><Link to="/projects/ride-organizer" title="Ride Organizer App">Ride Organizer App</Link></li>
          <li><Link to="/projects/fire-detector" title="Fire Detection Model">Fire Detection Model</Link></li>
          <li><Link to="/projects/portfolio-site" title="Portfolio Website">Portfolio Website</Link></li>
          <li><Link to="/projects/pvz-bb" title="Plants vs. Zombies Fangame">PvZ Fangame</Link></li>
        </ul>
        <ul>
          <li><h1>Fun</h1></li>
          <li><Link onClick={randomPage} to={randomPath}>Random Page</Link></li>
          <li><Link to="/changelog" title="Changelog">Changelog</Link></li>
          <li><Link to="/future" title="Future Features">Future Features</Link></li>
          <li><Link to="/thanks" title="Special Thanks">Thanks</Link></li>
        </ul>
        <ul>
          <li><h1><Link to="/contact" title="Contact">Contact</Link></h1></li>
          <li><Link to="mailto:aarongeenius@gmail.com">aarongeenius@gmail.com</Link></li>
          <li><Link to="https://www.linkedin.com/in/aaron-gee-7350712b9">LinkedIn</Link></li>
          <li><Link to="https://github.com/agee4">GitHub</Link></li>
          <li><Link to="#" onClick={downloadResume}>Resume</Link></li>
        </ul>
      </nav>
      <p>
        <b>This site was designed by Aaron Gee</b>
        <br />
        Copypaste 2025. idk what rights are reserved <img className="emoji-img" src={bobLogo} alt=":D" />
      </p>
    </footer>
  )
}

export default ReferenceFooter