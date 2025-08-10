// IconItem.jsx
import Emoji from "./Emoji"
import React_Color from "../assets/react.svg"
import Vite_Color from "/vite.svg?url"
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
const TS_Color = "https://www.svgrepo.com/show/303600/typescript-logo.svg"
const TS_Mono = "https://www.svgrepo.com/show/342317/typescript.svg"
const React_Mono = "https://www.svgrepo.com/show/327388/logo-react.svg"
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
const ReactRouter_Color = "https://www.svgrepo.com/show/354262/react-router.svg"
const SheetJS_Color = "https://sheetjs.com/sketch128.png"
import NextJS_Color from "../assets/nextjs.svg"
import type { ReactNode } from "react"

const IconItem = ({
  name,
  img,
  mono,
}: {
  name: string
  mono?: boolean
  img?: string
}) => {
  /* {
    props.emoji && <span className="mr-1">{props.emoji}</span>
  } */
  let icon: ReactNode
  switch (name.toLowerCase()) {
    case "python":
      icon = mono ? (
        <Emoji mono src={Python_Mono} />
      ) : (
        <Emoji src={Python_Color} />
      )
      break
    case "cpp":
    case "c++":
      icon = <Emoji src={CPPIcon} />
      break
    case "java":
      icon = <Emoji mono src={Java_Mono} />
      break
    case "c":
      icon = <Emoji src={CIcon} />
      break
    case "html":
      icon = mono ? <Emoji mono src={HTML_Mono} /> : <Emoji src={HTML_Color} />
      break
    case "css":
      icon = mono ? <Emoji mono src={CSS_Mono} /> : <Emoji src={CSS_Color} />
      break
    case "js":
    case "javascript":
      icon = mono ? <Emoji mono src={JS_Mono} /> : <Emoji src={JS_Color} />
      break
    case "ts":
    case "typescript":
      icon = mono ? <Emoji mono src={TS_Mono} /> : <Emoji src={TS_Color} />
      break
    case "react":
      icon = mono ? (
        <Emoji mono src={React_Mono} />
      ) : (
        <Emoji src={React_Color} />
      )
      break
    case "vite":
      icon = <Emoji src={Vite_Color} />
      break
    case "nodejs":
    case "node_js":
      icon = mono ? (
        <Emoji mono src={NodeJS_Mono} />
      ) : (
        <Emoji src={NodeJS_Color} />
      )
      break
    case "tailwind":
      icon = <Emoji src={Tailwind_Color} />
      break
    case "github":
      icon = <Emoji mono src={GitHub_Mono} />
      break
    case "auth0":
      icon = <Emoji mono src={Auth0_Mono} />
      break
    case "opencv":
    case "open_cv":
      icon = mono ? (
        <Emoji mono src={OpenCV_Mono} />
      ) : (
        <Emoji src={OpenCV_Color} />
      )
      break
    case "reactrouter":
    case "react_router":
      icon = <Emoji src={ReactRouter_Color} />
      break
    case "sheetjs":
      icon = <Emoji src={SheetJS_Color} />
      break
    case "nextjs":
      icon = <Emoji src={NextJS_Color} />
      break
  }
  if (img) {
    icon = <Emoji src={img} />
  }
  return (
    <div className="m-1 rounded-lg border border-transparent bg-neutral-300 p-2 font-bold dark:bg-neutral-700">
      {icon}
      <span
        className={
          (icon ? "ml-1 " : "") + "text-neutral-700 dark:text-neutral-300"
        }
      >
        {name}
      </span>
    </div>
  )
}

export default IconItem
