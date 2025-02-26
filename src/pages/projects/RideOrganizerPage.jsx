// RideOrganizerPage.jsx
import { Link } from "react-router"
import pageTitle from "../../components/Functions/pageTitleFunct"
import ModalImage from "../../components/Modal/ModalImage"
import LoggedInHomeImg from "../../assets/rideorganizerapploggedin.png"
import LoggedOutHomeImg from "../../assets/rideorganizerapploggedout.png"

const RideOrganizerPage = () => {
  const HTMLIcon = "https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"
  const CSSIcon = "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
  const JSIcon = "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
  const ReactIcon = "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
  const NodeJSIcon = "https://nodejs.org/static/logos/jsIconGreen.svg"
  const Auth0Icon = "https://cdn.auth0.com/quantum-assets/dist/latest/logos/auth0/auth0-icon-onlight.svg"

  pageTitle("Ride Organizer")
      /*<Link to="https://ridesprojectfrontend.onrender.com">
        <img
          className="profile-img"
          src={LoggedOutHomeImg}
          title="Check out the website!"
        />
      </Link>*/

  return (
    <>
      <h1 className="font-bold text-5xl m-5">Ride Organizer Application</h1>
      <p>
        <i>A first step into fullstack application development.</i>
      </p>
      <h2 className="font-bold text-3xl m-3">What is this project?</h2>
      <p>
        The <b>Berean Community Church College Ride Organizer</b> was a programming project 
        for <abbr title="University of California, Irvine">UCI</abbr>'s CompSci 137 class (Internet Applications Engineering). 
        It was completed as a group alongside 3 other students during the UCI 2024 Spring Quarter. 
        The goal was to create a fullstack internet application 
        with the purpose of helping ride coordinators 
        assign a large amount of passengers to various drivers, 
        accounting for location and time.
      </p>
      <ModalImage
        className="img/profile m-auto max-w-1/2"
        src={LoggedInHomeImg}
        alt="A sample screenshot of the Ride Organizer Website, logged in"
        title="A sample screenshot of the Ride Organizer Website, logged in"
      />
      <p>
        The application supported authentication, ride list creation, and ride list saving/loading.
      </p>
      <h2 className="font-bold text-3xl m-3">What did I learn?</h2>
      <h3 className="font-bold text-xl m-1">General</h3>
      <ul>
        <li>principles of web development (frontend & backend)</li>
        <li>delegation of responsibilities and tasks</li>
      </ul>
      <h3 className="font-bold text-xl m-1">Specific Skills</h3>
      <ul>
        <li>Basics of standard web standard languages</li>
        <ul>
          <li>HTML <img className="emoji h-[0.75rem] inline-block align-baseline" src={HTMLIcon} /></li>
          <li>CSS <img className="emoji h-[0.75rem] inline-block align-baseline" src={CSSIcon} /></li>
          <li>JavaScript <img className="emoji h-[0.75rem] inline-block align-baseline" src={JSIcon} /></li>
        </ul>
        <li>Basics of web development JavaScript-based libraries and environments</li>
        <ul>
          <li>React <img className="emoji h-[0.75rem] inline-block align-baseline" src={ReactIcon} /></li>
          <li>NodeJS <img className="emoji h-[0.75rem] inline-block align-baseline" src={NodeJSIcon} /></li>
        </ul>
        <li>Auth0 <img className="emoji h-[0.75rem] inline-block align-baseline" src={Auth0Icon} /> (create authentication protocols)</li>
      </ul>
      <h2 className="font-bold text-3xl m-3">Check out the final site!</h2>
      <embed
        className="m-auto w-[75%] h-[75vh]"
        src="https://ridesprojectfrontend.onrender.com"
      />
      <h3>
        <Link to="https://ridesprojectfrontend.onrender.com"><button>Project Site</button></Link>
      </h3>
    </>
  )
}

export default RideOrganizerPage