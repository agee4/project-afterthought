// ThanksPage.jsx
import pageTitleFunct from "../../components/Functions/pageTitleFunct"

const ThanksPage = () => {
  pageTitleFunct("Special Thanks", false)

  return (
    <main className="flex-1 animate-fadein">
      <h1 className="m-5 text-5xl font-bold">Special Thanks!</h1>
      <p>
        <i>
          For all the organizations and people that helped me make this site a
          reality!
        </i>
      </p>
      <h2 className="m-3 text-3xl font-bold">Jesus Christ</h2>
      <p>For dying and rising again for my sins</p>
      <h2 className="m-3 text-3xl font-bold">Mom & Dad</h2>
      <p>For being the best mom and dad I could ever ask for</p>
      <h2 className="m-3 text-3xl font-bold">My brother, Stephen</h2>
      <p>For sending the best cat memes every day at 8:26pm PST</p>
      <h2 className="m-3 text-3xl font-bold">W3Schools</h2>
      <p>For providing a lot of helpful web dev tutorials</p>
    </main>
  )
}

export default ThanksPage
