// ResumePage.jsx
import pageTitleFunct from "../../components/pageTitleFunct"

const ResumePage = () => {
  const PythonIcon = "https://upload.wikimedia.org/wikipedia/commons/1/1f/Python_logo_01.svg"
  const CPPIcon = "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg"
  const CIcon = "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg"
  const HTMLIcon = "https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"
  const CSSIcon = "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
  const JSIcon = "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
  const ReactIcon = "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
  const GitHubIcon = "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg"
  pageTitleFunct("Digital Resume")

  return (
    <div className="page">
      <h1>Resume</h1>
      <h2>Projects</h2>
      <h2>Education</h2>
      <h2>Skills</h2>
      <ul>
        <li>Computer Languages</li>
        <ul>
          <li>Python <img className="emoji-img" src={PythonIcon} /></li>
          <li>C++ <img className="emoji-img" src={CPPIcon} /></li>
          <li>Java</li>
          <li>C <img className="emoji-img" src={CIcon} /></li>
          <li>Assembly</li>
          <li>HTML <img className="emoji-img" src={HTMLIcon} /></li>
          <li>CSS <img className="emoji-img" src={CSSIcon} /></li>
          <li>JavaScript <img className="emoji-img" src={JSIcon} /></li>
        </ul>
        <li>Tools, Frameworks, & Libraries</li>
        <ul>
          <li>GitHub <img className="emoji-img" src={GitHubIcon} /></li>
          <li>React <img className="emoji-img" src={ReactIcon} /></li>
        </ul>
      </ul>
    </div>
  )
}

export default ResumePage