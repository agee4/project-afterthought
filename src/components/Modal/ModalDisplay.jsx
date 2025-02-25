
import React, { useRef } from "react"
import clickOutside from "../clickOutsideFunct"

const ModalDisplay = () => {
  const modalRef = useRef(null)

  const closeModal = () => {
    document.getElementById("modal").style.display = "none";
  }

  clickOutside(modalRef, closeModal)
  
  return (
    <div id="modal" className="fixed top-0 left-0 pt-15 w-full h-full bg-black bg-opacity-80 overflow-auto hidden">
      <span id="modal-close" onClick={closeModal} className="absolute top-4 right-8 text-white text-4xl font-bold hover:text-gray-300 cursor-pointer">&times;</span>
      <img id="modal-image" ref={modalRef} className="max-h-[80%] mx-auto" />
      <div id="modal-caption"></div>
    </div>
  )
}

export default ModalDisplay