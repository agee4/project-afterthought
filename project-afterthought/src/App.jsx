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
