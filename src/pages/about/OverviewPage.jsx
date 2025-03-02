// ResumePage.jsx
import pageTitleFunct from "../../components/Functions/pageTitleFunct"
import ResumeButton from "../../components/ResumeButton"
import IconItem from "../../components/IconItem"

const ResumePage = () => {
  pageTitleFunct("Overview")

  return (
    <main className="flex-1 animate-fadein">
      <h1 className="m-5 text-5xl font-bold text-indigo-500">Overview</h1>
      <ResumeButton />
      <h2 className="m-3 text-3xl font-bold">Projects</h2>
      <ul>
        <li>Fire Detector Model+Drone</li>
        <li>Ride Organizer App</li>
        <li>Portfolio Website</li>
      </ul>
      <h2 className="m-3 text-3xl font-bold">Education</h2>
      <p>Computer Science and Engineering, B.S.</p>
      <h2 className="m-3 text-3xl font-bold">Skills</h2>
      <ul>
        <li>Computer Languages</li>
        <div className="flex flex-row flex-wrap place-content-center">
          <IconItem name="Python" mono />
          <IconItem name="C++" />
          <IconItem name="Java" />
          <IconItem name="C" />
          <IconItem name="Assembly" />
          <IconItem name="HTML" mono />
          <IconItem name="CSS" mono />
          <IconItem name="JavaScript" mono />
        </div>
        <li>Tools, Frameworks, & Libraries</li>
        <div className="flex flex-row flex-wrap place-content-center">
          <IconItem name="GitHub" />
          <IconItem name="React" mono />
          <IconItem name="NodeJS" mono />
          <IconItem name="Vite" />
          <IconItem name="Tailwind" />
        </div>
      </ul>
      <br />
    </main>
  )
}

export default ResumePage
