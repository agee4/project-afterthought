// ContactPage.jsx
import { Link } from "react-router"
import pageTitle from "../../components/Functions/pageTitleFunct"
import ResumeButton from "../../components/ResumeButton"
import Emoji from "../../components/Emoji"

const EmailIcon =
  "https://www.svgrepo.com/show/370975/email.svg"
const PhoneIcon =
  "https://www.svgrepo.com/show/491468/phone.svg"
const GitHubIcon =
  "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg"
const LinkedInIcon =
  "https://www.svgrepo.com/show/306342/linkedin.svg"

const ContactPage = () => {
  pageTitle("Contact")

  return (
    <main className="flex-1 animate-fadein">
      <h1 className="m-5 text-5xl font-bold">Talk to me!</h1>
      <p>Interested in hiring me? Contact me through one of the following!</p>
      <table className="mx-auto border-collapse border-2 border-gray-300 rounded-lg text-center">
        <caption>Contact Links</caption>
        <tbody>
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">
              <Emoji mono src={EmailIcon} />
              <span className="ml-1" />Email
            </th>
            <td className="border border-gray-300 px-4 py-2">
              <Link to="mailto:aarongeenius@gmail.com">
                aarongeenius@gmail.com
              </Link>
            </td>
          </tr>
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">
              <Emoji mono src={PhoneIcon} />
              <span className="ml-1" />Cell
            </th>
            <td className="border border-gray-300 px-4 py-2">
              <Link to="tel:+1916-385-7559">+1 (916) 385-7559</Link>
            </td>
          </tr>
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">
              <Emoji mono src={LinkedInIcon} />
              <span className="ml-1" />LinkedIn
            </th>
            <td className="border border-gray-300 px-4 py-2">
              <Link to="https://www.linkedin.com/in/aarongee0925">
                aarongee0925
              </Link>
            </td>
          </tr>
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">
              <Emoji mono src={GitHubIcon} />
              <span className="ml-1" />GitHub
            </th>
            <td className="border border-gray-300 px-4 py-2">
              <Link to="https://github.com/agee4">agee4</Link>
            </td>
          </tr>
        </tbody>
      </table>
      <p>You can also download and review my resume below!</p>
      <p>
        {" "}
        ---&gt; <ResumeButton /> &lt;---
      </p>
    </main>
  )
}

export default ContactPage
