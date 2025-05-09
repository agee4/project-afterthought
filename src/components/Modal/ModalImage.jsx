// ModalImage.jsx

const ModalImage = (props) => {
  const openModal = (src, title) => {
    var modalimg = document.getElementById("modal-image")
    modalimg.src = src
    var modalcap = document.getElementById("modal-caption")
    modalcap.innerHTML = title
    document.getElementById("modal").style.display = "block"
  }

  return (
    <img
      className={props.className}
      src={props.src}
      alt={props.alt}
      title={props.title ? props.title : props.alt}
      onClick={() =>
        openModal(props.src, props.title ? props.title : props.alt)
      }
    />
  )
}

export default ModalImage
