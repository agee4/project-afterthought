// ProjectsPage.jsx
import { Link } from "react-router"
import pageTitle from "../../components/Functions/pageTitleFunct"

const ProjectsPage = () => {
  pageTitle("Projects Home")

  return (
    <>
      <h1 className="font-bold text-5xl m-5">Past, Present, and Pfuture Projects!</h1>
      <h2 className="font-bold text-3xl m-3">Past Projects</h2>
      <p>
        <Link to="../projects/ride-organizer">Ride Organizer</Link>
      </p>
      <p>
        <Link to="../projects/fire-detector">Fire Detector</Link>
      </p>
      <h2 className="font-bold text-3xl m-3">Present Projects</h2>
      <p>
        <Link to="../projects/portfolio-site">Portfolio Website</Link>
      </p>
      <h2 className="font-bold text-3xl m-3">Future Projects</h2>
      <p>
        <Link to="../projects/pvz-bb">Plants vs. Zombies: Botanical Battles</Link>
      </p>
      <p>
        Project Afterthought
      </p>
    </>
  )
}

export default ProjectsPage