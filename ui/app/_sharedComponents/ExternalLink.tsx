import React from 'react'
import { ExternalLinkWrapper } from './ExternalLink.client'

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
