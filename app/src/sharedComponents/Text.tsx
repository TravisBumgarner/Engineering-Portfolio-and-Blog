import React from 'react'
import styled, { css } from 'styled-components'
import { SPACING } from 'Theme'

type TextProps = {
  children: React.ReactNode
  size?: 'small'
}

const TextStyles = css<{ size?: TextProps['size'] }>`
  margin: ${SPACING.MEDIUM}px 0;
  font-weight: 300;
  ${({ size }) => {
    if (size && size === 'small') return 'font-size: 0.8rem;'
    return ''
  }}
`

const TextWrapper = styled.p`
  ${TextStyles};
`

const Text = ({ children, size }: TextProps) => {
  return <TextWrapper size={size}>{children}</TextWrapper>
}

export default Text
export { TextStyles }
