import { useEffect, useState, useMemo } from 'react'
import styled from 'styled-components'
import { Link as ReactRouterDomLink, useLocation } from 'react-router-dom'

import { CSSHover, PRIMARY_COLOR, SECONDARY_COLOR, } from 'Theme'
import { Title, Text } from 'SharedComponents'

const makeNewSiteTitle = () => {
    const VALID_FILE_SUFFIX = ["proto", "test", "sample", "mockup", "demo", "final", "draft",];
    const VALID_FILE_TYPES = ["cpp", "css", "dxf", "html", "json", "js", "pde", "psd", "py", "scss", "sh", "dng", "tsx", "nef", "jpeg", "tiff", "pdf", "nef"];
    const VALID_FILE_BASE = ["tb"]

    const RANDOM_FILE_TYPE = VALID_FILE_TYPES[Math.floor(Math.random() * VALID_FILE_TYPES.length)];
    const RANDOM_FILE_SUFIX = VALID_FILE_SUFFIX[Math.floor(Math.random() * VALID_FILE_SUFFIX.length)];
    const RANDOM_FILE_BASE = VALID_FILE_BASE[Math.floor(Math.random() * VALID_FILE_BASE.length)];

    return `${RANDOM_FILE_BASE}_${RANDOM_FILE_SUFIX}.${RANDOM_FILE_TYPE}`;
};

const StyledLink = styled(ReactRouterDomLink)`
    text-decoration: none;
    color: ${PRIMARY_COLOR};

    ${CSSHover};
`

const HeaderWrapper = styled.div`
    max-width: 1600px;
    margin: 0 auto;
    padding: 1rem;
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
                <StyledLink to="/">{title.slice(0, length)}</StyledLink>
            </Title>
        </HeaderWrapper>
    )
}

export default Header
