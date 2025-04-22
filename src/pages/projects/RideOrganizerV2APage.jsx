// RideOrganizerPage.jsx
import { Link } from "react-router"
import Page from "../../components/Page"
import ModalImage from "../../components/Modal/ModalImage"
import IconItem from "../../components/IconItem"
import LoggedInHomeImg from "../../assets/rideorganizerapploggedin.png"
import LoggedOutHomeImg from "../../assets/rideorganizerapploggedout.png"

const RideOrganizerV2APage = () => (
  <Page title="Ride Organizer">
    <h1 className="m-5 text-5xl font-bold">Ride Organizer Application</h1>
    <h1 className="m-5 animate-shadowpulse text-9xl font-bold text-orange-500 shadow-orange-500">
      v2.A
    </h1>
    <p className="animate-shadowpulse italic">Take #2!</p>
    <h2 className="m-3 text-3xl font-bold">What is this project?</h2>
    <p className="px-5">
      <span className="font-bold">
        Berean Community Church College Ride Organizer v2.A
      </span>{" "}
      is a revamped version of the original{" "}
      <Link
        className="font-bold hover:text-indigo-500"
        to="/projects/ride-organizer"
      >
        Berean Community Church College Ride Organizer
      </Link>
      , built from the ground up with a new framework and libraries. It was
      completed by myself over the course of a month, from March to April of
      2025. The goal was to create a functional and user-friendly application
      that could help ride coordinators assign a large amount of passengers to
      various drivers, accounting for location and time.
    </p>
    <h2 className="m-3 text-3xl font-bold">
      What makes this a "v2.A" over v2?
    </h2>
    <p className="px-5">
      Following the conclusion of{" "}
      <Link to="">Berean Community Church College Ride Organizer</Link>, my team
      had a long list of unimplemented features that we wanted to realize.
      Especially with the original goal of the project being to assist our
      church's college ride ministry, many of us wanted to continue working on
      the application, even if there was no longer any academic incentive.
    </p>
    <p>
      With this, some of the team, myself included, began work on a "version
      2.0" of the ride organizer. This updated version aimed to actually allow
      for proper ride organization. Using the original project as a starting
      place, we began testing a more user-friendly ride assigning interface with
      drag and drop functionality.
    </p>
    <p className="px-5">
      Nevertheless, challenges arose. With myself being out of the college
      ministry, and other team members becoming increasingly occupied by other
      obligations at school and church, progress on the app began to stagnate.
      Eventually, the college ride ministry themselves acknowledged disinterest
      in officially adopting our app due to difficulties in restructuring and
      long-term stability.
    </p>
    <p className="px-5">
      With the original v2 of the project in indefinite hiatus, I decided to
      tackle the creation of a more functional ride organizer by myself as a
      personal project for my portfolio. As this version does not properly build
      off of the original v2 build, I figured it was not really a version 3.
      Thus, the v2-Aaron edition was created!
    </p>
    <h2 className="m-3 text-3xl font-bold">Features</h2>
    <ul className="ml-4 list-inside list-disc text-left">
      <li>
        Generating passengers, drivers, and rides from existing spreadsheets
      </li>
      <li>Creating passengers and drivers(+ride) in-app using built-in form</li>
      <li>Updating passenger and driver data in-app</li>
      <li>Sorting and filtering data</li>
      <li>
        Assigning passengers to rides
        <ol className="ml-8 list-inside list-decimal text-left">
          <li>drag&drop (with support for choosing multiple passengers)</li>
          <li>with a button that adds the current top passenger</li>
        </ol>
      </li>
      <li>Saving passengers, drivers, and rides to a new spreadsheet</li>
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
      <Link to="https://ride-organizer-va-git-main-agee4s-projects.vercel.app">
        Check out the final site!
      </Link>
    </h2>
    <embed
      className="m-auto h-[75vh] w-[75%] rounded-sm border-5 border-indigo-500 p-2"
      src="https://ride-organizer-va-git-main-agee4s-projects.vercel.app/rides"
    />
    <br />
  </Page>
)

export default RideOrganizerV2APage
