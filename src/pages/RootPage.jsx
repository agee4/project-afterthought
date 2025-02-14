// RootPage.jsx
import { Outlet } from "react-router-dom"
import NavigationBar from "../components/NavigationBar"
import ReferenceFooter from "../components/ReferenceFooter"
import ModalDisplay from "../components/Modal/ModalDisplay"

const RootPage = () => {
  return (
    <>
      <NavigationBar />
      <Outlet />
      <ModalDisplay />
      <ReferenceFooter />
    </>
  )
}

export default RootPage