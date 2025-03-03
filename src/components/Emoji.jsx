// Emoji.jsx

const Emoji = (props) =>
  <img
    className={props.className || "emoji inline-block h-[0.75rem] align-baseline" + (props.mono ? " dark:invert" : "")}
    src={props.src}
    alt={props.alt}
    title={props.title}
  />

export default Emoji