// PortfolioSitePage.jsx
import pageTitle from "../../components/pageTitleFunct"

const PortfolioSitePage = () => {
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
    </div>    
  )
}

export default PortfolioSitePage