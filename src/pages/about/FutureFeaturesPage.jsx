// FutureFeaturesPage.jsx
import pageTitleFunct from "../../components/pageTitleFunct"

const FutureFeaturesPage = () => {
  
  pageTitleFunct("", false)

  return (
    <div className="page">
        <h1>Future Features*</h1>
        <p><em>*Note: None of these features are promised nor confirmed. 
          These are just current wants for the website.</em></p>
        <ul>
          <li>More fleshed out content in project pages</li>
          <li>Scrollable & looping image galleries/carousels</li>
          <li>Real-time github commit retrieving for changelog</li>
          <li>More graphic design (better website layout/design, 
            ability to change website appearance and theme)</li>
          <li>Backend implementation(s) 
            (either a revamped RideOrganizer app with Spreadsheet syncing, 
            or some other project that utilizes a server</li>
          <li>An in-browser minigame</li>
        </ul>
    </div>
  )
}

export default FutureFeaturesPage