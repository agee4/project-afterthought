// ErrorPage.jsx
import React from "react"
import { useRouteError } from "react-router"
import pageTitle from "../components/Functions/pageTitleFunct"
import NavigationBar from "../components/NavigationBar"
import ReferenceFooter from "../components/ReferenceFooter"

const ErrorPage = () => {
  const error = useRouteError()
  console.error(error)
  pageTitle(error.status + ": " + (error.statusText || error.message))

  return (
    <>
      <NavigationBar />
      <main className="flex-1">
        <h1 className="m-5 text-5xl font-bold">Uh oh!</h1>
        <p>
          <i>{error.status + ": " + (error.statusText || error.message)}</i>
        </p>
        <sub>how did you even get here lol</sub>
      </main>
      <ReferenceFooter />
    </>
  )
}

export default ErrorPage
