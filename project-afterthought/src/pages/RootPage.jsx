// RootPage.jsx
import { Outlet } from "react-router-dom"
import NavigationBar from "../components/NavigationBar"

const RootPage = () => {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  )
}

export default RootPage