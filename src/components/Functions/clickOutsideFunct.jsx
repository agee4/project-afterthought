// clickOutsideFunct.jsx
import { useEffect } from "react"

const useClickOutside = (ref, callback) => {
  useEffect(() => {
    function clickOutsideCaller(event) {
      if (ref && !ref.current.contains(event.target)) {
        callback()
      }
    }

    document.addEventListener("mousedown", clickOutsideCaller)
    return () => {
      document.removeEventListener("mousedown", clickOutsideCaller)
    }
  }, [ref, callback])
}

export default useClickOutside
