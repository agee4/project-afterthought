// IconItem.jsx
import Emoji from "./Emoji"
import React_Color from "../assets/react.svg"
import Vite_Color from "../../public/vite.svg"
const Python_Color = "https://www.svgrepo.com/show/354238/python.svg"
const Python_Mono =
  "https://upload.wikimedia.org/wikipedia/commons/d/d3/Python_icon_%28black_and_white%29.svg"
/*
const Python_Color =
  <svg className="h-3" viewBox="0 -0.5 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
    <defs>
      <linearGradient x1="12.9593594%" y1="12.0393928%" x2="79.6388325%" y2="78.2008538%" id="linearGradient-1">
        <stop stop-color="#387EB8" offset="0%">
        </stop>
        <stop stop-color="#366994" offset="100%">
        </stop>
      </linearGradient>
      <linearGradient x1="19.127525%" y1="20.5791813%" x2="90.7415328%" y2="88.4290372%" id="linearGradient-2">
        <stop stop-color="#FFE052" offset="0%">
        </stop>
        <stop stop-color="#FFC331" offset="100%">
        </stop>
      </linearGradient>
    </defs>
    <g>
      <path d="M126.915866,0.0722755491 C62.0835831,0.0722801733 66.1321288,28.1874648 66.1321288,28.1874648 L66.2044043,57.3145115 L128.072276,57.3145115 L128.072276,66.0598532 L41.6307171,66.0598532 C41.6307171,66.0598532 0.144551098,61.3549438 0.144551098,126.771315 C0.144546474,192.187673 36.3546019,189.867871 36.3546019,189.867871 L57.9649915,189.867871 L57.9649915,159.51214 C57.9649915,159.51214 56.8001363,123.302089 93.5968379,123.302089 L154.95878,123.302089 C154.95878,123.302089 189.434218,123.859386 189.434218,89.9830604 L189.434218,33.9695088 C189.434218,33.9695041 194.668541,0.0722755491 126.915866,0.0722755491 L126.915866,0.0722755491 L126.915866,0.0722755491 Z M92.8018069,19.6589497 C98.9572068,19.6589452 103.932242,24.6339846 103.932242,30.7893845 C103.932246,36.9447844 98.9572068,41.9198193 92.8018069,41.9198193 C86.646407,41.9198239 81.6713721,36.9447844 81.6713721,30.7893845 C81.6713674,24.6339846 86.646407,19.6589497 92.8018069,19.6589497 L92.8018069,19.6589497 L92.8018069,19.6589497 Z" fill="url(#linearGradient-1)">
      </path>
      <path d="M128.757101,254.126271 C193.589403,254.126271 189.540839,226.011081 189.540839,226.011081 L189.468564,196.884035 L127.600692,196.884035 L127.600692,188.138693 L214.042251,188.138693 C214.042251,188.138693 255.528417,192.843589 255.528417,127.427208 C255.52844,62.0108566 219.318366,64.3306589 219.318366,64.3306589 L197.707976,64.3306589 L197.707976,94.6863832 C197.707976,94.6863832 198.87285,130.896434 162.07613,130.896434 L100.714182,130.896434 C100.714182,130.896434 66.238745,130.339138 66.238745,164.215486 L66.238745,220.229038 C66.238745,220.229038 61.0044225,254.126271 128.757101,254.126271 L128.757101,254.126271 L128.757101,254.126271 Z M162.87116,234.539597 C156.715759,234.539597 151.740726,229.564564 151.740726,223.409162 C151.740726,217.253759 156.715759,212.278727 162.87116,212.278727 C169.026563,212.278727 174.001595,217.253759 174.001595,223.409162 C174.001618,229.564564 169.026563,234.539597 162.87116,234.539597 L162.87116,234.539597 L162.87116,234.539597 Z" fill="url(#linearGradient-2)">
      </path>
    </g>
  </svg>
const Python_Mono =
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 40 40">
    <rect x="10" y="0" width="20" height="40" rx="10" ry="5"/>
    <rect x="0" y="10" width="40" height="20" rx="5" ry="10"/>
    <circle cx="14.5" cy="5" r="1.85" fill="white"/>
    <circle cx="25.5" cy="35" r="1.85" fill="white"/>
    <line x1="10" y1="9.5" x2="20" y2="9.5" stroke="white"/>
    <line x1="20" y1="30.5" x2="30" y2="30.5" stroke="white"/>
    <path d="m 9.5,30 c 0,-10 2.5,-10 10,-10 8.5,0 11,0 11,-10" stroke="white" fill="none"/>
  </svg> */
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

const IconItem = (props) => {
  {
    props.emoji && <span className="mr-1">{props.emoji}</span>
  }
  let icon
  switch (props.name.toLowerCase()) {
    case "python":
      icon = props.mono ? (
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
      icon = props.mono ? (
        <Emoji mono src={HTML_Mono} />
      ) : (
        <Emoji src={HTML_Color} />
      )
      break
    case "css":
      icon = props.mono ? (
        <Emoji mono src={CSS_Mono} />
      ) : (
        <Emoji src={CSS_Color} />
      )
      break
    case "js":
    case "javascript":
      icon = props.mono ? (
        <Emoji mono src={JS_Mono} />
      ) : (
        <Emoji src={JS_Color} />
      )
      break
    case "react":
      icon = props.mono ? (
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
      icon = props.mono ? (
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
      icon = props.mono ? (
        <Emoji mono src={OpenCV_Mono} />
      ) : (
        <Emoji src={OpenCV_Color} />
      )
      break
      case "reactrouter":
      case "react_router":
        icon = <Emoji src={ReactRouter_Color} />
        break
  }
  if (props.img) {
    icon = <Emoji src={props.img} />
  }
  return (
    <div className="m-1 rounded-lg border border-transparent bg-neutral-300 p-2 font-bold dark:bg-neutral-700">
      {icon}
      <span
        className={
          (icon ? "ml-1 " : "") + "text-neutral-700 dark:text-neutral-300"
        }
      >
        {props.name}
      </span>
    </div>
  )
}

export default IconItem
