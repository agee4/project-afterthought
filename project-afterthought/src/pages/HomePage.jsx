// HomePage.jsx
import { Link } from "react-router-dom"
import pageTitle from "../components/pageTitleFunct"
import Logo from "../assets/logo/logo_shadow.png"
import RideOrganizerImg from "../assets/rideorganizerapploggedin.png"
import FireDetectorImg from "../assets/firedetectordronefinal.png"
import PortfolioWebsiteImg from "../assets/portfoliowebsiterecursive.png"

const HomePage = () => {
  pageTitle()
  return (
    <div className="page">
      <h1>Aaron Gee's Amazing Digital Portfolio</h1>
      <img
        id="home-img"
        src={Logo}
        alt="a crudely drawn simplistic face"
        title="hello!"
      />
      <h2>An online collection of Aaron Gee's past and present work</h2>
      <p>
        Welcome to my site! Check out my work and learn what I might be able to do for you!
      </p>
      <Link to="/projects" title="Projects Home"><button><h2>Projects</h2></button></Link>
      <hr />
      <ul className="gallery" id="home-gallery">
        <li>
          <Link to="/projects/ride-organizer" title="Ride Organizer App"><h3>Ride Organizer App</h3></Link>
          <Link to="/projects/ride-organizer" title="Ride Organizer App">
            <img
              src={RideOrganizerImg}
              alt="The final fire detection drone"
              title="The final fire detection drone"
            />
          </Link>
        </li>
        <li>
          <Link to="/projects/fire-detector" title="Fire Detection Model"><h3>Fire Detector Model</h3></Link>
          <Link to="/projects/fire-detector" title="Fire Detection Model">
            <img
              src={FireDetectorImg}
              alt="The final fire detection drone"
              title="The final fire detection drone"
            />
          </Link>
        </li>
        <li>
          <Link to="/projects/portfolio-site" title="Portfolio Website"><h3>Portfolio Website</h3></Link>
          <Link to="/projects/portfolio-site" title="Portfolio Website">
            <img
              src={PortfolioWebsiteImg}
              alt="The homepage of my portfolio website"
              title="Recursive!"
            />
          </Link>
        </li>
      </ul>
      <br />
    </div>    
  )
}

export default HomePage