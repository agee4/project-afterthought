// Page.jsx
import pageTitleFunct from "../../../components/Functions/pageTitleFunct"
import bobLogo from "../../../assets/logo/logo.svg"

const Secret2Page = () => {
  pageTitleFunct("A Secret ??")

  return (
    <main className="flex-1 animate-fadein">
      <h1 className="m-5 text-5xl font-bold">Minigame</h1>
      <p>Wow, you managed to find this hidden page!</p>
      <p>
        Check back later, and you may find yourself able to play a fun minigame!
      </p>
    </main>
  )
}

export default Secret2Page
