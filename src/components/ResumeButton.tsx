// ResumeButton.jsx
import resumePDF from "../assets/aarongeeresume.pdf"
import downloadFile from "./Functions/downloadFileFunct"
const DownloadIcon = (
  <svg
    className="h-3 stroke-black group-hover:stroke-indigo-500 dark:stroke-white inline-block fill-none align-baseline"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 15V21M19 21L17 19M19 21L21 19M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H14M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19M19 9V11M9 17H13M9 13H15M9 9H10"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const ResumeButton = ({className}: {className?: string}) => {
  const downloadResume = () => {
    downloadFile(resumePDF, "aarongee-resume.pdf")
  }

  return (
    <button
      className={
        "group font-medium hover:text-indigo-500 cursor-pointer whitespace-nowrap transition-colors duration-200 " +
        (className
          ? className
          : "rounded-lg bg-neutral-100 px-4 py-2 hover:border-indigo-500 focus:ring-indigo-500 dark:bg-neutral-900 border border-transparent focus:ring-4 focus:outline-none")
      }
      onClick={downloadResume}
      title="Download my Resume!"
    >
      {DownloadIcon}
      <span className="ml-1" />
      Resume
    </button>
  )
}

export default ResumeButton
