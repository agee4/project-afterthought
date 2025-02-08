// ErrorPage.jsx
import React from "react"
import { useRouteError } from "react-router-dom"
import pageTitle from "../components/pageTitleFunct"
import NavigationBar from "../components/NavigationBar"
import ReferenceFooter from "../components/ReferenceFooter"

const ErrorPage = () => {
  const error = useRouteError()
  console.error(error)
  pageTitle(error.status + ": " + (error.statusText || error.message))

  return (
    <>
      <NavigationBar />
      <div className="page">
        <h1>Uh oh!</h1>
        <p><i>{error.status + ": " + (error.statusText || error.message)}</i></p>
        <sub>how did you even get here lol</sub>
      </div>
      <ReferenceFooter />
    </>
  )
}

export default ErrorPage