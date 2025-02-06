// ErrorPage.jsx
import React from "react"
import { useRouteError } from "react-router-dom"
import NavigationBar from "../components/NavigationBar"
import PageTitle from "../components/PageTitle"
import Footer from "../components/Footer"

const ErrorPage = () => {
  const error = useRouteError()
  console.error(error)

  return (
    <>
      <PageTitle title={error.status + ": " + (error.statusText || error.message)} />
      <NavigationBar />
      <div className="page">
        <h1>Uh oh!</h1>
        <p><i>{error.status + ": " + (error.statusText || error.message)}</i></p>
        <sub>how did you even get here lol</sub>
      </div>
      <Footer />
    </>
  )
}

export default ErrorPage