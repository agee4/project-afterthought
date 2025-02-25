// ResumeButton.jsx
import resumePDF from "../assets/aarongeeresume.pdf"
import downloadFile from "./downloadFileFunct"

const ResumeButton = (props) => {
  const downloadResume = () => {
    downloadFile(resumePDF, "aarongee-resume.pdf")
  }

  return (
    <button
      className={props.className ? 
        props.className : 
        "rounded-lg border border-transparent py-2 px-4 font-medium text-white bg-gray-900 cursor-pointer transition-colors duration-200 hover:text-indigo-500 hover:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500"}
      onClick={downloadResume}
      title="Download my Resume!"
    >
      Resume
    </button>
  )
}

export default ResumeButton