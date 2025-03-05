// ContactPage.jsx
import { Link } from "react-router"
import Page from "../../components/Page"
import ResumeButton from "../../components/ResumeButton"
import Emoji from "../../components/Emoji"

const EmailIcon = "https://www.svgrepo.com/show/370975/email.svg"
const PhoneIcon = "https://www.svgrepo.com/show/491468/phone.svg"
const GitHubIcon =
  "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg"
const LinkedInIcon = "https://www.svgrepo.com/show/306342/linkedin.svg"

const ContactPage = () => <Page title="Contact">
  <h1 className="m-5 text-5xl font-bold">Talk to me!</h1>
  <p className="italic">Interested in hiring me? Contact me through one of the following!</p>
  <table className="mx-auto text-center">
    <tbody>
      <tr className="border-b border-gray-300">
        <th className="border-r border-gray-300 px-4 py-2 text-left">
          <Emoji mono src={EmailIcon} />
          <span className="ml-1" />
          Email
        </th>
        <td className="px-4 py-2">
          <Link className="hover:text-indigo-500" to="mailto:aarongeenius@gmail.com">
            aarongeenius@gmail.com
          </Link>
        </td>
      </tr>
      <tr className="border-b border-gray-300">
        <th className="border-r border-gray-300 px-4 py-2 text-left">
          <Emoji mono src={PhoneIcon} />
          <span className="ml-1" />
          Cell
        </th>
        <td className="px-4 py-2">
          <Link className="hover:text-indigo-500" to="tel:+1916-385-7559">+1 (916) 385-7559</Link>
        </td>
      </tr>
      <tr className="border-b border-gray-300">
        <th className="border-r border-gray-300 px-4 py-2 text-left">
          <Emoji mono src={LinkedInIcon} />
          <span className="ml-1" />
          LinkedIn
        </th>
        <td className="px-4 py-2">
          <Link className="hover:text-indigo-500" to="https://www.linkedin.com/in/aarongee0925">
            aarongee0925
          </Link>
        </td>
      </tr>
      <tr>
        <th className="border-r border-gray-300 px-4 py-2 text-left">
          <Emoji mono src={GitHubIcon} />
          <span className="ml-1" />
          GitHub
        </th>
        <td className="px-4 py-2">
          <Link className="hover:text-indigo-500" to="https://github.com/agee4">agee4</Link>
        </td>
      </tr>
    </tbody>
  </table>
  <p>You can also download and review my resume below!</p>
  <p>
    {" "}
    ---&gt; <ResumeButton /> &lt;---
  </p>
</Page>

export default ContactPage
