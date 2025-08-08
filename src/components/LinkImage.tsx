// LinkImage.jsx
import { Link } from "react-router"

const LinkImage = ({
  className,
  imgClassName,
  to,
  src,
  alt,
  title,
  caption
}: {
  className?: string
  imgClassName?: string
  to: string
  src?: string
  alt?: string
  title?: string
  caption?: string
}) => (
  <div
    className={
      className || "group/linkimg relative m-auto"
    }
  >
    <Link to={to} title={title}>
      <span className="transition duration-150 group-hover/linkimg:brightness-20">
        <img
          className={
            imgClassName
              || "m-auto w-full object-contain"
          }
          src={src}
          alt={alt}
          title={title}
        />
      </span>
      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full opacity-0 transition-opacity duration-150 group-hover/linkimg:opacity-100">
        <div className="absolute top-[50%] left-[50%] -translate-1/2 text-white">
          <span className="font-bold">{title}</span>
          <br />
          <span className="italic">
            {caption || alt}
          </span>
        </div>
      </div>
    </Link>
  </div>
)

export default LinkImage
