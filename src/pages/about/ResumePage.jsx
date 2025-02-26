// ResumePage.jsx
import pageTitleFunct from "../../components/Functions/pageTitleFunct"
import ResumeButton from "../../components/ResumeButton"
import ViteIcon from "../../../public/vite.svg"

const ResumePage = () => {
  const PythonIcon = "https://upload.wikimedia.org/wikipedia/commons/1/1f/Python_logo_01.svg"
  const JavaIcon = "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg"
  const CPPIcon = "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg"
  const CIcon = "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg"
  const HTMLIcon = "https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"
  const CSSIcon = "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
  const JSIcon = "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
  const ReactIcon = "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
  const NodeJSIcon = "https://nodejs.org/static/logos/jsIconGreen.svg"
  const GitHubIcon = "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg"
  const TailwindIcon = "https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg"
  pageTitleFunct("Digital Resume")

  return (
    <>
      <h1 className="font-bold text-5xl m-5">Resume</h1>
      <ResumeButton />
      <h2 className="font-bold text-3xl m-3">Projects</h2>
      <ul>
        <li>Fire Detector Model+Drone</li>
        <li>Ride Organizer App</li>
        <li>Portfolio Website</li>
      </ul>
      <h2 className="font-bold text-3xl m-3">Education</h2>
      <p>Computer Science and Engineering, B.S.</p>
      <h2 className="font-bold text-3xl m-3">Skills</h2>
      <ul>
        <li>Computer Languages</li>
        <ul>
          <li>Python <img className="emoji h-[0.75rem] inline-block align-baseline" src={PythonIcon} /></li>
          <li>C++ <img className="emoji h-[0.75rem] inline-block align-baseline" src={CPPIcon} /></li>
          <li>Java <img className="emoji h-[0.75rem] inline-block align-baseline" src={JavaIcon} /></li>
          <li>C <img className="emoji h-[0.75rem] inline-block align-baseline" src={CIcon} /></li>
          <li>Assembly</li>
          <li>HTML <img className="emoji h-[0.75rem] inline-block align-baseline" src={HTMLIcon} /></li>
          <li>CSS <img className="emoji h-[0.75rem] inline-block align-baseline" src={CSSIcon} /></li>
          <li>JavaScript <img className="emoji h-[0.75rem] inline-block align-baseline" src={JSIcon} /></li>
        </ul>
        <li>Tools, Frameworks, & Libraries</li>
        <ul>
          <li>GitHub <img className="emoji h-[0.75rem] inline-block align-baseline" src={GitHubIcon} /></li>
          <li>React <img className="emoji h-[0.75rem] inline-block align-baseline" src={ReactIcon} /></li>
          <li>NodeJS <img className="emoji h-[0.75rem] inline-block align-baseline" src={NodeJSIcon} /></li>
          <li>Vite <img className="emoji h-[0.75rem] inline-block align-baseline" src={ViteIcon} /></li>
          <li>Tailwind <img className="emoji h-[0.75rem] inline-block align-baseline" src={TailwindIcon} /></li>
        </ul>
      </ul>
    </>
  )
}

export default ResumePage