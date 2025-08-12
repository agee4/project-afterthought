// ResumePage.jsx
import Page from "../../components/Page"
import ResumeButton from "../../components/ResumeButton"
import IconItem from "../../components/IconItem"

const ResumePage = () => (
  <Page title="Overview">
    <h1 className="m-5 text-5xl font-bold text-indigo-500">Overview</h1>
    <ResumeButton />

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
      <IconItem name="TypeScript" mono />
      <IconItem name="Dart" mono />
    </div>
    <h3 className="m-1 text-xl font-bold">Tools, Frameworks, & Libraries</h3>
    <div className="flex flex-row flex-wrap place-content-center">
      <IconItem name="GitHub" />
      <IconItem name="OpenCV" />
      <IconItem name="React" mono />
      <IconItem name="Vite" />
      <IconItem name="NextJS" />
      <IconItem name="NodeJS" mono />
      <IconItem name="Tailwind" />
      <IconItem name="ReactRouter" />
      <IconItem name="SheetJS" />
      <IconItem name="Flutter" />
    </div>

    <h2 className="m-3 text-3xl font-bold">Projects</h2>
    <h3 className="m-1 text-xl font-bold">Fire Detector Model+Drone</h3>
    <ul className="list-inside list-disc px-5 text-left">
      <li>
        Prototyped low-cost semi-autonomous aerial drone with fire detection
        capabilities
      </li>
      <li>
        Developed fire detecting program using <b>Python</b> and <b>OpenCV</b>
      </li>
      <li>
        Experimented with <b>Haar cascade algorithms</b> for detecting fires and
        people
      </li>
      <li>
        Combined <b>traditional image processing techniques</b> and{" "}
        <b>thermal imagery</b> to accurately identify the presence of fires with
        low latency and reduced power consumption
      </li>
      <li>
        <b>Communicated software-oriented ideas</b> and{" "}
        <b>delegated equal project responsibilities</b> with teammates for
        efficient prototype development
      </li>
    </ul>
    <h3 className="m-1 text-xl font-bold">Ride Organizer App</h3>
    <ul className="list-inside list-disc px-5 text-left">
      <li>Created a web-based ride organizing application.</li>
      <li>
        Produced a user-friendly frontend website using <b>React</b>, and a
        stable backend using <b>NodeJS</b> and <b>MongoDB</b>.
      </li>
      <li>
        Implemented user authentication using <b>Auth0</b> for secure access to
        the application.
      </li>
    </ul>
    <h3 className="m-1 text-xl font-bold">Portfolio Website</h3>
    <ul className="list-inside list-disc px-5 text-left">
      <li>
        Developed a personal project documentation website using <b>Vite</b> and
        <b>Tailwind</b>
      </li>
      <li>
        Version control using <b>GitHub</b> with a website accessible GitHub
        changelog using <b>Octokit</b> and <b>GitHub Apps</b>
      </li>
      <li>Responsive header bar styling for mobile and desktop users</li>
    </ul>
    <h3 className="m-1 text-xl font-bold">Group Organizer App</h3>
    <ul className="list-inside list-disc px-5 text-left">
      <li>Created a web-based ride organizing application.</li>
      <li>
        Produced a user-friendly frontend website using <b>React</b>, and a
        stable backend using <b>NodeJS</b> and <b>MongoDB</b>.
      </li>
      <li>
        Created a configurable group organizing application using{" "}
        <b>TypeScript</b>-based <b>NextJS</b>
      </li>
      <li>
        Use forms to create assignable items, then organize them into groups
        manually or automatically (based on configured attributes)
      </li>
      <li>
        Load/save assignable data between spreadsheet-style files &{" "}
        <b>Google Sheets</b> using <b>SheetJS</b>
      </li>
    </ul>

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
    <br />
  </Page>
)

export default ResumePage
