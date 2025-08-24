// AboutSitePage.jsx
import IconItem from "../../components/IconItem"
import Page from "../../components/Page"

const AboutSitePage = () => (
  <Page title="About the Site">
    <h1 className="m-5 text-5xl font-bold">Why does this site exist?</h1>
    <p className="px-5">
      <span className="font-bold">Aaron Gee's Digital Portfolio</span> is
      intended to be a small exhibition of Aaron Gee's past accomplishments and
      present skills, demonstrating his computer science experience to friends
      and potential future employers.
      <br />
      Projects detailed on this site demonstrate various skills, ranging from
      robust internet application architecture to efficient and functional
      program design.
    </p>
    <h2 className="m-3 text-3xl font-bold">Built using...</h2>
    <div className="flex flex-row flex-wrap place-content-center">
      <IconItem name="TypeScript" />
      <IconItem name="React" />
      <IconItem name="Vite" />
      <IconItem name="Tailwind" />
      <IconItem name="React Router" />
      <IconItem name="Octokit" />
    </div>
    <h3 className="m-1 text-xl font-bold">Formerly used...</h3>
    <div className="flex flex-row flex-wrap place-content-center">
      <IconItem name="JavaScript" />
    </div>
    <br />
  </Page>
)

export default AboutSitePage
