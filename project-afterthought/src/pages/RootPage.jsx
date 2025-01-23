// RootPage.jsx
import { Outlet } from "react-router-dom"
import NavigationBar from "../components/NavigationBar"
import Footer from "../components/Footer"

const RootPage = () => {
  return (
    <>
      <header><NavigationBar /></header>
      <Outlet />
      <Footer />
    </>
  )
}

export default RootPage