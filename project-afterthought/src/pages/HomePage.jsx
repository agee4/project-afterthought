// HomePage.jsx
import pageTitle from "../components/pageTitleFunct"
import Logo from "../assets/logo/logo_shadow.png"
import { Link } from "react-router-dom"

const HomePage = () => {
  pageTitle()
  return (
    <div className="page">
      <h1>Aaron Gee's Amazing Digital Portfolio</h1>
      <img
        className={"home-img"}
        src={Logo}
        alt="a crudely drawn simplistic face"
        title="hello!"
      />
      <h2>An online collection of Aaron Gee's past and present work</h2>
      <p>
        Welcome to my site! Check out my projects and learn what I might be able to do for you!
      </p>
      <ul className="gallery">
        <li><h2><Link>Ride Organizer App</Link></h2></li>
        <li><h2><Link>Fire Detector Drone</Link></h2></li>
        <li><h2><Link>Portfolio Website</Link></h2></li>
      </ul>
    </div>    
  )
}

export default HomePage