// Emoji.jsx

const Emoji = ({
  className,
  mono,
  src,
  alt,
  title,
}: {
  className?: string
  mono?: boolean
  src?: string
  alt?: string
  title?: string
}) => (
  <img
    className={
      className ||
      "emoji inline-block h-3 align-baseline" + (mono ? " dark:invert" : "")
    }
    src={src}
    alt={alt}
    title={title}
  />
)

export default Emoji
