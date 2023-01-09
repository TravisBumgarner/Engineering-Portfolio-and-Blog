import { Routes, Route } from 'react-router-dom'

import { GlobalStyle, media } from 'Theme'
import styled from 'styled-components'

import { ScrollToTop, Portfolio, NotFound, Header, SingleProject, Blog, Home, Post } from './components'

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
                        path="/projects"
                        element={<Portfolio />}
                    />
                    <Route
                        path="/projects/:id"
                        element={<SingleProject />}
                    />
                    <Route
                        path="/blog"
                        element={<Blog />}
                    />
                    <Route
                        path="/blog/:id"
                        element={<Post />}
                    />
                    <Route
                        path="/"
                        element={<Home />}
                    />

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </AppWrapper>
        </>
    )
}

export default App
