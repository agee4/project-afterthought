// ResumeButton.jsx
import React, { useState } from "react"
import resumePDF from "../assets/aarongeeresume.pdf"
import downloadFile from "./downloadFileFunct"

const ResumeButton = () => {
  const downloadResume = () => {
    fetch({resumePDF}).then(() => {
      let alink = document.createElement("a");
      alink.href = resumePDF;
      alink.download = "aarongee-resume.pdf";
      alink.click();
    })
    /*downloadFile({resumePDF}, "aarongee-resume.pdf")*/
  }

  return (
    <button onClick={downloadResume}  title="Download my Resume!">Resume</button>
  )
}

export default ResumeButton