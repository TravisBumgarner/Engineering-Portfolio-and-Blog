import React from 'react'
import styled from 'styled-components'

import { CSSHover, CSSTransition, PRIMARY_COLOR } from 'Theme'

const ExternalLinkWrapper = styled.a`
  text-decoration-color: ${PRIMARY_COLOR};
  text-decoration: underline;
  ${CSSHover};
  ${CSSTransition};
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
