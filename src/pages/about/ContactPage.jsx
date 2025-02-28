// ContactPage.jsx
import { Link } from "react-router"
import pageTitle from "../../components/Functions/pageTitleFunct"
import ResumeButton from "../../components/ResumeButton"

const ContactPage = () => {
  pageTitle("Contact")

  return (
    <>
      <h1 className="m-5 text-5xl font-bold">Talk to me!</h1>
      <p>Interested in hiring me? Contact me through one of the following!</p>
      <table className="mx-auto border-collapse border-2 border-gray-300 text-center">
        <caption>Contact Links</caption>
        <tbody>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <td className="border border-gray-300 px-4 py-2">
              <Link to="mailto:aarongeenius@gmail.com">
                aarongeenius@gmail.com
              </Link>
            </td>
          </tr>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Cell</th>
            <td className="border border-gray-300 px-4 py-2">
              <Link to="tel:+1916-385-7559">+1 (916) 385-7559</Link>
            </td>
          </tr>
          <tr>
            <th className="border border-gray-300 px-4 py-2">LinkedIn</th>
            <td className="border border-gray-300 px-4 py-2">
              <Link to="https://www.linkedin.com/in/aarongee0925">
                aarongee0925
              </Link>
            </td>
          </tr>
          <tr>
            <th className="border border-gray-300 px-4 py-2">GitHub</th>
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
    </>
  )
}

export default ContactPage
