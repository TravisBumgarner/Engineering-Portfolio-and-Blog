import { createGlobalStyle, css } from 'styled-components'

export const FOREGROUND_COLOR = '#f5f5f5'
export const BACKGROUND_COLOR = '#363636'
export const SECONDARY_COLOR = '#00eaff'
export const PRIMARY_COLOR = '#ffce05'

const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`

export const media = {
  desktop: customMediaQuery(1200),
  tablet: customMediaQuery(768),
  phone: customMediaQuery(376)
}

export const CSSTransition = css`
  transition: color 0.75s;
  transition: background-color 0.75s;
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

    strong {
        font-weight: 700;
    }
`

export const CSSHover = css`
  color: ${PRIMARY_COLOR};
  &:hover {
    background-color: ${PRIMARY_COLOR};
    color: ${BACKGROUND_COLOR};
    border-color: ${PRIMARY_COLOR};
  }
  ${CSSTransition};
`
