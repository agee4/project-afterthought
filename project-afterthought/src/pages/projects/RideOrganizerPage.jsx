// RideOrganizerPage.jsx
import { Link } from "react-router-dom"

const RideOrganizerPage = () => {
  return (
    <div>
      <h1>College Ride Organizer!</h1>
      <p>
        Senior year group project<br />
        Ever have a lot of drivers and passengers you need to assign for an event?<br />
        Then this site is the tool for you!
      </p>
      <h2>
        <Link to="https://ridesprojectfrontend.onrender.com">Ride Organizer Site</Link>
      </h2>
    </div>    
  )
}

export default RideOrganizerPage