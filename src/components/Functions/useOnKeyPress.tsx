import { useEffect } from "react"

export const useOnKeyPress = (key: string, callback: () => void) => {
  useEffect(() => {
    function keyPressCaller(event: KeyboardEvent) {
      if (event.key == key) {
        callback()
      }
    }

    window.addEventListener("keydown", keyPressCaller)
    return () => {
      document.removeEventListener("keydown", keyPressCaller)
    }
  }, [key, callback])
}
