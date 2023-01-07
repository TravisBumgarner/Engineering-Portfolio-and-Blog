import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { GlobalStyle, media } from 'Theme'
import styled from 'styled-components'

import { ScrollToTop, Portfolio, NotFound, Header, SingleProject } from './components'

const AppWrapper = styled.div`
    max-width: 1200px;
    padding: 1rem;
    margin: 0 auto;
    box-sizing: border-box;
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
