import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  // This feels like a bit of a bandaid.
  // We need to wait for the element to be in the DOM which may take some time.
  // So we try a few times before giving up.

  useEffect(() => {
    if (hash) {
      let attempts = 0
      const interval = setInterval(() => {
        const element = document.getElementById(hash.substring(1))
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
          clearInterval(interval)
        } else if (++attempts >= 8) {
          clearInterval(interval)
        }
      }, 250)
      return () => clearInterval(interval)
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
