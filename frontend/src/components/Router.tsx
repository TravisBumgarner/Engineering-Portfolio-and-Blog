import { ROUTES } from '@common/core'
import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const Creation = lazy(async () => await import('../pages/Creations/Creation'))
const NotFound = lazy(async () => await import('../pages/NotFound'))
const Marketing = lazy(async () => await import('../pages/Marketing'))
const Candlelight = lazy(async () => await import('../pages/Marketing/Candlelight'))
const Ideas = lazy(async () => await import('../pages/Marketing/Ideas'))
const Classifieds = lazy(async () => await import('../pages/Marketing/Classifieds'))
const Todo = lazy(async () => await import('../pages/Marketing/Todo'))
const Blog = lazy(async () => await import('../pages/Blog'))
const BlogPost = lazy(async () => await import('../pages/Blog/BlogPost'))
const Creations = lazy(async () => await import('../pages/Creations/Creations'))
const Snapshots = lazy(async () => await import('../pages/Snapshots'))

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
    <Route path={ROUTES.MARKETING.href} element={<Marketing />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
)

export default Router
