import styled from 'styled-components'

import { Link } from 'react-router-dom'

import { CSSHover, CSSTransition, PRIMARY_COLOR, TERTIARY_COLOR } from 'Theme'

const InternalLinkWrapper = styled(Link)`
    text-decoration: none;
    ${CSSHover};
    font-family: Raleway, sans-serif;
    ${CSSTransition};
    &:visited {
        color: ${TERTIARY_COLOR};
    }
`

type InternalLinkProps = {
    children: React.ReactNode
    to: string
}

const InternalLink = ({ children, to }: InternalLinkProps) => {
    return (
        <InternalLinkWrapper to={to}>
            {children}
        </InternalLinkWrapper>
    )
}

export default InternalLink
