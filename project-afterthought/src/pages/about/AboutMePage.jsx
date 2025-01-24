// AboutMePage.jsx
import GradImg from "../../assets/aarongeenicegradphoto.jpg"
import NiceProfileImg from "../../assets/aarongeenicephoto.jpg"
import PageTitle from "../../components/PageTitle"

const AboutMePage = () => {
  return (
    <div>
      <PageTitle title="About Me - Aaron Gee Portfolio" />
      <h1>Who are you?</h1>
      <p>Hi there! My name is <b>Aaron Gee</b>!</p>
      <img
        src={GradImg}
        alt="Imagine a really cool photo of Aaron Gee, the site creator, here!"
        width="500"
      />
      <p>
        I am a Computer Science & Engineering graduate from University of California, Irvine.
        I enjoy learning, practicing, and teaching others the wonders of computers, 
        from coding to building them. I hope to use the skills God has given me 
        to glorify His name and improve the lives of others around me!
      </p>
    </div>    
  )
}

export default AboutMePage