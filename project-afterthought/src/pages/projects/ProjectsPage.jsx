// ProjectsPage.jsx
import { Link, } from "react-router-dom"

const ProjectsPage = () => {
  return (
    <div className={'titleContainer'}>
      <h1>Past, Present, and Pfuture Projects!</h1>
      <h2>Past Projects</h2>
      <p>
        <Link to="/projects/ride-organizer">Ride Organizer Project</Link><br />
        <Link to="/projects/fire-detector">Fire Detector</Link>
      </p>
      <h2>Present Projects</h2>
      <p>
        <Link to="/projects/ride-organizer">Ride Organizer But Better</Link><br />
      </p>
    </div>
  )
}

export default ProjectsPage