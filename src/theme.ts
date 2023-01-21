import { createGlobalStyle, css } from 'styled-components'

const PRIMARY_COLOR = 'rgb(51, 51, 51)'
const SECONDARY_COLOR = '#32394c'
const TERTIARY_COLOR = '#3e8eff'

const customMediaQuery = (maxWidth: number) => `@media (max-width: ${maxWidth}px)`

const media = {
    desktop: customMediaQuery(1200),
    tablet: customMediaQuery(768),
    phone: customMediaQuery(376)
}

const CSSTransition = css`
    transition: all 0.75s;
`

const GlobalStyle = createGlobalStyle`
    a {
        text-decoration: none;
        &:hover {
            color: ${TERTIARY_COLOR};
        }
        &:visited {
            color: ${PRIMARY_COLOR};
        }
    }
    
    html {
        ${CSSTransition};
        font-family: Montserrat, sans-serif;
        line-height: 1.5;
        font-weight: 400;
        font-size: 20px;
        color: ${PRIMARY_COLOR};

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

const CSSHover = css`
    &:hover {
        background-color: ${TERTIARY_COLOR};
        color: white;
        border-color: ${TERTIARY_COLOR};
    }
    ${CSSTransition};
`

export { media, PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR, GlobalStyle, CSSHover, CSSTransition }
