// FriendsPage.jsx
import { Link } from "react-router"
import Page from "../../components/Page"

const FriendsPage = () => <Page title="Friends">
  <h1 className="m-5 text-5xl font-bold">Friends!</h1>
  <p className="italic">
      Not interested in hiring me, but still looking for an awesome candidate?
      Check out my friends!
    <br />
  </p>
  <ul>
    <li>
      <Link className="hover:text-indigo-500" to="https://www.linkedin.com/in/tyler-lee-ees">
        Tyler Lee's LinkedIn
      </Link>
    </li>
    <li>
      <Link className="hover:text-indigo-500" to="https://www.linkedin.com/in/wesleychin23879">
        Wesley Chin's LinkedIn
      </Link>
    </li>
    <li>
      <Link className="hover:text-indigo-500" to="https://jimfolio.xyz" title="Jimmy Jin">
        Jimmy Jin's Portfolio
      </Link>
      <embed
        className="m-auto h-[75vh] w-[75%] rounded-sm border-5 border-indigo-500 p-2"
        src="https://jimfolio.xyz"
      />
    </li>
  </ul>
</Page>

export default FriendsPage
