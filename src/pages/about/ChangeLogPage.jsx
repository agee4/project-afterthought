// ChangeLogPage.jsx
import React, { useState, useEffect, } from "react"
import { App } from "octokit"
import pageTitle from "../../components/pageTitleFunct"

const ChangeLogPage = () => {
  const [writtenListOn, setWrittenListOn] = useState(true)
  const [commitKey,setCommitKey] = useState('SHA256:3gkkdTEGUQ9sbBiqUBtUgcP1jvxBvg1i/Rn0l0kLSbc=')
  const [appId,setAppId] = useState(1150126)
  const [installationId,setInstallationId] = useState(60485625)
  const [commitList, setCommitList] = useState([])
  const toggleWrittenList = () => {
    setWrittenListOn(!writtenListOn)
  }
  
  const app = new App({ appId:appId, privateKey:commitKey })
  useEffect(() => {
    const getCommits = async () => {
      const promisedCommitList = []
      try {
        const octokit = await app.getInstallationOctokit(installationId)
        /*octokit.paginate(octokit.rest.repos.listCommits, {
          owner: 'agee4',
          repo: 'project-afterthought'
        }).then((response) => {
          console.log(response)
        }).catch((error) => console.log(error))*/
        for await (const response of octokit.paginate.iterator(octokit.rest.repos.listCommits, {
          owner: 'agee4',
          repo: 'project-afterthought'
        })) {
          promisedCommitList.push(response)
        }
        setCommitList(promisedCommitList)
        console.log("test")
      } catch (error) {
        promisedCommitList.push("GitHub commit fetching failed ):")
        promisedCommitList.push(error.status + ": " + error.message)
        setCommitList(promisedCommitList)
      }
    }
    getCommits()
  }, [commitKey,appId,installationId])
  
  pageTitle("Change Log")

  const WrittenList = () => 
    <ul className="change-list">
      <h3>2025</h3>
      <li><b>February</b></li>
      <li>2025 February 18</li>
      <ul>
        <li>updated email and resume</li>
      </ul>

      <li>2025 February 15</li>
      <ul>
        <li>Improved modal images</li>
        <li>Added Future Features page</li>
      </ul>

      <li>2025 February 14</li>
      <ul>
        <li>Fully implemented modal images</li>
      </ul>

      <li>2025 February 13</li>
      <ul>
        <li>Begun work on implementing modal images</li>
      </ul>

      <li>2025 February 11</li>
      <ul>
        <li>Updated Change Log with most relevant updates</li>
      </ul>

      <li>2025 February 10</li>
      <ul>
        <li>Fixed previous broken things (homepage links, downloadFile function)</li>
        <li>Added a "Fun" section to footer with random page button, change log, and special thanks</li>
        <li>Various style/format changes and updates</li>
      </ul>

      <li>2025 February 8</li>
      <ul>
        <li>Added links to projects on Home Page</li>
        <li>Updated RideOrganizer Page</li>
        <ul>
          <li>Added images</li>
          <li>Rearranged skills, added emojis</li>
        </ul>
        <li>Added Pages</li>
        <ul>
          <li>Template Page</li>
          <li>Changelog Page</li>
        </ul>
        <li>Added downloadFile function (nonfunctional)</li>
        <li>Various style/format changes and updates</li>
      </ul>

      <li>2025 February 7</li>
      <ul>
        <li>More mobile mode updates</li>
        <ul>
          <li>Navbar dropdown closes when tapping/clicking off of it</li>
          <li>Footer references change style</li>
        </ul>
      </ul>

      <li>2025 February 6</li>
      <ul>
        <li>Added image to FireDetector Page</li>
        <li>Slightly updated logo</li>
        <li>Added titles to links and images</li>
        <li>Restyled footer to remain at bottom of page</li>
      </ul>

      <li>2025 February 5</li>
      <ul>
        <li>Added personal images</li>
        <li>Added resume download to navbar</li>
      </ul>

      <li>2025 February 4</li>
      <ul>
        <li>Updated logo</li>
        <li>Added Resume Website Project Page</li>
        <li>Added icon</li>
        <li>Added mobile mode styling</li>
        <li>Added functional resume download</li>
      </ul>

      <li>2025 February 3</li>
      <ul>
        <li>Added Plants vs. Zombies Fan Game Project Page</li>
        <li>First rendition of the portfolio goes live on Render</li>
      </ul>

      <li><b>January</b></li>
      <li>2025 January 29</li>
      <ul>
        <li>Various style/format changes and updates</li>
      </ul>

      <li>2025 January 27</li>
      <ul>
        <li>Added details to FireDetector & RideOrganizer Pages</li>
      </ul>

      <li>2025 January 23</li>
      <ul>
        <li>Added Page Titles</li>
        <li>Added Footer</li>
        <li>Various style/format changes and updates</li>
      </ul>

      <li>2025 January 22</li>
      <ul>
        <li>Added Photos</li>
      </ul>

      <h3>2024</h3>
      <li><b>November</b></li>
      <li>2024 November 13</li>
      <ul>
        <li>New Pages</li>
        <ul>
          <li>Split About Page into "About Site" and "About Me"</li>
          <li>Fire Detector Project Page</li>
          <li>Ride Organizer Project Page</li>
        </ul>
        <li>Added more info to existing pages</li>
      </ul>

      <li>2024 November 8</li>
      <ul>
        <li>Added Projects Page</li>
        <li>NavBar utilizes dropdowns</li>
      </ul>

      <li>2024 November 7</li>
      <ul>
        <li>Github Created</li>
        <li>React Project Created: Page Routing and first few pages created</li>
        <li>Page Routing Added</li>
        <li>Added Navigation Bar Header</li>
        <li>New Pages</li>
        <ul>
          <li>Root Page (to handle page changing while keeping navigation bar)</li>
          <li>Home Page</li>
          <li>About Page</li>
          <li>Contact Page</li>
          <li>Error Handling Page</li>
        </ul>
      </ul>
    </ul>

  const GitHubList = () => 
    <>
      <p><em>WARNING: Commit fetching is still WIP</em></p>
      <ul className="change-list">
        {commitList.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </>

  return (
    <div className="page">
      <h1>Change Log</h1>
      <button onClick={toggleWrittenList}>
        {writtenListOn ? "Written Log" : "Github Commits"}
      </button>
      {writtenListOn ?
      <WrittenList /> : 
      <GitHubList />}
    </div>
  )
}

export default ChangeLogPage