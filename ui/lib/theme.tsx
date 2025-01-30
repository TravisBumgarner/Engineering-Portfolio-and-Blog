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

export const GlobalReset = createGlobalStyle`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  button,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`

export const GlobalStyle = createGlobalStyle`
   html {
        background-color: ${BACKGROUND_COLOR};
        font-family: ${SANS_SERIF_FONT};
        line-height: 1.5;
        font-weight: 400;
        font-size: 20px;
        color: ${FOREGROUND_COLOR};

        overflow: -moz-scrollbars-vertical; 
        overflow-y: scroll;
        ${media.tablet} {
            font-size: 14px;
        }
    }

  h1 {
    font-size: 1.6rem;
    color: ${SECONDARY_COLOR};
    margin: 0 0;
    font-weight: 100;
  }
  h2 {
    color: ${SECONDARY_COLOR};
    font-size: 1.4rem;
    margin: ${SPACING.MEDIUM}px 0;
    font-weight: 400;
  }
  h3 {
    color: ${SECONDARY_COLOR};
  font-size: 1.2rem;
  margin: ${SPACING.MEDIUM}px 0;
  font-weight: 400;
  }
  strong {
    font-weight: 700;
    font-size: 1rem;
  }

  a {
    font-weight: 100;
    color: ${PRIMARY_COLOR};
    text-decoration: underline;
    text-decoration-thickness: from-font;
  }

  p {
    margin: ${SPACING.MEDIUM}px 0;
    font-weight: 300;
  }

  li {
    margin: ${SPACING.SMALL}px 0;
    font-weight: 300;
  }

  ul, ol {
    margin-bottom: ${SPACING.MEDIUM}px;
    padding-left: ${SPACING.MEDIUM}px;
  }

  ul {
    list-style: circle;
  }
  
  ol {
    list-style: decimal;
  }

  code {
    font-family: ${MONOSPACE_FONT};
    position: relative;
    font-size: 1rem;
    border: 1px solid ${BORDER_COLOR};
    font-weight: 100;
    display: block;
    box-sizing: border-box;
    padding: ${SPACING.MEDIUM}px;
    margin: ${SPACING.MEDIUM}px 0;
  }

  p > code {
    font-family: ${MONOSPACE_FONT};
    display: inline;
    border: 0;
    padding: 0;
    border-radius: 0;
    background-color: color-mix(in srgb, ${BORDER_COLOR} 25%, transparent);

    &:before,
    &:after {
      content: '';
      display: inline;
    }
  }

  blockquote {
    position: relative;
    font-size: 1rem;
    border: 1px solid ${BORDER_COLOR};
    font-weight: 100;
    display: block;
    box-sizing: border-box;
    padding: ${SPACING.MEDIUM}px;
    margin: ${SPACING.MEDIUM}px 0;
  }

  figure {
    margin: ${SPACING.MEDIUM}px 0;

    figcaption {
      margin: ${SPACING.SMALL}px 0;
      font-weight: 300;
      font-size: 0.8rem;
    }
  }
`
