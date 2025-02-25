// LinkImage.jsx
import { Link } from "react-router"

const LinkImage = (props) => {

  const openModal = (src, title) => {
    var modalimg = document.getElementById("modal-image");
    modalimg.src = src;
    var modalcap = document.getElementById("modal-caption");
    modalcap.innerHTML = title;
    document.getElementById("modal").style.display = "block";
  }
    
  return (
    <Link to={props.to}>
      <img
        className={props.className}
        src={props.src}
        alt={props.alt}
        title={props.title ? props.title : props.alt}
      />
    </Link>
  )
}

export default LinkImage