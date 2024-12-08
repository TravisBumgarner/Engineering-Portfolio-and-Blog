import React from 'react'
import styled from 'styled-components'

import { CSSHover } from 'Theme'

const ExternalLinkWrapper = styled.a`
  ${CSSHover};
  font-family: Raleway, sans-serif;
  font-weight: 100;
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
