"use client"

import { SPACING } from '@/lib/theme'
import styled, { css } from 'styled-components'

export const TextStyles = css`
  margin: ${SPACING.SMALL}px 0;
  font-weight: 300;
`

export const TextWrapper = styled.p`
  ${TextStyles};
`