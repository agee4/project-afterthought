// ResumeButton.jsx
import resumePDF from "../assets/aarongeeresume.pdf"
import downloadFile from "./Functions/downloadFileFunct"
const DownloadIcon =
  "https://www.svgrepo.com/show/532746/file-arrow-down-alt.svg"

const ResumeButton = (props) => {
  const downloadResume = () => {
    downloadFile(resumePDF, "aarongee-resume.pdf")
  }

  return (
    <button
      className={
        props.className
          ? props.className
          : "cursor-pointer rounded-lg border border-transparent bg-gray-900 px-4 py-2 font-medium text-white transition-colors duration-200 hover:border-indigo-500 hover:text-indigo-500 focus:ring-4 focus:ring-indigo-500 focus:outline-none dark:bg-gray-100 dark:text-black"
      }
      onClick={downloadResume}
      title="Download my Resume!"
    >
      {!props.className && (
        <img
          className="emoji -z-10 mr-1 inline-block h-[0.75rem] align-baseline not-dark:invert"
          src={DownloadIcon}
        />
      )}
      Resume
    </button>
  )
}

export default ResumeButton
