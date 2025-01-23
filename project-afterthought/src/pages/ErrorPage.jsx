// ErrorPage.jsx
import React from 'react'
import { useRouteError } from 'react-router-dom'
import NavigationBar from '../components/NavigationBar'

const ErrorPage = () => {
  const error = useRouteError()
  console.error(error)

  return (
    <>
      <NavigationBar />
      <div className={'titleContainer'}>
        <h1>Uh oh!</h1>
        <p><i>{error.status + ": " + (error.statusText || error.message)}</i></p>
        <sub>how did you even get here lol</sub>
      </div>
    </>
  )
}

export default ErrorPage