'use client'

import { createGlobalStyle, css } from 'styled-components'

export const FOREGROUND_COLOR = '#EEE'
export const BACKGROUND_COLOR = '#363636'
export const BORDER_COLOR = '#DDD'
export const SECONDARY_COLOR = '#00eaff'
export const PRIMARY_COLOR = '#ffce05'
export const DISABLED_COLOR = '#ccc'

const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`

export const media = {
  desktop: customMediaQuery(1200),
  tablet: customMediaQuery(768),
  phone: customMediaQuery(376)
}

export const SPACING = {
  XXSMALL: 4,
  XSMALL: 8,
  SMALL: 12,
  MEDIUM: 16,
  LARGE: 24,
  XLARGE: 32,
  XXLARGE: 48
} as const

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

  ol,
  ul {
    list-style: none;
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
        font-family: Montserrat, sans-serif;
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
`

export const CSSHover = css`
  transition: color 0.3s;
  transition: background-color 0.3s;
  color: ${PRIMARY_COLOR};
  text-decoration-color: ${PRIMARY_COLOR};
  &:hover {
    background-color: ${PRIMARY_COLOR};
    color: ${BACKGROUND_COLOR};
    border-color: ${PRIMARY_COLOR};
    text-decoration-color: ${BACKGROUND_COLOR};
  }
`