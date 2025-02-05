// HomePage.jsx
import PageTitle from "../components/PageTitle"
import Logo from "../assets/logo.svg"

const HomePage = () => {
  return (
    <div>
      <PageTitle title="Aaron Gee's Portfolio" />
      <h1>Aaron Gee's Amazing Digital Portfolio</h1>
      <img
        className={"gallery-img"}
        src={Logo}
        alt="a crudely drawn simplistic face"
      />
      <h2>An online collection of Aaron Gee's past and present work</h2>
      <p>
        Welcome to my site! Check out my projects, past and present, 
        and learn what I might be able to do for you!
      </p>
    </div>    
  )
}

export default HomePage