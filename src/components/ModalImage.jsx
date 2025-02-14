// ModalImage.jsx

const ModalImage = (className, src, alt, title) => {

  const openModal = (src, title) => {
    var modalimg = document.getElementById("modal-image");
    modalimg.src = src;
    var modalcap = document.getElementById("modal-caption");
    modalcap.innerHTML = title;
    document.getElementById("modal").style.display = "block";
  }
    
  return (
    <img
      {...className && (className={className})}
      src={src}
      alt={alt}
      title={title}
      onClick={() => openModal(src, title)}
    />
  )
}

export default ModalImage