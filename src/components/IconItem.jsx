// IconItem.jsx
import React_Color from "../assets/react.svg"
import Vite_Color from "../../public/vite.svg"
const Python_Color = "https://www.svgrepo.com/show/354238/python.svg"
const Python_Mono =
  "https://upload.wikimedia.org/wikipedia/commons/d/d3/Python_icon_%28black_and_white%29.svg"
const CPPIcon =
  "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg"
const Java_Mono = "https://www.svgrepo.com/show/75601/java-logo.svg"
const CIcon =
  "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg"
const HTML_Color = "https://www.svgrepo.com/show/349402/html5.svg"
const HTML_Mono = "https://www.svgrepo.com/show/4796/html.svg"
const CSS_Color = "https://www.svgrepo.com/show/349330/css3.svg"
const CSS_Mono = "https://www.svgrepo.com/show/305918/css3.svg"
const JS_Color = "https://www.svgrepo.com/show/355081/js.svg"
const JS_Mono = "https://www.svgrepo.com/show/327372/logo-javascript.svg"
const NodeJS_Color = "https://nodejs.org/static/logos/jsIconGreen.svg"
const NodeJS_Mono = "https://www.svgrepo.com/show/306480/node-dot-js.svg"
const GitHub_Mono =
  "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg"
const Tailwind_Color =
  "https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg"
const Auth0_Mono =
  "https://cdn.auth0.com/quantum-assets/dist/latest/logos/auth0/auth0-icon-onlight.svg"
const OpenCV_Color = "https://www.svgrepo.com/show/354139/opencv.svg"
const OpenCV_Mono = "https://www.svgrepo.com/show/518318/opencvmanager.svg"

const Color_Img = (props) => (
  <img
    className="emoji mr-1 inline-block h-[0.75rem] align-baseline"
    src={props.src}
  />
)

const Mono_Img = (props) => (
  <img
    className="emoji -z-10 mr-1 inline-block h-[0.75rem] align-baseline dark:invert"
    src={props.src}
  />
)

const IconItem = (props) => {
  {
    props.emoji && <span className="mr-1">{props.emoji}</span>
  }
  let icon
  switch (props.name.toLowerCase()) {
    case "python":
      icon = props.mono ? (
        <Mono_Img src={Python_Mono} />
      ) : (
        <Color_Img src={Python_Color} />
      )
      break
    case "cpp":
    case "c++":
      icon = <Color_Img src={CPPIcon} />
      break
    case "java":
      icon = <Mono_Img src={Java_Mono} />
      break
    case "c":
      icon = <Color_Img src={CIcon} />
      break
    case "html":
      icon = props.mono ? (
        <Mono_Img src={HTML_Mono} />
      ) : (
        <Color_Img src={HTML_Color} />
      )
      break
    case "css":
      icon = props.mono ? (
        <Mono_Img src={CSS_Mono} />
      ) : (
        <Color_Img src={CSS_Color} />
      )
      break
    case "js":
    case "javascript":
      icon = props.mono ? (
        <Mono_Img src={JS_Mono} />
      ) : (
        <Color_Img src={JS_Color} />
      )
      break
    case "react":
      icon = <Color_Img src={React_Color} />
      break
    case "vite":
      icon = <Color_Img src={Vite_Color} />
      break
    case "nodejs":
    case "node_js":
      icon = props.mono ? (
        <Mono_Img src={NodeJS_Mono} />
      ) : (
        <Color_Img src={NodeJS_Color} />
      )
      break
    case "tailwind":
      icon = <Color_Img src={Tailwind_Color} />
      break
    case "github":
      icon = <Mono_Img src={GitHub_Mono} />
      break
    case "auth0":
      icon = <Mono_Img src={Auth0_Mono} />
      break
    case "opencv":
    case "open_cv":
      icon = props.mono ? (
        <Mono_Img src={OpenCV_Mono} />
      ) : (
        <Color_Img src={OpenCV_Color} />
      )
      break
  }
  if (props.img) {
    icon = (
      <img
        className="emoji mr-1 inline-block h-[0.75rem] align-baseline"
        src={props.img}
      />
    )
  }
  return (
    <div className="m-1 rounded-lg border border-transparent bg-neutral-300 p-2 font-bold dark:bg-neutral-700">
      {icon}
      <span className="text-neutral-700 dark:text-neutral-300">
        {props.name}
      </span>
    </div>
  )
}

export default IconItem
