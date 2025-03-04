// Page.jsx
import pageTitleFunct from "../../../components/Functions/pageTitleFunct"
import bobLogo from "../../../assets/logo/logo.svg"
import Emoji from "../../../components/Emoji"

const Secret1Page = () => {
  pageTitleFunct("A Secret ??")

  return (
    <main className="flex-1 animate-fadein">
      <h1 className="m-5 text-5xl font-bold">Secret Page!</h1>
      <p>Wow, you managed to find this hidden page!</p>
      <p>
        Have a bob! --&gt; <Emoji src={bobLogo} alt=":D" />
      </p>
    </main>
  )
}

export default Secret1Page
