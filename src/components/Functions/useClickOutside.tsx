// clickOutsideFunct.jsx
import { useEffect, type RefObject } from "react"

export const useClickOutside = (
  ref: RefObject<HTMLDivElement | null>,
  callback: () => void
) => {
  useEffect(() => {
    function clickOutsideCaller(event: MouseEvent | TouchEvent) {
      if (ref && ref.current && !ref.current.contains(event.target as Node)) {
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
