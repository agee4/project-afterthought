// FriendsPage.jsx
import { Link } from "react-router"
import pageTitleFunct from "../../components/Functions/pageTitleFunct"

const FriendsPage = () => {
  pageTitleFunct("Friends")

  return (
    <main className="flex-1 animate-fadein">
      <h1 className="m-5 text-5xl font-bold">Friends!</h1>
      <ul>
        <li>
          <Link to="https://jimfolio.xyz" title="Jimmy Jin">
            Jimmy Jin's Portfolio
          </Link>
        </li>
        <li>
          <Link to="https://www.linkedin.com/in/tyler-lee-ees">
            Tyler Lee's LinkedIn
          </Link>
        </li>
        <li>
          <Link to="https://www.linkedin.com/in/wesleychin23879">
            Wesley Chin's LinkedIn
          </Link>
        </li>
      </ul>
    </main>
  )
}

export default FriendsPage
