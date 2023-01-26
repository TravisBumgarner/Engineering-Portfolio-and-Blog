import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'

import { CSSHover, PRIMARY_COLOR, TERTIARY_COLOR } from 'Theme'
import { Title, Text, InternalLink } from 'SharedComponents'
import { useEffect, useMemo, useState } from 'react'

const makeNewSiteTitle = () => {
    const VALID_FILE_SUFFIX = [
        "prototype",
        "test",
        "sample",
        "mockup",
        "demo",
        "final",
        "draft",
    ];

    const VALID_FILE_TYPES = [
        "cpp",
        "css",
        "dxf",
        "dng",
        "html",
        "jpg",
        "json",
        "js",
        "nef",
        "pde",
        "py",
        "psd",
        "scss",
        "sh",
        "tiff",
        "pdf",
        "ts",
        "tsx",
    ];

    const RANDOM_FILE_TYPE = VALID_FILE_TYPES[Math.floor(Math.random() * VALID_FILE_TYPES.length)];
    const RANDOM_FILE_SUFIX = VALID_FILE_SUFFIX[Math.floor(Math.random() * VALID_FILE_SUFFIX.length)];

    return `tb_${RANDOM_FILE_SUFIX}.${RANDOM_FILE_TYPE}`;
};

const HeaderWrapper = styled.div`
`

const Header = () => {
    const [length, setLength] = useState(0)
    const title = useMemo(makeNewSiteTitle, [])
    useEffect(() => {
        const intervalId = setInterval(() => {
            setLength(prev => {
                if (prev + 1 === title.length) {
                    clearInterval(intervalId)
                }
                return prev + 1
            })
        }, 50)
    }, [])

    return (
        <HeaderWrapper>
            <Title size="large">
                <InternalLink to="/">{title.slice(0, length)}</InternalLink>
            </Title>
            <Text>These are artifacts of my experiences learning, creating, and exploring.<br />They're not always polished or completed, but they've shaped who I am today.</Text>
        </HeaderWrapper>
    )
}

export default Header
