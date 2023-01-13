import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HomeNav, BaseNav } from "./components";

const Navigation = () => {
    const [isHomeNavVisible, setIsHomeNavVisible] = useState(false)
    const { pathname } = useLocation()

    useEffect(() => {
        setIsHomeNavVisible(pathname === '/')
    }, [pathname])

    return (
        <>
            <HomeNav isHomeNavVisible={isHomeNavVisible} />
            <BaseNav isBaseNavVisible={!isHomeNavVisible} />
        </>
    )
}

export default Navigation