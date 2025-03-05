// FutureFeaturesPage.jsx
import Page from "../../components/Page"

const FutureFeaturesPage = () => (
  <Page title="Future Features">
    <h1 className="m-5 text-5xl font-bold">Future Features*</h1>
    <p className="text-red-600 italic">
      *Note: None of these features are promised nor confirmed. These are just
      current wants for the website.
    </p>
    <ul>
      <li>More fleshed out content in project pages</li>
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
  </Page>
)

export default FutureFeaturesPage
