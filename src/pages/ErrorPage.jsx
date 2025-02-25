// ErrorPage.jsx
import React from "react"
import { useRouteError } from "react-router"
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
      <main className="flex-1">
        <h1 className="font-bold text-5xl m-5">Uh oh!</h1>
        <p><i>{error.status + ": " + (error.statusText || error.message)}</i></p>
        <sub>how did you even get here lol</sub>
      </main>
      <ReferenceFooter />
    </>
  )
}

export default ErrorPage