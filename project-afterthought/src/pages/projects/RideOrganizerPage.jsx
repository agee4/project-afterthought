// RideOrganizerPage.jsx
import { Link } from "react-router-dom"

const RideOrganizerPage = () => {
  return (
    <div>
      <h1>College Ride Organizer!</h1>
      <p>
        <i>A fullstack application designed for ride coordinators to assign passengers to drivers.</i><br />
        The <b>Berean Community Church College Ride Organizer</b> was a group project 
        for UCI's CS137/INF124 (Internet Applications Engineering) that was created during 
        the 2024 Spring Quarter.<br />
        Ever have a lot of drivers and passengers you need to assign for an event?
        Then this site is the tool for you!
      </p>
      <h2>
        <Link to="https://ridesprojectfrontend.onrender.com">Ride Organizer Site</Link>
      </h2>
    </div>    
  )
}

export default RideOrganizerPage