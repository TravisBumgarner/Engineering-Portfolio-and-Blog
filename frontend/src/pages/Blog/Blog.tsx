import { ROUTES } from '@common/core'
import posts from '../../content/posts'
import ItemPreview from '../../sharedComponents/ItemPreview'
import Subscribe from './Subscribe'

const Blog = () => {
  return (
    <>
      <Subscribe />
      {Object.keys(posts)
        .sort((a, b) => (new Date(posts[a].date) < new Date(posts[b].date) ? 1 : -1))
        .map((id) => {
          const { title, description } = posts[id]
          return (
            <ItemPreview
              type="post"
              key={id}
              date={posts[id].date}
              link={`${ROUTES.BLOG.href}/${id}`}
              title={title}
              description={description}
              src={`/post-resources/${id}/${posts[id].preview_image}`}
            />
          )
        })}
    </>
  )
}

export default Blog
