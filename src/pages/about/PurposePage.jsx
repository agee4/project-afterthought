// PurposePage.jsx
import pageTitle from "../../components/pageTitleFunct"

const PurposePage = () => {
  pageTitle("Site Purpose")

  return (
    <div className="page">
      <h1>Why does this site exist?</h1>
      <p>
        <b>Aaron Gee's Digital Portfolio</b> is intended to be a small exhibition of 
        Aaron Gee's past accomplishments and present skills, demonstrating his computer science 
        experience to friends and potential future employers.
      </p>
      <p>
        Projects detailed on this site demonstrate various skills, ranging from robust internet 
        application architecture to efficient and functional program design.
      </p>
    </div>
  )
}

export default PurposePage