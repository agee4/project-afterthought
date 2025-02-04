// ContactPage.jsx
import { Link } from "react-router-dom"
import PageTitle from "../../components/PageTitle"
import resumePDF from "../../assets/aarongeeresume.pdf"

const ContactPage = () => {
  const downloadResume = () => {
    fetch({resumePDF}).then((response) => {
      let alink = document.createElement("a");
      alink.href = resumePDF;
      alink.download = "aarongee-resume.pdf";
      alink.click();
    })
  }

  return (
    <div>
      <PageTitle title="Contact - Aaron Gee Portfolio" />
      <h1>Talk to me!</h1>
      <p>Interested in hiring me? Contact me through one of the following!</p>
      <table>
        <tbody>
          <tr>
            <th>Email</th>
            <td><Link to="mailto:agee4@uci.edu">agee4@uci.edu</Link></td>
          </tr>
          <tr>
            <th>Cell</th>
            <td><Link to="tel:+1916-385-7559">+1 (916) 385-7559</Link></td>
          </tr>
          <tr>
            <th>LinkedIn</th>
            <td><Link to="https://www.linkedin.com/in/aaron-gee-7350712b9">aaron-gee-7350712b9</Link></td>
          </tr>
        </tbody>
      </table>
      <button onClick={downloadResume}>Resume</button>
    </div>    
  )
}

export default ContactPage