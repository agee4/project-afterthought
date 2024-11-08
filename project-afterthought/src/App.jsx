import { useState } from 'react'
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom"
import './App.css'
import RootPage from './Pages/RootPage'
import ErrorPage from './Pages/ErrorPage'
import HomePage from './Pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ProjectsPage from './pages/ProjectsPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: "about",
            element: <AboutPage />,
          },
          {
            path: "contact",
            element: <ContactPage />,
          },
          {
            path: "projects",
            element: <ProjectsPage />,
            errorElement: <ErrorPage />,
            children: [
              {
                path: "ride-organizer",
                element: <ProjectsPage />,
              },
              {
                path: "fire-detector",
                element: <ProjectsPage />,
              },
              {
                path: "storyboard",
                element: <ProjectsPage />,
              },
            ]
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
