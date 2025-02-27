// RootPage.jsx
import { Outlet } from 'react-router'
import NavigationBar from '../components/NavigationBar'
import ReferenceFooter from '../components/ReferenceFooter'
import ModalDisplay from '../components/Modal/ModalDisplay'

const RootPage = () => {
  return (
    <>
      <NavigationBar />
      <main className="flex-1">
        <Outlet />
      </main>
      <ModalDisplay />
      <ReferenceFooter />
    </>
  )
}

export default RootPage
