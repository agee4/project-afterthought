// ProjectsPage.jsx
import { Link } from "react-router"
import Page from "../../components/Page"

const ProjectsPage = () => (
  <Page title="Projects Home">
    <h1 className="m-5 text-5xl font-bold">
      Past, Present, and Pfuture Projects!
    </h1>
    <div className="grid grid-cols-3 gap-4 px-16">
      <div>
        <h2 className="m-3 text-3xl font-bold">Past Projects</h2>
        <p>
          <Link
            className="hover:text-indigo-500"
            to="../projects/ride-organizer"
          >
            Ride Organizer
          </Link>
        </p>
        <p>
          <Link
            className="hover:text-indigo-500"
            to="../projects/fire-detector"
          >
            Fire Detector
          </Link>
        </p>
      </div>
      <div />
      <div />
      <div />
      <div>
        <h2 className="m-3 text-3xl font-bold">Present Projects</h2>
        <p>
          <Link
            className="hover:text-indigo-500"
            to="../projects/portfolio-site"
          >
            Portfolio Website
          </Link>
        </p>
        <p>
          <Link
            className="hover:text-indigo-500"
            to="../projects/ride-organizer-v2a"
          >
            Ride Organizer v.2A
          </Link>
        </p>
        <p>
          <Link
            className="hover:text-indigo-500"
            to="../projects/groupu-organizer"
          >
            GroupU Organizer
          </Link>
        </p>
      </div>
      <div />
      <div />
      <div />
      <div>
        <h2 className="m-3 text-3xl font-bold">Future Projects</h2>
        <p>
          <Link className="hover:text-indigo-500" to="../projects/pvz-bb">
            Plants vs. Zombies: Botanical Battles
          </Link>
        </p>
        <p>Project Afterthought</p>
      </div>
    </div>
  </Page>
)

export default ProjectsPage
