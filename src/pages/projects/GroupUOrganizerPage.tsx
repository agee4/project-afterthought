// GroupUOrganizerPage.jsx
import { Link } from "react-router"
import Page from "../../components/Page"
import IconItem from "../../components/IconItem"

const GroupUOrganizerPage = () => (
  <Page title="Ride Organizer">
    <h1 className="m-5 text-5xl font-bold">GroupU Organizer Application</h1>
    <p className="animate-shadowpulse italic">Group Organizing for everyone!</p>
    <h2 className="m-3 text-3xl font-bold">What is this project?</h2>
    <p className="px-5">
      <span className="font-bold">GroupU Organizer</span> is an expanded-scope
      iteration of{" "}
      <Link
        className="font-bold hover:text-indigo-500"
        to="/projects/ride-organizer-v2a"
      >
        Berean Community Church College Ride Organizer v2.A
      </Link>
      .
    </p>
    <h2 className="m-3 text-3xl font-bold">Features</h2>
    <ul className="ml-4 list-inside list-disc text-left">
      <li>Configuring custom assignable and group parameters</li>
      <li>Generating assignables and groups from existing spreadsheets</li>
      <li>Creating/updating assignables and groups in-app</li>
      <li>Sorting and filtering data</li>
      <li>
        Assigning assignables to groups
        <ol className="ml-8 list-inside list-decimal text-left">
          <li>drag&drop (with support for choosing multiple assignables)</li>
          <li>with a menu for basic automatic assigning</li>
        </ol>
      </li>
      <li>Saving assignables and groups to a new spreadsheet</li>
    </ul>
    <h2 className="m-3 text-3xl font-bold">What did I learn?</h2>
    <h3 className="m-1 text-xl font-bold">Specific Skills</h3>
    <ul>
      <div className="flex flex-row flex-wrap place-content-center">
        <IconItem name="TypeScript" />
      </div>
      <div className="flex flex-row flex-wrap place-content-center">
        <IconItem name="NextJS" />
        <IconItem name="SheetJS" />
      </div>
    </ul>
    <h2 className="m-3 text-3xl font-bold hover:text-indigo-500">
      <Link to="https://groupu-org.vercel.app/group-org">
        Check out the final site!
      </Link>
    </h2>
    <embed
      className="m-auto h-[75vh] w-[75%] rounded-sm border-5 border-indigo-500 p-2"
      src="https://groupu-org.vercel.app/group-org"
    />
    <br />
  </Page>
)

export default GroupUOrganizerPage
