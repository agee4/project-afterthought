// ResumePage.jsx
import pageTitleFunct from '../../components/Functions/pageTitleFunct'
import ResumeButton from '../../components/ResumeButton'
import ViteIcon from '../../../public/vite.svg'

const ResumePage = () => {
  const PythonIcon =
    'https://upload.wikimedia.org/wikipedia/commons/1/1f/Python_logo_01.svg'
  const JavaIcon =
    'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg'
  const CPPIcon =
    'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg'
  const CIcon =
    'https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg'
  const HTMLIcon =
    'https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg'
  const CSSIcon =
    'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg'
  const JSIcon =
    'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg'
  const ReactIcon =
    'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
  const NodeJSIcon = 'https://nodejs.org/static/logos/jsIconGreen.svg'
  const GitHubIcon =
    'https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg'
  const TailwindIcon =
    'https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg'
  pageTitleFunct('Digital Resume')

  return (
    <>
      <h1 className="m-5 text-5xl font-bold">Resume</h1>
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
        <ul>
          <li>
            Python{' '}
            <img
              className="emoji inline-block h-[0.75rem] align-baseline"
              src={PythonIcon}
            />
          </li>
          <li>
            C++{' '}
            <img
              className="emoji inline-block h-[0.75rem] align-baseline"
              src={CPPIcon}
            />
          </li>
          <li>
            Java{' '}
            <img
              className="emoji inline-block h-[0.75rem] align-baseline"
              src={JavaIcon}
            />
          </li>
          <li>
            C{' '}
            <img
              className="emoji inline-block h-[0.75rem] align-baseline"
              src={CIcon}
            />
          </li>
          <li>Assembly</li>
          <li>
            HTML{' '}
            <img
              className="emoji inline-block h-[0.75rem] align-baseline"
              src={HTMLIcon}
            />
          </li>
          <li>
            CSS{' '}
            <img
              className="emoji inline-block h-[0.75rem] align-baseline"
              src={CSSIcon}
            />
          </li>
          <li>
            JavaScript{' '}
            <img
              className="emoji inline-block h-[0.75rem] align-baseline"
              src={JSIcon}
            />
          </li>
        </ul>
        <li>Tools, Frameworks, & Libraries</li>
        <ul>
          <li>
            GitHub{' '}
            <img
              className="emoji inline-block h-[0.75rem] align-baseline"
              src={GitHubIcon}
            />
          </li>
          <li>
            React{' '}
            <img
              className="emoji inline-block h-[0.75rem] align-baseline"
              src={ReactIcon}
            />
          </li>
          <li>
            NodeJS{' '}
            <img
              className="emoji inline-block h-[0.75rem] align-baseline"
              src={NodeJSIcon}
            />
          </li>
          <li>
            Vite{' '}
            <img
              className="emoji inline-block h-[0.75rem] align-baseline"
              src={ViteIcon}
            />
          </li>
          <li>
            Tailwind{' '}
            <img
              className="emoji inline-block h-[0.75rem] align-baseline"
              src={TailwindIcon}
            />
          </li>
        </ul>
      </ul>
    </>
  )
}

export default ResumePage
