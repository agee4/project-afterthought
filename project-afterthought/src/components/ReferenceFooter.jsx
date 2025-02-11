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
    let randomIndex = Math.floor(Math.random() * 10)
    switch (randomIndex) {
      case 0: setRandomPath('/'); break;
      case 1: setRandomPath('/purpose'); break;
      case 2: setRandomPath('/about-me'); break;
      case 3: setRandomPath('/projects'); break;
      case 4: setRandomPath('/projects/ride-organizer'); break;
      case 5: setRandomPath('/projects/fire-detector'); break;
      case 6: setRandomPath('/projects/portfolio-site'); break;
      case 7: setRandomPath('/projects/pvz-bb'); break;
      case 8: setRandomPath('/changelog'); break;
      case 9: setRandomPath('/contact'); break;
    }
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
        </ul>
        <ul>
          <li><h1><Link to="/contact" title="Contact">Contact</Link></h1></li>
          <li><Link to="mailto:agee4@uci.edu">agee4@uci.edu</Link></li>
          <li><Link to="https://www.linkedin.com/in/aaron-gee-7350712b9">LinkedIn</Link></li>
          <li><Link onClick={downloadResume}>Resume</Link></li>
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