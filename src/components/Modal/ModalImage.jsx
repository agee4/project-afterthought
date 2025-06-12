// ModalImage.jsx

const ModalImage = (props) => {
  const caption = props.title ? props.title : props.alt
  const modal = (
    <>
      <img className="mx-auto max-h-[80%]" src={props.src} title={caption} />
      <div>{caption}</div>
    </>
  )
  return (
    <img
      className={props.className}
      src={props.src}
      alt={props.alt}
      title={caption}
      onClick={() => props.setModal(modal)}
    />
  )
}

export default ModalImage
