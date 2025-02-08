// downloadFileFunct.jsx

function downloadFile(source, name) {
  fetch(source).then(() => {
    let alink = document.createElement("a");
    alink.href = resumePDF;
    alink.download = name;
    alink.click();
  })
}

export default downloadFile