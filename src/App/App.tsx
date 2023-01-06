import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { GlobalStyle, media } from 'Theme'
import styled from 'styled-components'

import { ScrollToTop, Portfolio, NotFound, Header, SingleProject } from './components'

const AppWrapper = styled.div`
    max-width: 1200px;
    width: 90%;
    margin: 15px auto 30px;
    box-sizing: border-box;

    ${media.tablet}{
        width: 100%;
    }
`

const App = () => {
    return (
        <>
            <ScrollToTop />
            <GlobalStyle />
            <AppWrapper>
                <Header />
                <Routes>
                    <Route
                        path="/"
                        element={<Portfolio />}
                    />
                    <Route
                        path="/project/:id"
                        element={<SingleProject />}
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </AppWrapper>
        </>
    )
}

export default App
