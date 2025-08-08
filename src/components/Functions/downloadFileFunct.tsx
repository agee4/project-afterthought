// downloadFileFunct.jsx

const downloadFile = (source: string, name: string) => {
  fetch(source)
    .then(() => {
      let alink = document.createElement("a")
      alink.href = source
      alink.download = name
      alink.click()
    })
    .catch((error) => {
      console.error("Error fetching the file:", error)
    })
}

export default downloadFile
