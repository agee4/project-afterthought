// PurposePage.jsx
import pageTitle from '../../components/Functions/pageTitleFunct'

const PurposePage = () => {
  pageTitle('Site Purpose')

  return (
    <>
      <h1 className="m-5 text-5xl font-bold">Why does this site exist?</h1>
      <p>
        <b>Aaron Gee's Digital Portfolio</b> is intended to be a small
        exhibition of Aaron Gee's past accomplishments and present skills,
        demonstrating his computer science experience to friends and potential
        future employers.
      </p>
      <p>
        Projects detailed on this site demonstrate various skills, ranging from
        robust internet application architecture to efficient and functional
        program design.
      </p>
    </>
  )
}

export default PurposePage
