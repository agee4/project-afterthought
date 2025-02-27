// pageTitleFunct.jsx
import { useEffect } from 'react'
import { useLocation } from 'react-router'

const pageTitle = (title, addSiteName = true) => {
  const location = useLocation()

  useEffect(() => {
    document.title = title
      ? title + (addSiteName ? ' - Aaron Gee Portfolio' : '')
      : "Aaron Gee's Amazing Digital Portfolio"
  }, [location, title, addSiteName])
}

export default pageTitle
