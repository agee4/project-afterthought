// PortfolioSitePage.jsx
import pageTitle from "../../components/pageTitleFunct"
import PortfolioWebsiteImg from "../../assets/portfoliowebsiterecursive.png"

const PortfolioSitePage = () => {
  const HTMLIcon = "https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"
  const CSSIcon = "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
  const JSIcon = "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
  const ReactIcon = "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"

  pageTitle("Digital Portfolio Website")

  return (
    <div className="page">
      <h1>Digital Portfolio Website</h1>
      <p>
        <i>Showcasing my computer science skills in more ways than one.</i>
      </p>
      <h2>What is this project?</h2>
      <p>
        The <b>Digital Portfolio Website</b> is a personal programming project intended to showcase
        my computer-related projects and skills. 
        Initial work began 7 November 2024 and continues to this day. 
        The goal is to create a fullstack website that highlights my computer science proficiencies 
        through the documentation of past and present projects, along with demonstrating the ability 
        to design a frontend website using React.
      </p>
      <img
        className="profile-img"
        src={PortfolioWebsiteImg}
        alt="A sample screenshot of the Ride Organizer Website, logged in"
        title="A sample screenshot of the Ride Organizer Website, logged in"
      />
      <h2>What have I learned?</h2>
      <h3>Specific Skills</h3>
      <ul>
        <li>Basics of standard web standard languages</li>
        <ul>
          <li>HTML<img className="emoji-img" src={HTMLIcon} /></li>
          <li>CSS<img className="emoji-img" src={CSSIcon} /></li>
          <li>JavaScript<img className="emoji-img" src={JSIcon} /></li>
        </ul>
        <li>Basics of web development JavaScript-based libraries and environments</li>
        <ul>
          <li>React<img className="emoji-img" src={ReactIcon} /></li>
        </ul>
      </ul>
    </div>    
  )
}

export default PortfolioSitePage