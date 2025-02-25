// FutureFeaturesPage.jsx
import pageTitleFunct from "../../components/pageTitleFunct"

const FutureFeaturesPage = () => {
  
  pageTitleFunct("Future Features")

  return (
    <>
        <h1 className="font-bold text-5xl m-5">Future Features*</h1>
        <p><em>*Note: None of these features are promised nor confirmed. 
          These are just current wants for the website.</em></p>
        <ul>
          <li>More fleshed out content in project pages</li>
          <li>Scrollable & looping image galleries/carousels</li>
          <li>More graphic design (better website layout/design, 
            ability to change website appearance and theme)</li>
          <li>Backend implementation(s) 
            (either a revamped RideOrganizer app with Spreadsheet syncing, 
            or some other project that utilizes a server)</li>
          <li>In-browser game(s)</li>
        </ul>
    </>
  )
}

export default FutureFeaturesPage