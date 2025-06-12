import { useEffect, useMemo, useRef, useState } from "react"
import useClickOutside from "../Functions/clickOutsideFunct"

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
 * @param {boolean} base Whether this modal prevents the main page content from scrolling
 *
 * @returns {useModal} Modal, setModal, closeModal
 */
function useModal(initialValue = null, base = false) {
  const [modalElement, setModalElementHelper] = useState(initialValue)
  const modalRef = useRef(null)

  useEffect(() => {
    if (base) {
      if (modalElement) {
        if (
          !document.body.classList.replace("overflow-auto", "overflow-hidden")
        )
          document.body.classList.add("overflow-hidden")
      } else {
        if (
          !document.body.classList.replace("overflow-hidden", "overflow-auto")
        )
          document.body.classList.add("overflow-auto")
      }
      return () => {
        if (
          !document.body.classList.replace("overflow-hidden", "overflow-auto")
        )
          document.body.classList.add("overflow-auto")
      }
    }
  }, [base, modalElement])

  useEffect(() => {
    if (modalRef.current) {
      if (modalElement) {
        modalRef.current.classList.add("block")
        modalRef.current.classList.remove("hidden")
      } else {
        modalRef.current.classList.add("hidden")
        modalRef.current.classList.remove("block")
      }
    }
  }, [modalElement])

  /**When called, makes the corresponding Modal element visible with the argument as a child
   * @param {JSX.Element} element React component to display in Modal
   *
   */
  function setModal(element) {
    setModalElementHelper(element)
  }

  function closeModal() {
    setModalElementHelper(null)
  }

  const Modal = useMemo(
    () => (
      <div>
        <ModalDisplay
          element={modalElement}
          modalRef={modalRef}
          closeModal={closeModal}
        />
      </div>
    ),
    [modalElement, modalRef, closeModal]
  )

  return { Modal, setModal, closeModal }
}

const ModalDisplay = ({ element, modalRef, closeModal }) => {
  const modalElementRef = useRef(null)

  /* useOnKeyPress("Escape", closeModal) */
  useClickOutside(modalElementRef, closeModal)

  return (
    <div
      className="fixed top-0 left-0 z-5 hidden h-full w-full place-content-center overflow-auto bg-white/60 pt-15 text-inherit dark:bg-black/60"
      ref={modalRef}
    >
      <button
        onClick={closeModal}
        className="absolute top-4 right-8 cursor-pointer text-4xl font-bold text-black hover:text-indigo-500 dark:text-white"
      >
        &times;
      </button>
      <div className="mx-auto flex max-h-[80%] place-content-center overflow-auto">
        <div ref={modalElementRef}>{element}</div>
      </div>
    </div>
  )
}

export default useModal
