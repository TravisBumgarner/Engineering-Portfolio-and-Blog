import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

import { CSSHover, CSSTransition } from 'Theme'

const InternalLinkWrapper = styled(Link)`
  text-decoration: none;
  ${CSSHover};
  font-family: Raleway, sans-serif;
  ${CSSTransition};
  &:hover {
    text-decoration: underline;
  }
`

type InternalLinkProps = {
  children: React.ReactNode
  to: string
}

const InternalLink = ({ children, to }: InternalLinkProps) => {
  return <InternalLinkWrapper to={to}>{children}</InternalLinkWrapper>
}

export default InternalLink
