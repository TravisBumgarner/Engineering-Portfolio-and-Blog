import React from 'react'
import { Routes, Route } from 'react-router-dom'

import projects, { Project } from 'Content'

import { ScrollToTop, Portfolio, NotFound, Header, SingleProject, Footer } from './components'
import { GlobalStyle, media } from 'Theme'

import styled from 'styled-components'

const sortByDate = (a: Project, b: Project) => {
    if (a.end_date === 'Ongoing') {
        return -1
    }
    if (b.end_date === 'Ongoing') {
        return 1
    }
    return Date.parse(b.end_date) - Date.parse(a.end_date)
}

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
                        element={<Portfolio projects={projects} />}
                    />
                    <Route
                        path="/project/:id"
                        element={<SingleProject projects={projects} />}
                    />
                    <Route element={<NotFound />} />
                </Routes>
                <Footer />
            </AppWrapper>
        </>
    )
}

export default App
