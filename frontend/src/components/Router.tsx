import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import ROUTES from '../routes'
const Blog = lazy(async () => await import('../pages/Blog'))
const BlogPost = lazy(async () => await import('../pages/BlogPost'))
const Creations = lazy(async () => await import('../pages/Creations'))
const Snapshots = lazy(async () => await import('../pages/Snapshots'))

const Router = () => (
    <Routes>
        <Route path={ROUTES.SNAPSHOTS.href} element={<Snapshots />} />
        <Route path={ROUTES.CREATIONS.href} element={<Creations />} />
        <Route path={`${ROUTES.BLOG.href}/:id`} element={<BlogPost />} />
        <Route path={ROUTES.BLOG.href} element={<Blog />} />
    </Routes>
)

export default Router