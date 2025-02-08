// HomePage.jsx
import pageTitle from "../components/pageTitleFunct"
import Logo from "../assets/logo/logo_shadow.png"

const HomePage = () => {
  pageTitle()
  return (
    <div className="page">
      <h1>Aaron Gee's Amazing Digital Portfolio</h1>
      <img
        className={"home-img"}
        src={Logo}
        alt="a crudely drawn simplistic face"
        title="hello!"
      />
      <h2>An online collection of Aaron Gee's past and present work</h2>
      <p>
        Welcome to my site! Check out my projects and learn what I might be able to do for you!
      </p>
    </div>    
  )
}

export default HomePage