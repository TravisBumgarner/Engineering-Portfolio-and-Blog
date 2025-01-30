'use client'

import { createGlobalStyle } from 'styled-components'

const MONOSPACE_FONT = 'Source Code Pro, monospace'
const SANS_SERIF_FONT = 'Inter, sans-serif'

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

export const THEME = LIGHT_THEME

const FONT_SIZES = {
  SMALL: '16px',
  MEDIUM: '20px',
  LARGE: '36px',
  XLARGE: '50px'
}

export const SPACING = {
  XXSMALL: '4px',
  //   XSMALL: 8,
  SMALL: '12px',
  //   MEDIUM: 16,
  LARGE: '24px',
  XLARGE: '32px'
  //   XXLARGE: 48
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
    color: ${THEME.FOREGROUND_COLOR};
    background-color: ${THEME.BACKGROUND_COLOR};
  }

  #site-title {
    a {
      text-decoration: none;
      color: ${THEME.PRIMARY_COLOR};
    }
    h1 {
      font-size: ${FONT_SIZES.LARGE};
      font-weight: 700;
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
    }

    strong {
      font-weight: 700;
    }

    ul, ol {
      margin-left: ${SPACING.XLARGE};
    }

    li {
      font-size: ${FONT_SIZES.MEDIUM};
      margin: ${SPACING.SMALL} 0;
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
