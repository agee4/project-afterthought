// ReferenceFooter.jsx
import { Link, } from "react-router-dom"
import bobLogo from "../assets/logo/logo_shadow.svg"
import resumePDF from "../assets/aarongeeresume.pdf"

const ReferenceFooter = () => {
  return (
    <footer className="reference">
      <nav className="reference-nav">
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
          <li><h1><Link to="/contact" title="Contact">Contact</Link></h1></li>
          <li><Link to="mailto:agee4@uci.edu">agee4@uci.edu</Link></li>
          <li><Link to="https://www.linkedin.com/in/aaron-gee-7350712b9">LinkedIn</Link></li>
        </ul>
      </nav>
      <p>
        <b>This site was designed by Aaron Gee</b><br />
        🄯 2025 idk what rights are reserved <img className="emoji-img" src={bobLogo} alt=":D" />
      </p>
    </footer>
  )
}

export default ReferenceFooter