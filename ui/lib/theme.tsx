'use client'

import { createGlobalStyle } from 'styled-components'

const EVERYTHING_FONT = 'Inter, sans-serif'
const CODE_FONT = 'Source Code Pro, monospace'

const COLORS = {
  GRAYS: {
    '100': '#FFFFFF',
    '200': '#F6F6F6',
    '300': '',
    '400': '',
    '500': '#424242',
    '600': ''
  },
  PRIMARY: {
    '100': '#006FB9'
  }
}

const LIGHT_THEME = {
  BACKGROUND_COLOR: COLORS.GRAYS['100'],
  FOREGROUND_COLOR: COLORS.GRAYS['500'],
  PRIMARY_COLOR: COLORS.PRIMARY['100']
}

const DARK_THEME = {
  BACKGROUND_COLOR: COLORS.GRAYS['500'],
  FOREGROUND_COLOR: COLORS.GRAYS['100'],
  PRIMARY_COLOR: COLORS.PRIMARY['100']
}

export const THEME = DARK_THEME

const FONT_SIZES = {
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
    background-color: ${THEME.BACKGROUND_COLOR};
  }

  body, input, textarea, button {
    font-family: ${EVERYTHING_FONT};
  }

  #site-title {
    margin: ${SPACING.XXLARGE} 0;

    a {
      text-decoration: none;
      color: ${THEME.PRIMARY_COLOR};
    }

    h1 {
      font-size: ${FONT_SIZES.LARGE};
      font-weight: 700;
      margin-bottom: ${SPACING.SMALL};
    }
  }

  input, textarea {
    background-color: transparent;
    color: ${THEME.FOREGROUND_COLOR};
    font-size: ${FONT_SIZES.MEDIUM};
    border: 0;
    border-left: 4px solid ${THEME.FOREGROUND_COLOR};
    margin: ${SPACING.MEDIUM} 0;
    padding-left: ${SPACING.MEDIUM};
  }

  button {
    cursor: pointer;
    font-size: ${FONT_SIZES.MEDIUM};
    background-color: transparent;
    color: ${THEME.FOREGROUND_COLOR};
    border: 0;
    border-left: 4px solid ${THEME.FOREGROUND_COLOR};
    margin: ${SPACING.MEDIUM} 0;
    padding-left: ${SPACING.MEDIUM};

    &:hover {
      background-color: ${THEME.PRIMARY_COLOR};
      color: ${THEME.BACKGROUND_COLOR};
    }
  }

  #post, #creation {
    /* Common Section Spacing */
    p, time, h2, h3 {
      margin: ${SPACING.LARGE} ${SPACING.XXSMALL};
    }
    code, quote, img {
      margin: ${SPACING.LARGE} 0;
    }
    p, li {
      line-height: ${FONT_SIZES.LARGE};
    }
    /* Common Section Spacing */

    time {
      font-size: ${FONT_SIZES.SMALL};
      font-weight: 100;
    }

    h2 {
      font-size: ${FONT_SIZES.XLARGE};
      font-weight: 700;
      margin-top: 0;
    }

    h3 {
      font-size: ${FONT_SIZES.LARGE};
      font-weight: 700;
    }

    p {
      font-size: ${FONT_SIZES.MEDIUM};
      font-weight: 400;
    }

    a {
      color: ${THEME.PRIMARY_COLOR};
      text-decoration: none;
      font-weight: 400;
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
      font-weight: 700;
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
