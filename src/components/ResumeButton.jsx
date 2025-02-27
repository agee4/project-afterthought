// ResumeButton.jsx
import resumePDF from '../assets/aarongeeresume.pdf'
import downloadFile from './Functions/downloadFileFunct'

const ResumeButton = (props) => {
  const downloadResume = () => {
    downloadFile(resumePDF, 'aarongee-resume.pdf')
  }

  return (
    <button
      className={
        props.className
          ? props.className
          : 'cursor-pointer rounded-lg border border-transparent bg-gray-900 px-4 py-2 font-medium text-white transition-colors duration-200 hover:border-indigo-500 hover:text-indigo-500 focus:ring-4 focus:ring-indigo-500 focus:outline-none dark:bg-gray-100 dark:text-black'
      }
      onClick={downloadResume}
      title="Download my Resume!"
    >
      Resume
    </button>
  )
}

export default ResumeButton
