// ThanksPage.jsx
import pageTitleFunct from "../components/pageTitleFunct"

const ThanksPage = () => {
  
  pageTitleFunct("Special Thanks", false)

  return (
    <div className="page">
      <h1>Special Thanks!</h1>
      <p><i>For all the organizations and people that helped me make this site a reality!</i></p>
      <h2>Jesus Christ</h2>
      <p>For dying and rising again for my sins</p>
      <h2>Mom & Dad</h2>
      <p>For being the best mom and dad I could ever ask for</p>
      <h2>My brother, Stephen</h2>
      <p>For sending the best cat memes every day at 8:26pm PST</p>
      <h2>W3Schools</h2>
      <p>For providing a lot of helpful web dev tutorials</p>
    </div>    
  )
}

export default ThanksPage