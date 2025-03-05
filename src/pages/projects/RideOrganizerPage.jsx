// RideOrganizerPage.jsx
import { Link } from "react-router"
import Page from "../../components/Page"
import ModalImage from "../../components/Modal/ModalImage"
import IconItem from "../../components/IconItem"
import LoggedInHomeImg from "../../assets/rideorganizerapploggedin.png"
import LoggedOutHomeImg from "../../assets/rideorganizerapploggedout.png"

const RideOrganizerPage = () => <Page title="Ride Organizer">
  <h1 className="m-5 text-5xl font-bold">Ride Organizer Application</h1>
  <p className="italic">
    A first step into fullstack application development.
  </p>
  <h2 className="m-3 text-3xl font-bold">What is this project?</h2>
  <p>
    The <span className="font-bold">Berean Community Church College Ride Organizer</span> was a
    programming project for{" "}
    <abbr title="University of California, Irvine">UCI</abbr>'s CompSci 137
    class (Internet Applications Engineering). It was completed as a group
    alongside 3 other students during the UCI 2024 Spring Quarter. The goal
    was to create a fullstack internet application with the purpose of
    helping ride coordinators assign a large amount of passengers to various
    drivers, accounting for location and time.
  </p>
  <ModalImage
    className="img/profile m-auto max-w-1/2"
    src={LoggedInHomeImg}
    alt="A sample screenshot of the Ride Organizer Website, logged in"
    title="A sample screenshot of the Ride Organizer Website, logged in"
  />
  <p>
    The application supported authentication, ride list creation, and ride
    list saving/loading.
  </p>
  <h2 className="m-3 text-3xl font-bold">What did I learn?</h2>
  <h3 className="m-1 text-xl font-bold">General</h3>
  <ul>
    <li>principles of web development (frontend & backend)</li>
    <li>delegation of responsibilities and tasks</li>
  </ul>
  <h3 className="m-1 text-xl font-bold">Specific Skills</h3>
  <ul>
    <li>Basics of standard web standard languages</li>
    <div className="flex flex-row flex-wrap place-content-center">
      <IconItem name="HTML" />
      <IconItem name="CSS" />
      <IconItem name="JavaScript" />
    </div>
    <li>
      Basics of web development JavaScript-based libraries and environments
    </li>
    <div className="flex flex-row flex-wrap place-content-center">
      <IconItem name="React" />
      <IconItem name="NodeJS" />
      <IconItem name="Auth0" />
    </div>
  </ul>
  <h2 className="m-3 text-3xl font-bold hover:text-indigo-500">
    <Link to="https://ridesprojectfrontend.onrender.com">
      Check out the final site!
    </Link>
  </h2>
  <embed
    className="m-auto h-[75vh] w-[75%] rounded-sm border-5 border-indigo-500 p-2"
    src="https://ridesprojectfrontend.onrender.com"
  />
  <br />
</Page>

export default RideOrganizerPage
