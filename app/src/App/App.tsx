import { Routes, Route, useLocation } from 'react-router-dom'

import { GlobalStyle, media } from 'Theme'
import styled from 'styled-components'

import { ScrollToTop, Portfolio, NotFound, Project, Blog, Snapshots, Post, Sidebar, Header } from './components'

const BodyWrapper = styled.div`
    max-width: 1600px;
    margin: 0 auto;
    box-sizing: border-box;
    display: flex;
    height: 100%;
    padding: 0 1rem;

    > div:first-child {
        min-width: 200px;
        width: 200px;
        max-width: 200px;
        height: 100%;
        padding-right: 1rem;
        box-sizing: border-box;
    }

    > div:last-child {
        flex-grow: 1;
        box-sizing: border-box;
        max-width: 600px;
        margin: 0px auto;
    }
`

const NoScrollWrapper = styled.div<{ top: number }>`
    position: sticky;
    ${({ top }) => `top: ${top}px;`};
`

const App = () => {
    return (
        <>
            <ScrollToTop />
            <GlobalStyle />
            <NoScrollWrapper top={0}>
                <Header />
            </NoScrollWrapper>
            <BodyWrapper>
                <NoScrollWrapper top={94}> {/* Yay magic numbers */}
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
            </BodyWrapper>
        </>
    )
}

export default App
