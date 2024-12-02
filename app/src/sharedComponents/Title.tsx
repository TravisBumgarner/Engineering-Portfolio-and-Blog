import styled, { css } from 'styled-components'

import { SECONDARY_COLOR } from 'Theme'

const LargeTitleStyles = css`
  font-size: 1.6rem;
  color: ${SECONDARY_COLOR};
  margin: 0 0;
  font-weight: 700;
  font-family: Raleway, sans-serif;
`

const MediumTitleStyles = css`
  color: ${SECONDARY_COLOR};
  font-size: 1.4rem;
  margin: 1rem 0;
  font-weight: 400;
  font-family: Raleway, sans-serif;
`

const SmallTitleStyles = css`
  color: ${SECONDARY_COLOR};
  font-size: 1.2rem;
  margin: 1rem 0;
  font-weight: 400;
  font-family: Raleway, sans-serif;
`

const LargeTitle = styled.h1`
  ${LargeTitleStyles}
`
const MediumTitle = styled.h2`
  ${MediumTitleStyles}
`
const SmallTitle = styled.h3`
  ${SmallTitleStyles}
`

type TitleProps = {
  size: 'small' | 'large' | 'medium'
  children: React.ReactNode
}

const Title = ({ children, size }: TitleProps) => {
  switch (size) {
    case 'large':
      return <LargeTitle>{children}</LargeTitle>
    case 'medium':
      return <MediumTitle>{children}</MediumTitle>
    case 'small':
      return <SmallTitle>{children}</SmallTitle>
  }
}

export default Title
export { LargeTitleStyles, MediumTitleStyles, SmallTitleStyles }
