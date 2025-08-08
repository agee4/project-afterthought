// RootPage.jsx
import { Outlet } from "react-router"
import NavigationBar from "../components/NavigationBar"
import ReferenceFooter from "../components/ReferenceFooter"

const RootPage = () => {
  return (
    <>
      <NavigationBar />
      <Outlet />
      <ReferenceFooter />
    </>
  )
}

export default RootPage
