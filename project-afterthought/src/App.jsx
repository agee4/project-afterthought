import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom"
import "./App.css"
import RootPage from "./pages/RootPage"
import ErrorPage from "./pages/ErrorPage"
import HomePage from "./pages/HomePage"
import ContactPage from "./pages/ContactPage"
import PurposePage from "./pages/about/PurposePage"
import AboutMePage from "./pages/about/AboutMePage"
import ProjectsPage from "./pages/projects/ProjectsPage"
import RideOrganizerPage from "./pages/projects/RideOrganizerPage"
import FireDetectorPage from "./pages/projects/FireDetectorPage"
import PortfolioSitePage from "./pages/projects/PortfolioSitePage"
import PvZGamePage from "./pages/projects/PvZGamePage"
import ChangeLogPage from "./pages/about/ChangeLogPage"

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
            path: "portfolio-site",
            element: <PortfolioSitePage />,
          },
          {
            path: "pvz-bb",
            element: <PvZGamePage />,
          },
          {
            path: "storyboard",
            element: <ProjectsPage />,
          },
        ],
      },
      {
        path: "changelog",
        element: <ChangeLogPage />,
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
