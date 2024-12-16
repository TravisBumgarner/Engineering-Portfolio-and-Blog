import React from 'react'

import { LargeHeader, MediumHeader, SmallHeader } from './Header.client'


type HeaderProps = {
  size: 'small' | 'large' | 'medium'
  children: React.ReactNode
}

const Header = ({ children, size }: HeaderProps) => {
  switch (size) {
    case 'large':
      return <LargeHeader>{children}</LargeHeader>
    case 'medium':
      return <MediumHeader>{children}</MediumHeader>
    case 'small':
      return <SmallHeader>{children}</SmallHeader>
  }
}

export default Header
