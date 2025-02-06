// ResumeButton.jsx
import React, { useState } from "react"
import resumePDF from "../assets/aarongeeresume.pdf"

const ResumeButton = () => {
  const downloadResume = () => {
    fetch({resumePDF}).then((response) => {
      let alink = document.createElement("a");
      alink.href = resumePDF;
      alink.download = "aarongee-resume.pdf";
      alink.click();
    })
  }

  return (
    <button onClick={downloadResume}  title="Download my Resume!">Resume</button>
  )
}

export default ResumeButton