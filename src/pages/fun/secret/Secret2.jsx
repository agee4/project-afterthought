// Page.jsx
import pageTitleFunct from "../../../components/Functions/pageTitleFunct"
import bobLogo from "../../../assets/logo/logo.svg"

const Secret2Page = () => {
  
  pageTitleFunct("A Secret ??")

  return (
    <>
      <h1 className="font-bold text-5xl m-5">Minigame</h1>
      <p>Wow, you managed to find this hidden page!</p>
      <p>Have a bob! --&gt; <img className="emoji-img" src={bobLogo} alt=":D" /></p>
    </>
  )
}

export default Secret2Page