import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import { GlobalStyle } from 'Theme'

import Error from 'SharedComponents/Error'
import { Me, ScrollToTop, Sidebar, SiteTitle } from './components'

const Blog = lazy(() => import('./pages/Blog'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const Post = lazy(() => import('./pages/Post'))
const Project = lazy(() => import('./pages/Project'))
const Snapshots = lazy(() => import('./pages/Snapshots'))

const BodyWrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  height: 100%;
  padding: 0 1rem;

  > div:first-child {
    top: 0;
    position: sticky;
    width: 200px;
    height: 100%;
    padding-right: 1rem;
    box-sizing: border-box;
  }

  > div:last-child {
    flex-grow: 1;
    box-sizing: border-box;
    max-width: calc(600px + 2rem);
    margin: 2rem auto 0;
    padding: 0rem 1rem;
  }
`

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ScrollToTop />
      <SiteTitle />
      <BodyWrapper>
        <Sidebar />
        <Suspense>
          <Routes>
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/project/:id" element={<Project />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/" element={<Snapshots />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/error" element={<Error />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BodyWrapper>
      <Me />
    </>
  )
}

export default App
