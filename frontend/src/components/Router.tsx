import { ROUTES } from '@common/core'
import { type ComponentType, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import WorkWithMe from '../pages/Work'

// Helper that auto-reloads once if a chunk fails to load (handles stale deployments)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const lazyWithRetry = <T extends ComponentType<any>>(
  importFn: () => Promise<{ default: T }>
) => {
  return lazy(async () => {
    const storageKey = 'chunk-refresh'
    const hasRefreshed = sessionStorage.getItem(storageKey)
    try {
      const module = await importFn()
      sessionStorage.removeItem(storageKey)
      return module
    } catch (error) {
      if (!hasRefreshed) {
        sessionStorage.setItem(storageKey, 'true')
        window.location.reload()
      }
      throw error
    }
  })
}

const Creation = lazyWithRetry(async () => await import('../pages/Creations/Creation'))
const NotFound = lazyWithRetry(async () => await import('../pages/NotFound'))
const Candlelight = lazyWithRetry(async () => await import('../pages/Marketing/Candlelight'))
const Ideas = lazyWithRetry(async () => await import('../pages/Marketing/Ideas'))
const Classifieds = lazyWithRetry(async () => await import('../pages/Marketing/Classifieds'))
const Todo = lazyWithRetry(async () => await import('../pages/Marketing/Todo'))
const FilmTracker = lazyWithRetry(async () => await import('../pages/Marketing/FilmTracker'))
const Blog = lazyWithRetry(async () => await import('../pages/Blog'))
const BlogPost = lazyWithRetry(async () => await import('../pages/Blog/BlogPost'))
const Creations = lazyWithRetry(async () => await import('../pages/Creations/Creations'))
const Snapshots = lazyWithRetry(async () => await import('../pages/Snapshots'))

const Router = () => (
  <Routes>
    <Route path={ROUTES.SNAPSHOTS.href} element={<Snapshots />} />
    <Route path={`${ROUTES.CREATIONS.href}/:id`} element={<Creation />} />
    <Route path={ROUTES.CREATIONS.href} element={<Creations />} />
    <Route path={`${ROUTES.BLOG.href}/:id`} element={<BlogPost />} />
    <Route path={ROUTES.BLOG.href} element={<Blog />} />
    <Route path={ROUTES.NOT_FOUND.href} element={<NotFound />} />
    <Route path={ROUTES.MARKETING_CANDLELIGHT.href} element={<Candlelight />} />
    <Route path={ROUTES.MARKETING_CLASSIFIEDS.href} element={<Classifieds />} />
    <Route path={ROUTES.MARKETING_IDEAS.href} element={<Ideas />} />
    <Route path={ROUTES.MARKETING_TODO.href} element={<Todo />} />
    <Route path={ROUTES.MARKETING_FILM_TRACKER.href} element={<FilmTracker />} />
    <Route path={ROUTES.WORK_WITH_ME.href} element={<WorkWithMe />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
)

export default Router
