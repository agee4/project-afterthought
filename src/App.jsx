import { RouterProvider, createBrowserRouter } from "react-router"
import "./App.css"
import RootPage from "./pages/RootPage"
import ErrorPage from "./pages/ErrorPage"
import HomePage from "./pages/HomePage"
import ContactPage from "./pages/about/ContactPage"
import OverviewPage from "./pages/about/OverviewPage"
import ChangeLogPage from "./pages/about/ChangeLogPage"
import FutureFeaturesPage from "./pages/about/FutureFeaturesPage"
import AboutSitePage from "./pages/about/AboutSitePage"
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
import RideOrganizerV2APage from "./pages/projects/RideOrganizerV2APage"

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
        path: "about-site",
        element: <AboutSitePage />,
      },
      {
        path: "about-me",
        element: <AboutMePage />,
      },
      {
        path: "overview",
        element: <OverviewPage />,
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
          {
            path: "ride-organizer-v2a",
            element: <RideOrganizerV2APage />,
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
])

function App() {
  return (
    <div className="App m-0 flex min-h-screen min-w-full flex-col justify-items-stretch">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
