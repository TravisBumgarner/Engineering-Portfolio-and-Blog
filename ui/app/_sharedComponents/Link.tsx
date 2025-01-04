import React from 'react'

import { LinkWrapper } from './Link.client'

type LinkProps = {
  children: React.ReactNode
  to: string
  target?: string
}

const Link = ({ children, to, target}: LinkProps) => {
  return <LinkWrapper target={target} href={to}>{children}</LinkWrapper>
}

export default Link
