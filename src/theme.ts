import { createGlobalStyle } from 'styled-components'

const PRIMARY_COLOR = '#000000'
const SECONDARY_COLOR = '#32394c'
const TERTIARY_COLOR = '#b9ccff'

const customMediaQuery = (maxWidth: number) => `@media (max-width: ${maxWidth}px)`

const media = {
    desktop: customMediaQuery(1200),
    tablet: customMediaQuery(768),
    phone: customMediaQuery(376)
}

const GlobalStyle = createGlobalStyle`

    a {
        text-decoration: none;
        &: hover {
            color: ${TERTIARY_COLOR};
        }
        &: visited {
            color: ${PRIMARY_COLOR};
        }
    }

    html {
        font-family: Montserrat, sans-serif;
        line-height: 1.5;
        font-weight: 300;
        font-size: 1rem;
        color: ${PRIMARY_COLOR};

        overflow: -moz-scrollbars-vertical; 
        overflow-y: scroll;
        font-size: 16px;
        ${media.tablet} {
            font-size: 14px;
        }
    }

    strong {
        font-weight: 700;
    }
`

export { media, PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR, GlobalStyle }
