import {
  RouterProvider,
  createBrowserRouter
} from "react-router"
import "./App.css"
import RootPage from "./pages/RootPage"
import ErrorPage from "./pages/ErrorPage"
import HomePage from "./pages/HomePage"
import ContactPage from "./pages/about/ContactPage"
import ResumePage from "./pages/about/ResumePage"
import ChangeLogPage from "./pages/about/ChangeLogPage"
import FutureFeaturesPage from "./pages/about/FutureFeaturesPage"
import PurposePage from "./pages/about/PurposePage"
import AboutMePage from "./pages/about/AboutMePage"
import ProjectsPage from "./pages/projects/ProjectsPage"
import RideOrganizerPage from "./pages/projects/RideOrganizerPage"
import FireDetectorPage from "./pages/projects/FireDetectorPage"
import PortfolioSitePage from "./pages/projects/PortfolioSitePage"
import PvZGamePage from "./pages/projects/PvZGamePage"
import FriendsPage from "./pages/fun/FriendsPage"
import ThanksPage from "./pages/fun/ThanksPage"
import Secret1Page from "./pages/fun/secret/Secret1"
import Secret2Page from "./pages/fun/secret/Secret2"

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
        path: "resume",
        element: <ResumePage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "changelog",
        element: <ChangeLogPage />,
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
        path: "future",
        element: <FutureFeaturesPage />,
      },
      {
        path: "friends",
        element: <FriendsPage />,
      },
      {
        path: "thanks",
        element: <ThanksPage />,
      },
      {
        path: "secret",
        element: <Secret1Page />,
      },
      {
        path: "YzJWamNtVjBNZw",
        element: <Secret2Page />,
      },
    ],
  },
],{
  future: {
    v7_relativeSplatPath: true,
  },
})

function App() {
  
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
