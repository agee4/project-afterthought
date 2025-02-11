// ChangeLogPage.jsx
import pageTitle from "../../components/pageTitleFunct"

const ChangeLogPage = () => {
  pageTitle("Change Log")

  return (
    <div className="page">
      <h1>Change Log</h1>
      <ul>
        <li>2024 November 7</li>
        <ul>
          <li>Github Created</li>
          <li>React Project Created: Page Routing and first few pages created</li>
        </ul>
        <p>TODO</p>
        <li>2025 February 3</li><ul>
          <li>First rendition of the portfolio goes live on Render</li>
        </ul>
        <p>TODO</p>
        <li>2025 February 10</li>
        <ul>
          <li>Fixed previous broken things (homepage links, downloadFile function)</li>
          <li>Added a "Fun" section to footer with random page button, changelog, and special thanks</li>
          <li>Various style/format changes and updates</li>
        </ul>
      </ul>
    </div>    
  )
}

export default ChangeLogPage