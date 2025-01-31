'use client'

import { createGlobalStyle, css } from 'styled-components'

const EVERYTHING_FONT = 'Satoshi, sans-serif'
const CODE_FONT = 'Source Code Pro, monospace'

const COLORS = {
  GRAYS: {
    '100': '#FFFFFF',
    '200': '#F6F6F6',
    '300': '',
    '400': '#2C2C2C',
    '500': '#202020',
    '600': ''
  },
  PRIMARY: {
    '100': '#1298f2',
    '200': '#006FB9'
  }
}

type Theme = {
  PRIMARY_BACKGROUND_COLOR: string
  SECONDARY_BACKGROUND_COLOR: string
  FOREGROUND_COLOR: string
  PRIMARY_COLOR: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const LIGHT_THEME: Theme = {
  PRIMARY_BACKGROUND_COLOR: COLORS.GRAYS['100'],
  SECONDARY_BACKGROUND_COLOR: COLORS.GRAYS['200'],
  FOREGROUND_COLOR: COLORS.GRAYS['500'],
  PRIMARY_COLOR: COLORS.PRIMARY['100']
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DARK_THEME: Theme = {
  PRIMARY_BACKGROUND_COLOR: COLORS.GRAYS['500'],
  FOREGROUND_COLOR: COLORS.GRAYS['100'],
  PRIMARY_COLOR: COLORS.PRIMARY['100'],
  SECONDARY_BACKGROUND_COLOR: COLORS.GRAYS['400']
}

export const FONT_WEIGHTS = {
  LIGHT: 100,
  REGULAR: 300,
  BOLD: 500
}

export const THEME: Theme = LIGHT_THEME

export const FONT_SIZES = {
  XSMALL: '12px',
  SMALL: '16px',
  MEDIUM: '20px',
  LARGE: '36px',
  XLARGE: '50px'
}

export const SPACING = {
  XXSMALL: '4px',
  XSMALL: '8px',
  SMALL: '16px',
  MEDIUM: '30px',
  LARGE: '50px',
  XLARGE: '80px'
} as const

const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`

export const media = {
  desktop: customMediaQuery(1200),
  tablet: customMediaQuery(768),
  phone: customMediaQuery(376)
}

export const LIST_SIZING = css`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding: ${SPACING.LARGE};
`

export const ITEM_SIZING = css`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding: ${SPACING.LARGE};
`

export const GlobalStyle = createGlobalStyle`
  @font-face {
  font-family: 'Satoshi';
  src: url('/fonts/Satoshi-Variable.woff2') format('woff2'),
       url('/fonts/Satoshi-Variable.woff') format('woff'),
       url('/fonts/Satoshi-Variable.ttf') format('truetype');
  font-weight: 100 400 700;
  font-display: swap;
  font-style: normal;
}

  body {
    font-family: ${EVERYTHING_FONT};
    color: ${THEME.FOREGROUND_COLOR};
    background-color: ${THEME.PRIMARY_BACKGROUND_COLOR};
  }

  body, input, textarea, button {
    font-family: ${EVERYTHING_FONT};
  }

  #site-title {
    ${LIST_SIZING}

    a {
      text-decoration: none;
      color: ${THEME.PRIMARY_COLOR};
    }

    h1 {
      font-size: ${FONT_SIZES.MEDIUM};
      font-weight: ${FONT_WEIGHTS.BOLD};
      margin-bottom: ${SPACING.SMALL};
    }
  }

  input, textarea {
    background-color: ${THEME.SECONDARY_BACKGROUND_COLOR};
    color: ${THEME.FOREGROUND_COLOR};
    font-size: ${FONT_SIZES.MEDIUM};
    border: 0;
    font-weight: ${FONT_WEIGHTS.LIGHT};
    border-left: 4px solid ${THEME.FOREGROUND_COLOR};
    margin: ${SPACING.XSMALL} 0;
    padding: ${SPACING.SMALL};
  }

  button {
    cursor: pointer;
    font-size: ${FONT_SIZES.MEDIUM};
    background-color: ${THEME.SECONDARY_BACKGROUND_COLOR};
    color: ${THEME.FOREGROUND_COLOR};
    border: 0;
    border-left: 4px solid ${THEME.FOREGROUND_COLOR};
    margin: ${SPACING.XSMALL} 0;
    padding: ${SPACING.SMALL};

    &:hover {
      background-color: ${THEME.PRIMARY_COLOR};
    }
  }

  #post, #creation {
    ${ITEM_SIZING}

    p, h3, h4, h5, ul, ol {
      margin: ${SPACING.MEDIUM} 0;
    }
    code, blockquote, figure {
      margin-bottom: ${SPACING.LARGE};
    }

    p, li {
      font-weight: ${FONT_WEIGHTS.REGULAR};
      line-height: ${FONT_SIZES.LARGE};
    }

    time {
      margin: ${SPACING.SMALL} 0;
      font-size: ${FONT_SIZES.SMALL};
      font-weight: ${FONT_WEIGHTS.LIGHT};
    }

    h2 {
      font-size: ${FONT_SIZES.XLARGE};
      font-weight: ${FONT_WEIGHTS.BOLD};
      margin-top: 0;
      margin-bottom: ${SPACING.SMALL};
    }

    h3 {
      font-size: ${FONT_SIZES.LARGE};
      font-weight: ${FONT_WEIGHTS.BOLD};
    }

    h4 {
      font-size: ${FONT_SIZES.MEDIUM};
      font-weight: ${FONT_WEIGHTS.BOLD};
    }

    h5 {
      font-size: ${FONT_SIZES.SMALL};
      font-weight: ${FONT_WEIGHTS.BOLD};
    }

    p {
      font-size: ${FONT_SIZES.MEDIUM};
      font-weight: ${FONT_WEIGHTS.REGULAR};
    }

    a {
      color: ${THEME.PRIMARY_COLOR};
      text-decoration: none;
      font-weight: ${FONT_WEIGHTS.REGULAR};
      &:hover {
        text-decoration: underline;
      }
    }

    code, blockquote {
      font-weight: ${FONT_WEIGHTS.LIGHT};
      padding: ${SPACING.SMALL};
      display: block;
      font-size: ${FONT_SIZES.MEDIUM};
      font-family: ${CODE_FONT};
      background-color: ${THEME.SECONDARY_BACKGROUND_COLOR};
    }

    code {
      overflow-x: scroll;
    }

    p > code {
      display: inline;
      background-color: ${THEME.SECONDARY_BACKGROUND_COLOR};
      padding: 0;
    }

    strong {
      font-weight: ${FONT_WEIGHTS.BOLD};
    }

    ul, ol {
      margin-left: ${SPACING.MEDIUM};
    }

    li {
      font-size: ${FONT_SIZES.MEDIUM};
      margin: ${SPACING.XXSMALL} 0;
    }

  }
`

export const GlobalReset = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
