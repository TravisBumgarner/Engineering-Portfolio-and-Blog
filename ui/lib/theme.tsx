'use client'

import { createGlobalStyle, css } from 'styled-components'

const EVERYTHING_FONT = 'Satoshi, sans-serif'
const CODE_FONT = 'Source Code Pro, monospace'

const COLORS = {
  GRAYS: {
    '100': '#FFFFFF',
    '200': '#F6F6F6',
    '300': '',
    '400': '#303030',
    '500': '#1a1a1a',
    '600': ''
  },
  PRIMARY: {
    '100': '#1298f2',
    '200': '#006FB9'
  }
}

export const FONT_WEIGHTS = {
  LIGHT: 100,
  REGULAR: 300,
  BOLD: 500
}

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

export const SHARED_SPACING = css`
  padding: ${SPACING.LARGE};

  @media (max-width: 768px) {
    padding: ${SPACING.SMALL};
  }
`

export const GlobalStyle = createGlobalStyle`
  @media (prefers-color-scheme: light) {
    :root {
      --primary-background: ${COLORS.GRAYS['100']};
      --secondary-background: ${COLORS.GRAYS['200']};
      --foreground: ${COLORS.GRAYS['500']};
      --primary: ${COLORS.PRIMARY['100']};
      --background-blur: rgba(255,255,255,0.9);
    }
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --primary-background: ${COLORS.GRAYS['500']};
      --secondary-background: ${COLORS.GRAYS['400']};
      --foreground: ${COLORS.GRAYS['100']};
      --primary: ${COLORS.PRIMARY['100']};
      --background-blur: rgba(0,0,0,0.9);
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

  #site-title {
    padding: ${SPACING.LARGE} 0;

    @media (max-width: 768px) {
      margin-top: ${SPACING.SMALL};
    }

    a {
      text-decoration: none;
      color: var(--primary);
    }

    h1 {
      font-size: ${FONT_SIZES.LARGE};
      font-weight: ${FONT_WEIGHTS.BOLD};
      margin-bottom: ${SPACING.SMALL};

      @media (max-width: 768px) {
        font-size: ${FONT_SIZES.MEDIUM};
      }
    }
  }

  input, textarea {
    background-color: var(--secondary-background);
    color: var(--foreground);
    font-size: ${FONT_SIZES.MEDIUM};
    border: 0;
    font-weight: ${FONT_WEIGHTS.LIGHT};
    margin: ${SPACING.XSMALL} 0;
    padding: ${SPACING.SMALL};
  }

  button {
    cursor: pointer;
    font-size: ${FONT_SIZES.MEDIUM};
    background-color: var(--secondary-background);
    color: var(--foreground);
    border: 0;
    margin: ${SPACING.XSMALL} 0;
    padding: ${SPACING.SMALL};

    &:hover {
      color: var(--primary);
    }
  }

  #not-found, #error, #contact {
    > * {
      margin: ${SPACING.MEDIUM} 0;
    }

    h2 {
      font-size: ${FONT_SIZES.XLARGE};
      font-weight: ${FONT_WEIGHTS.BOLD};
      margin-top: 0;
      margin-bottom: ${SPACING.SMALL};
    }
  }

  #post, #creation {
    > p, > h3, > h4, > h5, > ul, > ol {
      margin: ${SPACING.MEDIUM} 0;
    }

    code, blockquote, figure, .video {
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
      color: var(--primary);
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
      background-color: var(--secondary-background);
    }

    code {
      overflow-x: scroll;
    }

    p > code, li > code, strong > code{
      display: inline;
      background-color: var(--secondary-background);
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
