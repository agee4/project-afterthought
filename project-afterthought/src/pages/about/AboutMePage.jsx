// AboutMePage.jsx
import PageTitle from "../../components/PageTitle"
import GradImg from "../../assets/aargeephoto/aargeephoto_grad.jpg"
import TahoeImg from "../../assets/aargeephoto/aargeephoto_tahoe.jpg"
import HippoImg from "../../assets/aargeephoto/aargeephoto_goldenhippo.jpg"
import DinoImg from "../../assets/aargeephoto/aargeephoto_retreatdilopho.jpg"

const AboutMePage = () => {
  return (
    <div>
      <PageTitle title="About Me - Aaron Gee Portfolio" />
      <h1>Who are you?</h1>
      <p>Hi there! My name is <b>Aaron Gee</b>!</p>
      <img
        className={"profile-img"}
        src={GradImg}
        alt="Imagine a really cool photo of Aaron Gee, the site creator, here!"
      />
      <p>
        I am a Computer Science & Engineering graduate from University of California, Irvine.
        I enjoy learning, practicing, and teaching others the wonders of computers, 
        from coding to building them. I hope to use the skills God has given me 
        to glorify His name and improve the lives of others around me!
      </p>
      <img
        className={"gallery-img"}
        src={TahoeImg}
        alt="Imagine a really cool photo of Aaron Gee overlooking Lake Tahoe here!"
      />
      <img
        className={"gallery-img"}
        src={HippoImg}
        alt="Imagine a really cool photo of Aaron Gee dressed like a mustached yellow hippopotomas here!"
      />
      <img
        className={"gallery-img"}
        src={DinoImg}
        alt="Imagine a really cool photo of Aaron Gee next to a Dilophosaurus statue here!"
      />
    </div>    
  )
}

export default AboutMePage