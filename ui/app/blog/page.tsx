import { Box } from '@mui/material'
import posts from '@/content/posts'
import ROUTES from '@/lib/routes'
import ItemPreview from '../../lib/sharedComponents/ItemPreview'
import Subscribe from './Subscribe'

const Blog = () => {
  return (
    <Box>
      <Subscribe />
      {Object.keys(posts)
        .sort((a, b) => (new Date(posts[a].date) < new Date(posts[b].date) ? 1 : -1))
        .map((id, index) => {
          const { title, description } = posts[id]
          return (
            <ItemPreview
              type="post"
              key={id}
              priority={index === 0}
              date={posts[id].date}
              link={`${ROUTES.BLOG.href}/${id}`}
              title={title}
              description={description}
              src={`/post-resources/${id}/${posts[id].preview_image}`}
            />
          )
        })}
    </Box>
  )
}

export default Blog
