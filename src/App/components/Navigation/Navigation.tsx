import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SnapshotsNav, BaseNav } from "./components";

const Navigation = () => {
    const { pathname } = useLocation()
    const [isSnapshotsNavVisible, setIsSnapshotsNavVisible] = useState(pathname === '/')

    useEffect(() => {
        setIsSnapshotsNavVisible(pathname === '/')
    }, [pathname])

    return (
        <>
            <SnapshotsNav isSnapshotsNavVisible={isSnapshotsNavVisible} />
            <BaseNav isBaseNavVisible={!isSnapshotsNavVisible} />
        </>
    )
}

export default Navigation