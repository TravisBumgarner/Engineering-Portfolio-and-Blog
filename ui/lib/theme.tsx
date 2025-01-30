'use client'

import { createGlobalStyle } from 'styled-components'

export const FOREGROUND_COLOR = '#EEE'
export const BACKGROUND_COLOR = '#363636'
export const BORDER_COLOR = '#DDD'
export const SECONDARY_COLOR = '#00eaff'
export const PRIMARY_COLOR = '#ffce05'
export const DISABLED_COLOR = '#ccc'

const MONOSPACE_FONT = 'Source Code Pro, monospace'
const SANS_SERIF_FONT = 'Inter, sans-serif'

export const SPACING = {
  XXSMALL: 4,
  XSMALL: 8,
  SMALL: 12,
  MEDIUM: 16,
  LARGE: 24,
  XLARGE: 32,
  XXLARGE: 48
} as const

const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`

export const media = {
  desktop: customMediaQuery(1200),
  tablet: customMediaQuery(768),
  phone: customMediaQuery(376)
}

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${SANS_SERIF_FONT};
  }
`
