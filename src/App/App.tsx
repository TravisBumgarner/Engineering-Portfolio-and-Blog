import { Routes, Route, useLocation } from 'react-router-dom'

import { GlobalStyle, media } from 'Theme'
import styled from 'styled-components'

import { ScrollToTop, Portfolio, NotFound, Header, Project, Blog, Snapshots, Post, Navigation } from './components'

const AppWrapper = styled.div`
    max-width: 1300px;
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
                <Navigation />
                <Routes>
                    <Route
                        path="/portfolio"
                        element={<Portfolio />}
                    />
                    <Route
                        path="/project/:id"
                        element={<Project />}
                    />
                    <Route
                        path="/blog"
                        element={<Blog />}
                    />
                    <Route
                        path="/post/:id"
                        element={<Post />}
                    />
                    <Route
                        path="/"
                        element={<Snapshots />}
                    />

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </AppWrapper>
        </>
    )
}

export default App
