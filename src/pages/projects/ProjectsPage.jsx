// ProjectsPage.jsx
import { Link } from "react-router-dom"
import pageTitle from "../../components/pageTitleFunct"

const ProjectsPage = () => {
  pageTitle("Projects Home")

  return (
    <div className="page">
      <h1>Past, Present, and Pfuture Projects!</h1>
      <h2>Past Projects</h2>
      <p>
        <Link to="../projects/ride-organizer">Ride Organizer</Link>
      </p>
      <p>
        <Link to="../projects/fire-detector">Fire Detector</Link>
      </p>
      <h2>Present Projects</h2>
      <p>
        <Link to="../projects/portfolio-site">Portfolio Website</Link>
      </p>
      <h2>Future Projects</h2>
      <p>
        <Link to="../projects/pvz-bb">Plants vs. Zombies: Botanical Battles</Link>
      </p>
      <p>
        Project Afterthought
      </p>
    </div>
  )
}

export default ProjectsPage