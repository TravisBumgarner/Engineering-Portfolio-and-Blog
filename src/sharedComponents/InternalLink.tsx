import styled from 'styled-components'

import { Link } from 'react-router-dom'

import { CSSHover, PRIMARY_COLOR, TERTIARY_COLOR } from 'Theme'

const ExternalLinkWrapper = styled(Link)`
    color: ${PRIMARY_COLOR};
    text-decoration: none;
    ${CSSHover};
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
