'use client'

import { createGlobalStyle } from 'styled-components'

const MONOSPACE_FONT = 'Source Code Pro, monospace'
const SANS_SERIF_FONT = 'Inter, sans-serif'

const COLORS = {
  GRAYS: {
    "100": '#FFFFFF',
    "200": '#F6F6F6',
    "300": '',
    "400": '',
    "500": '#424242',
    "600": ''
  },
  PRIMARY: {
    "100": "#006FB9"
  }
}



const LIGHT_THEME = {
  BACKGROUND_COLOR: COLORS.GRAYS["100"],
  FOREGROUND_COLOR: COLORS.GRAYS["500"],
  PRIMARY_COLOR: COLORS.PRIMARY["100"],
}

const DARK_THEME = {
  BACKGROUND_COLOR: COLORS.GRAYS["500"],
  FOREGROUND_COLOR: COLORS.GRAYS["100"],
  PRIMARY_COLOR: COLORS.PRIMARY["100"],
}

export const THEME = LIGHT_THEME


// export const SPACING = {
//   XXSMALL: 4,
//   XSMALL: 8,
//   SMALL: 12,
//   MEDIUM: 16,
//   LARGE: 24,
//   XLARGE: 32,
//   XXLARGE: 48
// } as const

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
    color: ${THEME.FOREGROUND_COLOR};
    background-color: ${THEME.BACKGROUND_COLOR};
  }

  #post, #creation {
    border: 1px solid blue;

    time {}

    h1 {}

    h2 {}

    h3 {}

    p {}

    a{}

    code{}

    quote{}
  }
`

export const GlobalReset = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`