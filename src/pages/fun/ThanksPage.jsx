// ThanksPage.jsx
import pageTitleFunct from "../../components/Functions/pageTitleFunct"

const ThanksPage = () => {
  
  pageTitleFunct("Special Thanks", false)

  return (
    <>
      <h1 className="font-bold text-5xl m-5">Special Thanks!</h1>
      <p><i>For all the organizations and people that helped me make this site a reality!</i></p>
      <h2 className="font-bold text-3xl m-3">Jesus Christ</h2>
      <p>For dying and rising again for my sins</p>
      <h2 className="font-bold text-3xl m-3">Mom & Dad</h2>
      <p>For being the best mom and dad I could ever ask for</p>
      <h2 className="font-bold text-3xl m-3">My brother, Stephen</h2>
      <p>For sending the best cat memes every day at 8:26pm PST</p>
      <h2 className="font-bold text-3xl m-3">W3Schools</h2>
      <p>For providing a lot of helpful web dev tutorials</p>
    </>
  )
}

export default ThanksPage