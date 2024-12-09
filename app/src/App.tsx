import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import { GlobalStyle, media, SPACING } from 'Theme'

import Error from 'SharedComponents/Error'
import Loading from 'SharedComponents/Loading'
import { ROUTES, ScrollToTop, Sidebar, SiteTitle } from './components'

const Blog = lazy(() => import('./pages/Blog'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const Post = lazy(() => import('./pages/Post'))
const Project = lazy(() => import('./pages/Project'))
const Snapshots = lazy(() => import('./pages/Snapshots'))

const BodyWrapper = styled.div`
  padding-top: ${SPACING.XXLARGE}px;
  display: flex;

  ${media.tablet} {
    padding-top: ${SPACING.MEDIUM}px;
  }

  > div:first-child {
    flex-shrink: 0;
    top: ${SPACING.XLARGE}px;
    position: sticky;
    width: 200px;
    height: 100%;
    padding-right: ${SPACING.XXLARGE}px;
    box-sizing: border-box;

    ${media.tablet} {
      padding-right: ${SPACING.MEDIUM}px;
      width: 100px;

      h3 {
        margin-top: 0;
      }
    }
  }

  > div:last-child {
    flex-grow: 1;
  }
`

const AppWrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: ${SPACING.XXLARGE}px;

  ${media.tablet} {
    padding: ${SPACING.MEDIUM}px;
  }
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
            <Route path={ROUTES.CONTACT.path} element={<Contact />} />
            <Route path={ROUTES.CREATIONS.path} element={<Portfolio />} />
            <Route path={`${ROUTES.CREATIONS.path}/:id`} element={<Project />} />
            <Route path={ROUTES.BLOG.path} element={<Blog />} />
            <Route path={ROUTES.SNAPSHOTS.path} element={<Snapshots />} />
            <Route path={`${ROUTES.BLOG.path}/:id`} element={<Post />} />
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
