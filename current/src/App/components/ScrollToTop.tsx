import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const ScrollToTop = () => {
    let location = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)

    }, [location])

    return <div />
}

export default ScrollToTop