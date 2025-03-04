// ChangeLogPage.jsx
import React, { useState, useEffect } from "react"
import { App } from "octokit"
import Page from "../../components/Page"
import githubkey from "../../../changelogcommitkey.txt"

const Log = (props) => (
  <div className="m-5 rounded-lg border border-transparent bg-neutral-400 p-2 text-left dark:bg-neutral-600">
    {props.title && <h3 className="py-3 text-xl font-bold">{props.title}</h3>}
    {props.message}
    {props.date && <i>{props.date}</i>}
  </div>
)

const ChangeLogPage = () => {
  const [writtenListOn, setWrittenListOn] = useState(false)
  const [commitKey, setCommitKey] = useState("")
  const [appId, setAppId] = useState(1150126)
  const [installationId, setInstallationId] = useState(61513690)
  const [commitReadAttempted, setCommitReadAttempted] = useState(false)
  const [commitList, setCommitList] = useState([])
  const toggleWrittenList = () => {
    setWrittenListOn(!writtenListOn)
  }

  useEffect(() => {
    const getCommits = async () => {
      const promisedCommitList = []
      try {
        const app = new App({ appId: appId, privateKey: commitKey })
        const octokit = await app.getInstallationOctokit(installationId)
        for await (const response of octokit.paginate.iterator(
          octokit.rest.repos.listCommits,
          {
            owner: "agee4",
            repo: "project-afterthought",
          }
        )) {
          for (const message of response.data) {
            let commitdate = new Date(message.commit.committer.date)
            let commitmessage = message.commit.message
            let committitleend = commitmessage.search(/\n/)
            let committitle =
              committitleend != -1
                ? commitmessage.substring(0, committitleend)
                : commitmessage
            let commitmessagebody = commitmessage
              .substring(committitleend)
              .trim()
              .split("\n")
            promisedCommitList.push(
              <Log
                title={committitle}
                message={
                  committitleend != -1 && (
                    <ul>
                      {commitmessagebody.map((value, index) => (
                        <li key={index}>{value}</li>
                      ))}
                    </ul>
                  )
                }
                date={commitdate.toLocaleString()}
              />
            )
          }
        }
        setCommitList(promisedCommitList)
      } catch (error) {
        promisedCommitList.push("GitHub commit fetching failed ):")
        promisedCommitList.push(
          <ul>
            <li>{error.status + ": " + error.message}</li>
            <li>{commitKey}</li>
          </ul>
        )
        setCommitList(promisedCommitList)
      }
    }

    setCommitList(["Attempting to retrieve GitHub commits..."])
    fetch(githubkey)
      .then((response) => response.text())
      .then((data) => setCommitKey(data))
      .then(setCommitReadAttempted(true))
    if (commitReadAttempted) getCommits()
  }, [commitKey, appId, installationId])

  const WrittenList = () => (
    <>
      <h3>2025</h3>
      <li>
        <b>March</b>
      </li>

      <Log
        message={
          <ul>
            <li>Added more animations</li>
            <li>Added more info</li>
          </ul>
        }
        date="2025 March 1"
      />

      <li>
        <b>February</b>
      </li>

      <Log
        message={
          <ul>
            <li>Added small page transition animations</li>
          </ul>
        }
        date="2025 February 28"
      />

      <Log
        message={
          <ul>
            <li>Added and utilized Prettier to standardize code</li>
            <li>Added and implemented IconItems for Changelog</li>
            <li>Renamed Resume into Overview</li>
          </ul>
        }
        date="2025 February 27"
      />

      <Log
        message={
          <ul>
            <li>Further TailwindCSS implementation</li>
            <li>Small restyles & refactoring</li>
          </ul>
        }
        date="2025 February 25"
      />

      <Log
        message={
          <ul>
            <li>Added and implemented TailwindCSS</li>
          </ul>
        }
        date="2025 February 24"
      />

      <Log
        message={
          <ul>
            <li>New Pages</li>
            <ul>
              <li>Resume (Digital version of Resume)</li>
              <li>Friends</li>
            </ul>
            <li>Reformatted embeds</li>
          </ul>
        }
        date="2025 February 23"
      />

      <Log
        message={
          <ul>
            <li>Got Github Commit fetching in Changelog to function</li>
          </ul>
        }
        date="2025 February 22"
      />

      <Log
        message={
          <ul>
            <li>Upgraded React Router to v7</li>
            <li>replaced ImageLink in RideOrganizer page with site embed</li>
          </ul>
        }
        date="2025 February 21"
      />

      <Log
        message={
          <ul>
            <li>updated email and resume</li>
          </ul>
        }
        date="2025 February 18"
      />

      <Log
        message={
          <ul>
            <li>Improved modal images</li>
            <li>Added Future Features page</li>
          </ul>
        }
        date="2025 February 15"
      />

      <Log
        message={
          <ul>
            <li>Fully implemented modal images</li>
          </ul>
        }
        date="2025 February 14"
      />

      <Log
        message={
          <ul>
            <li>Begun work on implementing modal images</li>
          </ul>
        }
        date="2025 February 13"
      />

      <Log
        message={
          <ul>
            <li>Updated Change Log with most relevant updates</li>
          </ul>
        }
        date="2025 February 11"
      />

      <Log
        message={
          <ul>
            <li>
              Fixed previous broken things (homepage links, downloadFile
              function)
            </li>
            <li>
              Added a "Fun" section to footer with random page button, change
              log, and special thanks
            </li>
            <li>Various style/format changes and updates</li>
          </ul>
        }
        date="2025 February 10"
      />

      <Log
        message={
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
        }
        date="2025 February 8"
      />

      <Log
        message={
          <ul>
            <li>More mobile mode updates</li>
            <ul>
              <li>Navbar dropdown closes when tapping/clicking off of it</li>
              <li>Footer references change style</li>
            </ul>
          </ul>
        }
        date="2025 February 7"
      />

      <Log
        message={
          <ul>
            <li>Added image to FireDetector Page</li>
            <li>Slightly updated logo</li>
            <li>Added titles to links and images</li>
            <li>Restyled footer to remain at bottom of page</li>
          </ul>
        }
        date="2025 February 6"
      />

      <Log
        message={
          <ul>
            <li>Added personal images</li>
            <li>Added resume download to navbar</li>
          </ul>
        }
        date="2025 February 5"
      />

      <Log
        message={
          <ul>
            <li>Updated logo</li>
            <li>Added Resume Website Project Page</li>
            <li>Added icon</li>
            <li>Added mobile mode styling</li>
            <li>Added functional resume download</li>
          </ul>
        }
        date="2025 February 4"
      />

      <Log
        message={
          <ul>
            <li>Added Plants vs. Zombies Fan Game Project Page</li>
            <li>First rendition of the portfolio goes live on Render</li>
          </ul>
        }
        date="2025 February 3"
      />

      <li>
        <b>January</b>
      </li>
      <Log
        message={
          <ul>
            <li>Various style/format changes and updates</li>
          </ul>
        }
        date="2025 January 29"
      />

      <Log
        message={
          <ul>
            <li>Added details to FireDetector & RideOrganizer Pages</li>
          </ul>
        }
        date="2025 January 27"
      />

      <Log
        message={
          <ul>
            <li>Added Page Titles</li>
            <li>Added Footer</li>
            <li>Various style/format changes and updates</li>
          </ul>
        }
        date="2025 January 23"
      />

      <Log
        message={
          <ul>
            <li>Added Photos</li>
          </ul>
        }
        date="2025 January 22"
      />

      <h3>2024</h3>
      <li>
        <b>November</b>
      </li>
      <Log
        message={
          <ul>
            <li>New Pages</li>
            <ul>
              <li>Split About Page into "About Site" and "About Me"</li>
              <li>Fire Detector Project Page</li>
              <li>Ride Organizer Project Page</li>
            </ul>
            <li>Added more info to existing pages</li>
          </ul>
        }
        date="2024 November 13"
      />

      <Log
        message={
          <ul>
            <li>Added Projects Page</li>
            <li>NavBar utilizes dropdowns</li>
          </ul>
        }
        date="2024 November 8"
      />

      <Log
        message={
          <ul>
            <li className="text-green-400">Github Created</li>
            <li className="text-green-400">
              React Project Created: Page Routing and first few pages created
            </li>
            <li>Page Routing Added</li>
            <li>Added Navigation Bar Header</li>
            <li>New Pages</li>
            <ul>
              <li>
                Root Page (to handle page changing while keeping navigation bar)
              </li>
              <li>Home Page</li>
              <li>About Page</li>
              <li>Contact Page</li>
              <li>Error Handling Page</li>
            </ul>
          </ul>
        }
        date="2024 November 7"
      />
    </>
  )

  const GitHubList = () => (
    <>
      {commitList.map((value, index) => (
        <li key={index}>{value}</li>
      ))}
    </>
  )

  return <Page title="Change Log">
    <h1 className="m-5 text-5xl font-bold">Change Log</h1>
    <button
      onClick={toggleWrittenList}
      className="cursor-pointer rounded-lg border border-transparent bg-gray-900 px-4 py-2 font-medium text-white transition-colors duration-200 hover:border-indigo-500 hover:text-indigo-500 focus:ring-4 focus:ring-indigo-500 focus:outline-none"
    >
      {writtenListOn ? "Written Log" : "Github Commits"}
    </button>
    <ul className="m-5 rounded border border-gray-400 p-1">
      {writtenListOn ? <WrittenList /> : <GitHubList />}
    </ul>
  </Page>
}

export default ChangeLogPage
