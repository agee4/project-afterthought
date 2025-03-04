// ErrorPage.jsx
import React from "react"
import { useRouteError } from "react-router"
import NavigationBar from "../components/NavigationBar"
import Page from "../components/Page"
import ReferenceFooter from "../components/ReferenceFooter"

const ErrorPage = () => {
  const error = useRouteError()
  console.error(error)

  return (
    <>
      <NavigationBar />
      <Page title={error.status + ": " + (error.statusText || error.message)}>
        <h1 className="m-5 text-5xl font-bold">Uh oh!</h1>
        <p>
          <i>{error.status + ": " + (error.statusText || error.message)}</i>
        </p>
        <sub>how did you even get here lol</sub>
      </Page>
      <ReferenceFooter />
    </>
  )
}

export default ErrorPage
