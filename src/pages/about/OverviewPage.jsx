// ResumePage.jsx
import Page from "../../components/Page"
import ResumeButton from "../../components/ResumeButton"
import IconItem from "../../components/IconItem"

const ResumePage = () => (
  <Page title="Overview">
    <h1 className="m-5 text-5xl font-bold text-indigo-500">Overview</h1>
    <ResumeButton />
    <h2 className="m-3 text-3xl font-bold">Projects</h2>
    <h3 className="m-1 text-xl font-bold">Fire Detector Model+Drone</h3>
    <p>
      Prototyped low-cost semi-autonomous aerial drone with fire detection
      capabilities using Python. Developed the drone’s fire detecting program by
      combining image processing techniques, non-neural object detection, and
      thermal imagery to accurately identify the presence of fires. I also
      effectively communicated software-oriented ideas and plans to teammates
      unfamiliar with software topics to more efficiently develop better
      prototypes that were both accurate and inexpensive.
    </p>
    <h3 className="m-1 text-xl font-bold">Ride Organizer App</h3>
    <p>
      Created a web-based ride organizing application. Produced a user-friendly
      frontend website using React, and a stable backend using NodeJS and
      MongoDB.
    </p>
    <h3 className="m-1 text-xl font-bold">Portfolio Website</h3>
    <p>
      Created a project portfolio website. Produced a user-friendly frontend
      website using React and Tailwind.
    </p>

    <h2 className="m-3 text-3xl font-bold">Education</h2>
    <p>Computer Science and Engineering, B.S.</p>
    <p className="italic">Oct 2020 ~ June 2024</p>
    <p className="font-bold">University of California, Irvine</p>
    <h3 className="m-1 text-xl font-bold">Relevant Courses</h3>
    <div className="flex flex-row flex-wrap place-content-center">
      <IconItem name="Embedded Software" />
      <IconItem name="Data Structures" />
      <IconItem name="Algorithm Analysis & Design" />
      <IconItem name="Systems Engineering" />
      <IconItem name="Internet Applications Engineering" />
      <IconItem name="Computer Networks" />
      <IconItem name="Principles of Operating Systems" />
    </div>
    <div className="flex flex-row flex-wrap place-content-center">
      <IconItem name="Multivariable Calculus" />
      <IconItem name="Linear Algebra" />
      <IconItem name="Differential Equations" />
      <IconItem name="Boolean Logic" />
      <IconItem name="Discrete Mathematics" />
    </div>
    <div className="flex flex-row flex-wrap place-content-center">
      <IconItem name="Organization of Digital Computers" />
    </div>

    <h2 className="m-3 text-3xl font-bold">Skills</h2>
    <h3 className="m-1 text-xl font-bold">Computer Languages</h3>
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
    <h3 className="m-1 text-xl font-bold">Tools, Frameworks, & Libraries</h3>
    <div className="flex flex-row flex-wrap place-content-center">
      <IconItem name="GitHub" />
      <IconItem name="React" mono />
      <IconItem name="NodeJS" mono />
      <IconItem name="Vite" />
      <IconItem name="Tailwind" />
      <IconItem name="OpenCV" />
      <IconItem name="Notepad++" />
    </div>
    <br />
  </Page>
)

export default ResumePage
