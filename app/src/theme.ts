import { createGlobalStyle, css } from 'styled-components'

export const FOREGROUND_COLOR = '#EEE'
export const BACKGROUND_COLOR = '#363636'
export const BORDER_COLOR = '#979797'
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

export const CSSTransition = css`
  transition: color 0.3s;
  transition: background-color 0.3s;
`

export const GlobalStyle = createGlobalStyle`
    a {
        text-decoration: none;
        &:hover {
            color: ${PRIMARY_COLOR};
        }
    }
    
    html {
        background-color: ${BACKGROUND_COLOR};
        ${CSSTransition};
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

    time {
      font-size: 0.8rem;
    }

    strong {
        font-weight: 700;
    }
`

export const CSSHover = css`
  font-weight: 300;
  color: ${PRIMARY_COLOR};
  &:hover {
    background-color: ${PRIMARY_COLOR};
    color: ${BACKGROUND_COLOR};
    border-color: ${PRIMARY_COLOR};
  }
  ${CSSTransition};
`
