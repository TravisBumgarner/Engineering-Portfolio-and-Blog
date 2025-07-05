'use client'

import { createGlobalStyle, css } from 'styled-components'
import { SPACING, COLORS, EVERYTHING_FONT } from './consts'

export const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'Satoshi';
    src: url('/fonts/Satoshi-Variable.woff2') format('woff2'),
         url('/fonts/Satoshi-Variable.woff') format('woff'),
         url('/fonts/Satoshi-Variable.ttf') format('truetype');
    font-weight: 100 900;
    font-style: normal;
  }
`

const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`

export const media = {
  desktop: customMediaQuery(1200),
  tablet: customMediaQuery(768),
  phone: customMediaQuery(376)
}

export const SHARED_SPACING = css`
  padding: ${SPACING.MEDIUM};

  @media (max-width: 768px) {
    padding: ${SPACING.SMALL};
  }
`

export const GlobalStyle = createGlobalStyle`
  @media (prefers-color-scheme: light) {
    :root {
      --primary-background: ${COLORS.GRAYS['100']};
      --secondary-background: ${COLORS.GRAYS['200']};
      --bright-background: ${COLORS.PRIMARY['100']};
      --foreground: ${COLORS.GRAYS['500']};
      --primary: ${COLORS.PRIMARY['100']};
      --background-blur: rgba(255,255,255,0.9);
      --foreground-disabled: ${COLORS.GRAYS[300]};
    }
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --primary-background: ${COLORS.GRAYS['500']};
      --secondary-background: ${COLORS.GRAYS['400']};
      --bright-background: ${COLORS.PRIMARY['200']};
      --foreground: ${COLORS.GRAYS['100']};
      --primary: ${COLORS.PRIMARY['100']};
      --background-blur: rgba(0,0,0,0.9);
      --foreground-disabled: ${COLORS.GRAYS[350]};
    }
  }

  body {
    font-family: ${EVERYTHING_FONT};
    color: var(--foreground);
    background-color: var(--primary-background);
  }

  body, input, textarea, button {
    font-family: ${EVERYTHING_FONT};
  }
`

export const GlobalReset = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
