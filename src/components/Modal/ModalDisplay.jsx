import React, { useRef } from "react"
import clickOutside from "../Functions/clickOutsideFunct"

const ModalDisplay = () => {
  const modalRef = useRef(null)

  const closeModal = () => {
    document.getElementById("modal").style.display = "none"
  }

  clickOutside(modalRef, closeModal)

  return (
    <div
      id="modal"
      className="bg-opacity-80 fixed top-0 left-0 hidden h-full w-full overflow-auto bg-black pt-15"
    >
      <span
        id="modal-close"
        onClick={closeModal}
        className="absolute top-4 right-8 cursor-pointer text-4xl font-bold text-white hover:text-gray-300"
      >
        &times;
      </span>
      <img id="modal-image" ref={modalRef} className="mx-auto max-h-[80%]" />
      <div id="modal-caption"></div>
    </div>
  )
}

export default ModalDisplay
