"use client"

import styled, { css } from 'styled-components'

import { SECONDARY_COLOR, SPACING } from '@/lib/theme'

export const LargeHeaderStyles = css`
  font-size: 1.6rem;
  color: ${SECONDARY_COLOR};
  margin: 0 0;
  font-weight: 700;
  font-family: Raleway, sans-serif;
`

export const MediumHeaderStyles = css`
  color: ${SECONDARY_COLOR};
  font-size: 1.4rem;
  margin: ${SPACING.MEDIUM}px 0;
  font-weight: 400;
  font-family: Raleway, sans-serif;
`

export const SmallHeaderStyles = css`
  color: ${SECONDARY_COLOR};
  font-size: 1.2rem;
  margin: ${SPACING.MEDIUM}px 0;
  font-weight: 400;
  font-family: Raleway, sans-serif;
`

export const LargeHeader = styled.h1`
  ${LargeHeaderStyles}
`
export const MediumHeader = styled.h2`
  ${MediumHeaderStyles}
`
export const SmallHeader = styled.h3`
  ${SmallHeaderStyles}
`
