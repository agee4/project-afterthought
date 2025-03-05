// AboutMePage.jsx
import Page from "../../components/Page"
import ModalImage from "../../components/Modal/ModalImage"
import GradImg from "../../assets/aargeephoto/aargeephoto_grad.jpg"
import TahoeImg from "../../assets/aargeephoto/aargeephoto_tahoe.jpg"
import HippoImg from "../../assets/aargeephoto/aargeephoto_goldenhippo.jpg"
import DinoImg from "../../assets/aargeephoto/aargeephoto_retreatdilopho.jpg"

const AboutMePage = () => (
  <Page title="About Me">
    <h1 className="m-5 text-5xl font-bold">Who are you?</h1>
    <p>
      Hi there! My name is <span className="font-bold">Aaron Gee</span>!
    </p>
    <ModalImage
      className="img/profile m-auto max-w-1/2"
      src={GradImg}
      alt="Imagine a really cool photo of Aaron Gee, the site creator, here!"
      title="Aaron Gee dressed in college graduation attire. He looks happy."
    />
    <p className="px-5">
      I am a Computer Science & Engineering graduate from University of
      California, Irvine. I enjoy learning, practicing, and teaching others the
      wonders of computers, from coding to building them. I hope to use the
      skills God has given me to glorify His name and improve the lives of
      others around me!
    </p>
    <ul className="gallery m-0 flex list-none flex-row justify-evenly p-0 text-center">
      <ModalImage
        className="mx-auto max-w-[20%]"
        src={TahoeImg}
        alt="Imagine a really cool photo of Aaron Gee overlooking Lake Tahoe here!"
        title="Aaron Gee overlooking Lake Tahoe from Mount Tallac. He looks happy."
      />
      <ModalImage
        className="mx-auto max-w-[20%]"
        src={HippoImg}
        alt="Imagine a really cool photo of Aaron Gee dressed like a mustached yellow hippopotomas here!"
        title="Aaron Gee dressed like a mustached yellow hippopotomas. He looks happy."
      />
      <ModalImage
        className="mx-auto max-w-[20%]"
        src={DinoImg}
        alt="Imagine a really cool photo of Aaron Gee next to a Dilophosaurus statue here!"
        title="Aaron Gee standing next to a Dilophosaurus statue. He looks happy."
      />
    </ul>
    <br />
  </Page>
)

export default AboutMePage
