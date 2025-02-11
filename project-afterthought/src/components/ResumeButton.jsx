// ResumeButton.jsx
import resumePDF from "../assets/aarongeeresume.pdf"
import downloadFile from "./downloadFileFunct"

const ResumeButton = () => {
  const downloadResume = () => {
    downloadFile(resumePDF, "aarongee-resume.pdf")
  }

  return (
    <button onClick={downloadResume}  title="Download my Resume!">Resume</button>
  )
}

export default ResumeButton