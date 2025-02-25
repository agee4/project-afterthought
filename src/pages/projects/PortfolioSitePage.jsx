// PortfolioSitePage.jsx
import pageTitle from "../../components/pageTitleFunct"
import ModalImage from "../../components/Modal/ModalImage"
import PortfolioWebsiteImg from "../../assets/portfoliowebsiterecursive.png"
import ViteIcon from "../../../public/vite.svg"

const PortfolioSitePage = () => {
  const HTMLIcon = "https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"
  const CSSIcon = "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
  const JSIcon = "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
  const ReactIcon = "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
  const TailwindIcon = "https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg"

  pageTitle("Digital Portfolio Website")

  return (
    <>
      <h1 className="font-bold text-5xl m-5">Digital Portfolio Website</h1>
      <p>
        <i>Showcasing my computer science skills in more ways than one.</i>
      </p>
      <h2 className="font-bold text-3xl m-3">What is this project?</h2>
      <p>
        The <b>Digital Portfolio Website</b> is a personal programming project intended to showcase
        my computer-related projects and skills. 
        Initial work began 7 November 2024 and continues to this day. 
        The goal is to create a fullstack website that highlights my computer science proficiencies 
        through the documentation of past and present projects, along with demonstrating the ability 
        to design a frontend website using React.
      </p>
      <ModalImage
        className="profile-img"
        src={PortfolioWebsiteImg}
        alt="A screenshot of the Portfolio Website homepage"
      />
      <h2 className="font-bold text-3xl m-3">What have I learned?</h2>
      <h3 className="font-bold text-xl m-1">Specific Skills</h3>
      <ul>
        <li>Basics of standard web standard languages</li>
        <ul>
          <li>HTML <img className="emoji h-[0.75rem] inline-block align-baseline" src={HTMLIcon} /></li>
          <li>CSS <img className="emoji h-[0.75rem] inline-block align-baseline" src={CSSIcon} /></li>
          <li>JavaScript <img className="emoji h-[0.75rem] inline-block align-baseline" src={JSIcon} /></li>
        </ul>
        <li>Basics of web development JavaScript-based libraries and environments</li>
        <ul>
          <li>React <img className="emoji h-[0.75rem] inline-block align-baseline" src={ReactIcon} /></li>
          <li>Vite <img className="emoji h-[0.75rem] inline-block align-baseline" src={ViteIcon} /></li>
          <li>Tailwind <img className="emoji h-[0.75rem] inline-block align-baseline" src={TailwindIcon} /></li>
        </ul>
      </ul>
    </>
  )
}

export default PortfolioSitePage