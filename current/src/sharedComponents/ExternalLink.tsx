import React from 'react'
import styled from 'styled-components'

import { PRIMARY_COLOR, TERTIARY_COLOR } from 'Theme'

const ExternalLinkWrapper = styled.a`
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
    href: string
}

const ExternalLink = ({ children, href }: ExternalLinkProps) => {
    return (
        <ExternalLinkWrapper target="_blank" href={href}>
            {children}
        </ExternalLinkWrapper>
    )
}

export default ExternalLink
