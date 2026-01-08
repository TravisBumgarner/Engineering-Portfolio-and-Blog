import { ROUTES } from '@common/core'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import posts from '../../content/posts'
import logger from '../../utilities/logger'
import Subscribe from './Subscribe'

const BlogPost = () => {
  const { id } = useParams()
  const [PostComponent, setPostComponent] = useState<React.ComponentType | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!id) return

    const loadPost = async () => {
      try {
        const postModule = await import(`../../content/posts/${id}.mdx`)
        setPostComponent(() => postModule.default)
      } catch (error) {
        logger.error('Failed to load post:', error)
        setPostComponent(null)
      } finally {
        setLoading(false)
      }
    }

    loadPost()
  }, [id])

  if (!id) {
    return <Navigate to={ROUTES.NOT_FOUND.href} />
  }

  const post = posts[id]
  if (!post) {
    return <Navigate to={ROUTES.NOT_FOUND.href} />
  }

  if (loading) {
    return <Box>Loading...</Box>
  }

  if (!PostComponent) {
    return <Navigate to={ROUTES.NOT_FOUND.href} />
  }

  return (
    <Box>
      <Typography variant="h2">{post.title}</Typography>

      <time>Posted {new Date(`${post.date}T00:00:00Z`).toUTCString().split(' ').slice(0, 4).join(' ')}</time>

      <PostComponent />

      <Subscribe />
    </Box>
  )
}

export default BlogPost
