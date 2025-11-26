import { useEffect } from 'react'

// For the life of me I cannot figure out why NextJS is scrolling like 50px down after a page load.
const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
}

export default useScrollToTop
