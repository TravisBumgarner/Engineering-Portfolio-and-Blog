import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

import { CSSHover, PRIMARY_COLOR } from 'Theme'

const InternalLinkWrapper = styled(Link)`
  ${CSSHover};
  font-family: Raleway, sans-serif;
  font-weight: 100;
`

type InternalLinkProps = {
  children: React.ReactNode
  to: string
}

const InternalLink = ({ children, to }: InternalLinkProps) => {
  return <InternalLinkWrapper to={to}>{children}</InternalLinkWrapper>
}

export default InternalLink
