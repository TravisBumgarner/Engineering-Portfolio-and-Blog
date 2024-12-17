import React from 'react'

import { InternalLinkWrapper } from './InternalLink.client'

type InternalLinkProps = {
  children: React.ReactNode
  to: string
}

const InternalLink = ({ children, to }: InternalLinkProps) => {
  return <InternalLinkWrapper href={to}>{children}</InternalLinkWrapper>
}

export default InternalLink
