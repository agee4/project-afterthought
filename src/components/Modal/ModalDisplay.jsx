
import React, { useRef } from "react"
import clickOutside from "../clickOutsideFunct"

const ModalDisplay = () => {
  const modalRef = useRef(null)

  const closeModal = () => {
    document.getElementById("modal").style.display = "none";
  }

  clickOutside(modalRef, closeModal)
  
  return (
    <div id="modal">
      <span id="modal-close" onClick={closeModal}>&times;</span>
      <img id="modal-image" ref={modalRef} />
      <div id="modal-caption"></div>
    </div>
  )
}

export default ModalDisplay