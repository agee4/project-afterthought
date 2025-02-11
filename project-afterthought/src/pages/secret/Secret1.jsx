// Page.jsx
import pageTitleFunct from "../../components/pageTitleFunct"
import bobLogo from "../../assets/logo/logo.svg"

const Secret1Page = () => {
  
  pageTitleFunct("A Secret ??")

  return (
    <div className="page">
      <h1>Secret Page!</h1>
      <p>Wow, you managed to find this hidden page!</p>
      <p>Have a bob! --&gt; <img className="emoji-img" src={bobLogo} alt=":D" /></p>
    </div>    
  )
}

export default Secret1Page