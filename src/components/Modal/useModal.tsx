import { useRef, useState, type ReactNode, type RefObject } from "react"
import useClickOutside from "../Functions/useClickOutside"

/**
 * @typedef {Object} useModal
 * @property {JSX.Element} Modal
 */

/**Custom Hook intended for use in conjunction with ModalDisplay
 *
 * Modal is a ModalDisplay component connected to setModal & closeModal
 *
 * setModal is a function that accepts a ReactNode parameter "element"
 * When called, the corresponding Modal is made visible and displays "element"
 *
 * closeModal is a auxiliary function that hides and clears Modal
 * Intended to be used in elements displayed in Modal to close upon certain actions
 *
 * @param {ReactNode} initialValue Initial component to be displayed
 *
 * @returns {useModal} Modal, setModal, closeModal
 */
function useModal(
  initialValue: ReactNode = null
): [ReactNode, (element: ReactNode) => void, () => void] {
  const [modalElement, setModalElementHelper] =
    useState<ReactNode>(initialValue)
  const modalRef = useRef<HTMLDivElement>(null)

  function setModal(element: ReactNode) {
    setModalElementHelper(element)
    if (modalRef.current) modalRef.current.style.display = "block"
  }

  function closeModal() {
    setModalElementHelper(undefined)
    if (modalRef.current) modalRef.current.style.display = "none"
  }

  const Modal = <ModalDisplay element={modalElement} modalRef={modalRef} />

  return [Modal, setModal, closeModal]
}

const ModalDisplay = ({
  element,
  modalRef,
}: {
  element: ReactNode
  modalRef: RefObject<HTMLDivElement | null>
}) => {
  const modalElementRef = useRef<HTMLDivElement>(null)

  const closeModal = () => {
    if (modalRef.current) modalRef.current.style.display = "none"
  }

  useClickOutside(modalElementRef, closeModal)

  return (
    <div
      className="top-0 left-0 bg-white/60 pt-15 dark:bg-black/60 fixed z-5 hidden h-full w-full place-content-center overflow-auto text-inherit"
      ref={modalRef}
    >
      <button
        id="modal-close"
        onClick={closeModal}
        className="top-4 right-8 text-4xl font-bold text-black hover:text-gray-300 dark:text-white absolute cursor-pointer"
      >
        &times;
      </button>
      <div className="mx-auto flex max-h-[80%] place-content-center overflow-auto">
        <div ref={modalElementRef}>{element}</div>
      </div>
      <div id="modal-caption"></div>
    </div>
  )
}

export default useModal
