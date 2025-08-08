// ErrorPage.jsx
import { useRouteError, isRouteErrorResponse } from "react-router"
import NavigationBar from "../components/NavigationBar"
import Page from "../components/Page"
import ReferenceFooter from "../components/ReferenceFooter"
import { RequestError } from "octokit"

const ErrorPage = () => {
  const error = useRouteError()
  console.error(error)
  if (isRouteErrorResponse(error)) {
    return (
      <>
        <NavigationBar />
        <Page title={error.status + ": " + error.statusText}>
          <h1 className="m-5 text-5xl font-bold">Uh oh!</h1>
          <p className="italic">{error.status + ": " + error.statusText}</p>
          <sub>how did you even get here lol</sub>
        </Page>
        <ReferenceFooter />
      </>
    )
  } else if (error instanceof RequestError) {
    return (
      <>
        <NavigationBar />
        <Page title={error.status + ": " + error.message}>
          <h1 className="m-5 text-5xl font-bold">Uh oh!</h1>
          <p className="italic">{error.status + ": " + error.message}</p>
          <sub>how did you even get here lol</sub>
        </Page>
        <ReferenceFooter />
      </>
    )
  } else if (error instanceof Error) {
    return (
      <>
        <NavigationBar />
        <Page title={error.message}>
          <h1 className="m-5 text-5xl font-bold">Uh oh!</h1>
          <p className="italic">{error.message}</p>
          <sub>how did you even get here lol</sub>
        </Page>
        <ReferenceFooter />
      </>
    )
  } else {
    return (
      <>
        <NavigationBar />
        <Page title="unknown error">
          <h1 className="m-5 text-5xl font-bold">Uh oh!</h1>
          <p className="italic">unknown error</p>
          <sub>how did you even get here lol</sub>
        </Page>
        <ReferenceFooter />
      </>
    )
  }
}

export default ErrorPage
