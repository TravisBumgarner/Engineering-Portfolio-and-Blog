import styled from 'styled-components'

import { Link } from 'react-router-dom'

import { PRIMARY_COLOR, TERTIARY_COLOR } from 'Theme'

const ExternalLinkWrapper = styled(Link)`
    color: ${PRIMARY_COLOR};
    text-decoration: none;
    &:hover {
        color: ${TERTIARY_COLOR};
        cursor: pointer;
    }
    font-family: Raleway, sans-serif;
`

type ExternalLinkProps = {
    children: React.ReactNode
    to: string
}

const ExternalLink = ({ children, to }: ExternalLinkProps) => {
    return (
        <ExternalLinkWrapper to={to}>
            {children}
        </ExternalLinkWrapper>
    )
}

export default ExternalLink
