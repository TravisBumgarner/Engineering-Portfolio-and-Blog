import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import { GlobalStyle, SPACING } from 'Theme'

import Error from 'SharedComponents/Error'
import {  ScrollToTop, Sidebar, SiteTitle } from './components'
import Loading from 'SharedComponents/Loading'

const Blog = lazy(() => import('./pages/Blog'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const Post = lazy(() => import('./pages/Post'))
const Project = lazy(() => import('./pages/Project'))
const Snapshots = lazy(() => import('./pages/Snapshots'))

const BodyWrapper = styled.div`
  padding-top: ${SPACING.XLARGE}px;
  display: flex;

  > div:first-child {
    top: ${SPACING.XLARGE}px;
    position: sticky;
    width: 200px;
    height: 100%;
    padding-right: ${SPACING.XLARGE}px;
    box-sizing: border-box;
    flex-shrink: 0;
  }

  > div:last-child {
    flex-grow: 1;
  }
`

const AppWrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: ${SPACING.XLARGE}px;
`

const App = () => {
  return (
    <AppWrapper>
      <GlobalStyle />
      <ScrollToTop />
      <SiteTitle />
      <BodyWrapper>
        <Sidebar />
        <Suspense fallback={<Loading />}>
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
      {/* <Me /> */}
    </AppWrapper>
  )
}

export default App
