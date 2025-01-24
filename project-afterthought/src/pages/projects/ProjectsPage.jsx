// ProjectsPage.jsx
import { Link } from "react-router-dom"
import PageTitle from "../../components/PageTitle"

const ProjectsPage = () => {
  return (
    <div>
      <PageTitle title="Projects Home - Aaron Gee Portfolio" />
      <h1>Past, Present, and Pfuture Projects!</h1>
      <h2>Past Projects</h2>
      <p>
        <Link to="/projects/ride-organizer">Ride Organizer</Link><br />
        <Link to="/projects/fire-detector">Fire Detector</Link>
      </p>
      <h2>Present Projects</h2>
      <p>
        <Link to="/purpose">Portfolio Website</Link><br />
        <Link to="/projects/ride-organizer">Ride Organizer (But Better!)</Link><br />
        <Link to="/projects/pvz-bb">Plants vs. Zombies: Botanical Battles</Link>
      </p>
      <h2>Future Projects</h2>
      <p>
        Project Afterthought
      </p>
    </div>
  )
}

export default ProjectsPage