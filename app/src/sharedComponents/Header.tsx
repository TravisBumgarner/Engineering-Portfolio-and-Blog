import React from 'react'
import styled, { css } from 'styled-components'

import { SECONDARY_COLOR } from 'Theme'

const LargeHeaderStyles = css`
  font-size: 1.6rem;
  color: ${SECONDARY_COLOR};
  margin: 0 0;
  font-weight: 700;
  font-family: Raleway, sans-serif;
`

const MediumHeaderStyles = css`
  color: ${SECONDARY_COLOR};
  font-size: 1.4rem;
  margin: 1rem 0;
  font-weight: 400;
  font-family: Raleway, sans-serif;
`

const SmallHeaderStyles = css`
  color: ${SECONDARY_COLOR};
  font-size: 1.2rem;
  margin: 1rem 0;
  font-weight: 400;
  font-family: Raleway, sans-serif;
`

const LargeHeader = styled.h1`
  ${LargeHeaderStyles}
`
const MediumHeader = styled.h2`
  ${MediumHeaderStyles}
`
const SmallHeader = styled.h3`
  ${SmallHeaderStyles}
`

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
export { LargeHeaderStyles, MediumHeaderStyles, SmallHeaderStyles }
