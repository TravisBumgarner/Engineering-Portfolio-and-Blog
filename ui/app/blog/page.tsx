import posts from '@/content/posts'
import ROUTES from '@/lib/routes'
import ListItem from '../_sharedComponents/ListItem'
import RSS from './RSS'
import Subscribe from './Subscribe'

const Blog = () => {
  return (
    <div>
      <Subscribe />
      <RSS />
      {Object.keys(posts)
        .sort((a, b) =>
          new Date(posts[a].date) < new Date(posts[b].date) ? 1 : -1
        )
        .map((id, index) => {
          const { title, description } = posts[id]
          return (
            <ListItem
              key={id}
              priority={index === 0}
              date={new Date(posts[id].date).toLocaleString('default', {
                month: 'long',
                year: 'numeric'
              })}
              link={`${ROUTES.BLOG.path}/${id}`}
              title={title}
              description={description}
              src={`/post-resources/${id}/${posts[id].preview_image}`}
            />
          )
        })}
    </div>
  )
}

export default Blog
