// ContactPage.jsx
import { Link } from "react-router-dom"

const ContactPage = () => {
  return (
    <div>
      <h1>Talk to me!</h1>
      <p>
        Interested in hiring me? Contact me through one of the following!<br />
        <Link to="mailto:agee4@uci.edu">agee4@uci.edu</Link><br />
        <Link to="tel:+1916-385-7559">+1 (916) 385-7559</Link><br />
        <Link to="https://www.linkedin.com/in/aaron-gee-7350712b9">LinkedIn</Link>
      </p>
      
    </div>    
  )
}

export default ContactPage