import { Routes, Route, useLocation } from 'react-router-dom'

import { GlobalStyle, media } from 'Theme'
import styled from 'styled-components'

import { ScrollToTop, Portfolio, NotFound, Header, Project, Blog, Snapshots, Post, Sidebar } from './components'

const AppWrapper = styled.div`
    max-width: 1600px;
    margin: 0 auto;
    box-sizing: border-box;
    display: flex;
    height: 100%;

    > div:first-child {
        width: 30%;
        min-width: 400px;
        height: 100%;
        padding: 1rem;
        box-sizing: border-box;

        ${media.tablet}{
            min-width: 225px;
        }
    }

    > div:last-child {
        flex-grow: 1;
        padding: 1rem;
        box-sizing: border-box;
        max-width: 600px;
        margin: 0px auto;
    }
`

const NoScrollWrapper = styled.div`
    position: sticky;
    top: 0px;
`

const App = () => {
    return (
        <>
            <ScrollToTop />
            <GlobalStyle />
            <AppWrapper>
                <NoScrollWrapper>
                    <Sidebar />
                </NoScrollWrapper>
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
