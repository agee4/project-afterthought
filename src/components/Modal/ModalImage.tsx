// ModalImage.jsx

import type { ReactNode } from "react"

const ModalImage = ({
  setModal,
  className,
  src,
  alt,
  title,
  caption,
}: {
  setModal: (element: ReactNode) => void
  className?: string
  src?: string
  alt?: string
  title?: string
  caption?: string
}) => {
  const finalCaption = caption || title || alt
  const modal = (
    <>
      <img className="mx-auto max-h-[80%]" src={src} title={title} />
      <div>{finalCaption}</div>
    </>
  )
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      title={finalCaption}
      onClick={() => setModal(modal)}
    />
  )
}

export default ModalImage
