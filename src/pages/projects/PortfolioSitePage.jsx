// PortfolioSitePage.jsx
import Page from "../../components/Page"
import ModalImage from "../../components/Modal/ModalImage"
import IconItem from "../../components/IconItem"
import PortfolioWebsiteImg from "../../assets/portfoliowebsiterecursive.png"

const PortfolioSitePage = () => (
  <Page title="Digital Portfolio Website">
    <h1 className="m-5 text-5xl font-bold">Digital Portfolio Website</h1>
    <p className="italic">
      Showcasing my computer science skills in more ways than one.
    </p>
    <h2 className="m-3 text-3xl font-bold">What is this project?</h2>
    <p className="px-5">
      The <span className="font-bold">Digital Portfolio Website</span> is a
      personal programming project intended to showcase my computer-related
      projects and skills. Initial work began 7 November 2024 and continues to
      this day. The goal is to create a fullstack website that highlights my
      computer science proficiencies through the documentation of past and
      present projects, along with demonstrating the ability to design a
      frontend website using React.
    </p>
    <ModalImage
      className="img/profile m-auto max-w-1/2"
      src={PortfolioWebsiteImg}
      alt="A screenshot of the Portfolio Website homepage"
    />
    <h2 className="m-3 text-3xl font-bold">What have I learned?</h2>
    <h3 className="m-1 text-xl font-bold">Specific Skills</h3>
    <ul>
      <li>Basics of standard web standard languages</li>
      <div className="flex flex-row flex-wrap place-content-center">
        <IconItem name="HTML" />
        <IconItem name="CSS" />
        <IconItem name="JavaScript" />
      </div>
      <li>
        Basics of web development JavaScript-based libraries and environments
      </li>
      <div className="flex flex-row flex-wrap place-content-center">
        <IconItem name="React" />
        <IconItem name="Vite" />
        <IconItem name="ReactRouter" />
        <IconItem name="Tailwind" />
        <IconItem name="GitHub" />
      </div>
    </ul>
    <br />
  </Page>
)

export default PortfolioSitePage
