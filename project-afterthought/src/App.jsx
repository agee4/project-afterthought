import { useState } from 'react'
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom"
import './App.css'
import RootPage from './Pages/RootPage'
import ErrorPage from './Pages/ErrorPage'
import HomePage from './Pages/HomePage'
import PurposePage from './pages/about/PurposePage'
import AboutMePage from './pages/about/AboutMePage'
import ContactPage from './pages/about/ContactPage'
import ProjectsPage from './pages/projects/ProjectsPage'
import RideOrganizerPage from './pages/projects/RideOrganizerPage'
import FireDetectorPage from './pages/projects/FireDetectorPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "purpose",
        element: <PurposePage />,
      },
      {
        path: "about-me",
        element: <AboutMePage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "projects",
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <ProjectsPage />,
          },
          {
            path: "ride-organizer",
            element: <RideOrganizerPage />,
          },
          {
            path: "fire-detector",
            element: <FireDetectorPage />,
          },
          {
            path: "storyboard",
            element: <ProjectsPage />,
          },
        ],
      },
    ],
  },
])

function App() {
  
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
