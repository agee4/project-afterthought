// ResumePage.jsx
import pageTitleFunct from '../../components/Functions/pageTitleFunct'
import ResumeButton from '../../components/ResumeButton'
import IconItem from '../../components/IconItem'

const ResumePage = () => {
  pageTitleFunct("Overview")

  return (
    <>
      <h1 className="m-5 text-5xl font-bold">Overview</h1>
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
          <IconItem name="Python" />
          <IconItem name="C++" />
          <IconItem name="Java" />
          <IconItem name="C" />
          <IconItem name="Assembly" />
          <IconItem name="HTML" />
          <IconItem name="CSS" />
          <IconItem name="JavaScript" />
        </div>
        <li>Tools, Frameworks, & Libraries</li>
        <div className="flex flex-row flex-wrap place-content-center">
          <IconItem name="GitHub" />
          <IconItem name="React" />
          <IconItem name="NodeJS" />
          <IconItem name="Vite" />
          <IconItem name="Tailwind" />
        </div>
      </ul>
      <br />
    </>
  )
}

export default ResumePage
