// PortfolioSitePage.jsx
import { Link } from "react-router-dom"
import PageTitle from "../../components/PageTitle"

const PortfolioSitePage = () => {
  return (
    <div>
      <PageTitle title="Personal Portfolio Website - Aaron Gee Portfolio" />
      <h1>Personal Portfolio Website</h1>
      <p>
        <i>Demonstrating my computer science skills in more ways than one.</i>
      </p>
      <h2>What is this project?</h2>
      <p>
        The <b>Personal Portfolio Website</b> is a personal programming project  
        Initial work began 7 November 2024 and continues to this day. 
        The goal is to create a fullstack website that both explicitly and implicitly demonstrates 
        my computer science proficiencies (explicitly through the detailing of past and present 
        computer science projects, and implicitly through the ground-up building of the site).
      </p>
    </div>    
  )
}

export default PortfolioSitePage