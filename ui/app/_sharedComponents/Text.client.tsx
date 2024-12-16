"use client"

import { SPACING } from '@/lib/theme'
import styled, { css } from 'styled-components'
import { TextProps } from './Text.types'

const TextStyles = css<{ size?: TextProps['size'] }>`
  margin: ${SPACING.SMALL}px 0;
  font-weight: 300;
  ${({ size }) => {
    if (size && size === 'small') return 'font-size: 0.8rem;'
    return ''
  }}
`

export const TextWrapper = styled.p<TextProps>`
  ${TextStyles};
`