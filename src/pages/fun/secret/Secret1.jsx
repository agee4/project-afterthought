// Page.jsx
import Page from "../../../components/Page"
import bobLogo from "../../../assets/logo/logo.svg"
import Emoji from "../../../components/Emoji"

const Secret1Page = () => <Page title="A Secret ??">
  <h1 className="m-5 text-5xl font-bold">Secret Page!</h1>
  <p>Wow, you managed to find this hidden page!</p>
  <p>
    Have a bob! --&gt; <Emoji src={bobLogo} alt=":D" />
  </p>
</Page>

export default Secret1Page
