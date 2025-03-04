// LinkImage.jsx
import { Link } from "react-router"

const LinkImage = (props) => (
  <div
    className={
      props.className ? props.className : "group/linkimg relative m-auto"
    }
  >
    <Link to={props.to} title={props.title}>
      <span className="transition duration-150 group-hover/linkimg:brightness-20">
        <img
          className={
            props.imgClassName
              ? props.imgClassName
              : "m-auto w-full object-contain"
          }
          src={props.src}
          alt={props.alt}
          title={props.title}
        />
      </span>
      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full opacity-0 transition-opacity duration-150 group-hover/linkimg:opacity-100">
        <div className="absolute top-[50%] left-[50%] -translate-1/2 text-white">
          <b>{props.title}</b>
          <br />
          <i>{props.caption ? props.caption : props.alt}</i>
        </div>
      </div>
    </Link>
  </div>
)

export default LinkImage
