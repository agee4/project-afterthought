// FutureFeaturesPage.jsx
import pageTitleFunct from "../../components/Functions/pageTitleFunct"

const FutureFeaturesPage = () => {
  pageTitleFunct("Future Features")

  return (
    <main className="flex-1 animate-fadein">
      <h1 className="m-5 text-5xl font-bold">Future Features*</h1>
      <p>
        <em>
          *Note: None of these features are promised nor confirmed. These are
          just current wants for the website.
        </em>
      </p>
      <ul>
        <li>More fleshed out content in project pages</li>
        <li>Scrollable & looping image galleries/carousels</li>
        <li>
          More graphic design (better website layout/design, ability to change
          website appearance and theme)
        </li>
        <li>
          Backend implementation(s) (either a revamped RideOrganizer app with
          Spreadsheet syncing, or some other project that utilizes a server)
        </li>
        <li>In-browser game(s)</li>
      </ul>
    </main>
  )
}

export default FutureFeaturesPage
