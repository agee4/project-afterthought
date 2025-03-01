// LinkImage.jsx
import { Link } from "react-router"

const LinkImage = (props) => <Link to={props.to}>
  <img
    className={props.className}
    src={props.src}
    alt={props.alt}
    title={props.title ? props.title : props.alt}
  />
</Link>

export default LinkImage
