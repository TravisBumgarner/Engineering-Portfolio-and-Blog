'use client'

import { createGlobalStyle } from 'styled-components'
import { MAX_LIST_WIDTH } from './consts'

const EVERYTHING_FONT = 'Inter, sans-serif'
const CODE_FONT = 'Source Code Pro, monospace'

const COLORS = {
  GRAYS: {
    '100': '#FFFFFF',
    '200': '#F6F6F6',
    '300': '',
    '400': '#2C2C2C',
    '500': '#424242',
    '600': ''
  },
  PRIMARY: {
    '100': '#1298f2',
    '200': '#006FB9',
  }
}

type Theme = {
  PRIMARY_BACKGROUND_COLOR: string
  SECONDARY_BACKGROUND_COLOR: string
  FOREGROUND_COLOR: string
  PRIMARY_COLOR: string
}

const LIGHT_THEME: Theme = {
  PRIMARY_BACKGROUND_COLOR: COLORS.GRAYS['100'],
  SECONDARY_BACKGROUND_COLOR: COLORS.GRAYS['200'],
  FOREGROUND_COLOR: COLORS.GRAYS['500'],
  PRIMARY_COLOR: COLORS.PRIMARY['100'],
}

const DARK_THEME: Theme = {
  PRIMARY_BACKGROUND_COLOR: COLORS.GRAYS['500'],
  FOREGROUND_COLOR: COLORS.GRAYS['100'],
  PRIMARY_COLOR: COLORS.PRIMARY['100'],
  SECONDARY_BACKGROUND_COLOR: COLORS.GRAYS['400']
}

export const FONT_WEIGHTS = {
  LIGHT: 100,
  REGULAR: 400,
  BOLD: 700
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
  SMALL: '12px',
  MEDIUM: '16px',
  LARGE: '24px',
  XLARGE: '32px',
  XXLARGE: '70px'
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
    font-family: ${EVERYTHING_FONT};
    color: ${THEME.FOREGROUND_COLOR};
    background-color: ${THEME.PRIMARY_BACKGROUND_COLOR};
  }

  body, input, textarea, button {
    font-family: ${EVERYTHING_FONT};
  }

  #site-title {
    margin: ${SPACING.XLARGE} auto;
    max-width: ${MAX_LIST_WIDTH};

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
    max-width: 100%;
    width: ${MAX_LIST_WIDTH};
    margin: 0 auto;
    /* Common Section Spacing */
    p, time, h2, h3 {
      margin: ${SPACING.LARGE} ${SPACING.XXSMALL};
    }
    code, quote, figure {
      margin: ${SPACING.LARGE} 0;
    }
    p, li {
      line-height: ${FONT_SIZES.LARGE};
    }
    /* Common Section Spacing */

    time {
      font-size: ${FONT_SIZES.SMALL};
      font-weight: ${FONT_WEIGHTS.LIGHT};
    }

    h2 {
      font-size: ${FONT_SIZES.XLARGE};
      font-weight: ${FONT_WEIGHTS.BOLD};
      margin-top: 0;
    }

    h3 {
      font-size: ${FONT_SIZES.LARGE};
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

    quote {
      font-size: ${FONT_SIZES.MEDIUM};
    }

    code{
      font-size: ${FONT_SIZES.MEDIUM};
      font-family: ${CODE_FONT};
    }

    strong {
      font-weight: ${FONT_WEIGHTS.BOLD};
    }

    ul, ol {
      margin-left: ${SPACING.XLARGE};
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
