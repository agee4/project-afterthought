import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react"
import useClickOutside from "../Functions/useClickOutside"
import { useOnKeyPress } from "../Functions/useOnKeyPress"

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
 * @returns {Array} Modal, setModal, closeModal
 */
function useModal(
  initialValue: ReactNode = null,
  base: boolean = false
): [ReactNode, (element: ReactNode) => void, () => void] {
  const [modalElement, setModalElementHelper] =
    useState<ReactNode>(initialValue)
  const modalRef = useRef<HTMLDivElement>(null)

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

  const setModal = useCallback(
    (element: ReactNode) => setModalElementHelper(element),
    [setModalElementHelper]
  )

  const closeModal = useCallback(
    () => setModalElementHelper(null),
    [setModalElementHelper]
  )

  const Modal = useMemo(
    () => (
      <ModalDisplay
        element={modalElement}
        modalRef={modalRef}
        closeModal={closeModal}
      />
    ),
    [modalElement, modalRef, closeModal]
  )

  return [Modal, setModal, closeModal]
}

const ModalDisplay = ({
  element,
  modalRef,
  closeModal,
}: {
  element: ReactNode
  modalRef: RefObject<HTMLDivElement | null>
  closeModal: () => void
}) => {
  const modalElementRef = useRef<HTMLDivElement>(null)

  useClickOutside(modalElementRef, closeModal)
  useOnKeyPress("Escape", closeModal)

  return (
    <div
      className="fixed top-0 left-0 z-5 hidden h-full w-full place-content-center overflow-auto bg-white/60 pt-15 text-inherit animate-duration-250 motion-safe:animate-fade dark:bg-black/60"
      ref={modalRef}
    >
      <button
        id="modal-close"
        onClick={closeModal}
        className="absolute top-4 right-8 cursor-pointer text-4xl font-bold text-black hover:text-gray-300 dark:text-white"
      >
        &times;
      </button>
      <div className="mx-auto flex max-h-[80%] place-content-center overflow-auto animate-duration-500 motion-safe:animate-jump-in">
        <div ref={modalElementRef}>{element}</div>
      </div>
      <div id="modal-caption"></div>
    </div>
  )
}

export default useModal
