import { useMemo } from 'react'

import MasonryGrid from '@/app/_sharedComponents/MasonryGrid'
import MasonryImage from '@/app/_sharedComponents/MasonryImage'
import posts from '@/content/posts'
import ROUTES from '@/lib/routes'

const Blog = () => {
  const ListItems = useMemo(() => {
    return Object.keys(posts)
      .sort((a, b) =>
        new Date(posts[a].date) < new Date(posts[b].date) ? 1 : -1
      )
      .map(id => {
        const { title } = posts[id]
        return {
          key: id,
          element: (
            <MasonryImage
              date={new Date(posts[id].date).toLocaleString('default', {
                month: 'long',
                year: 'numeric'
              })}
              link={`${ROUTES.BLOG.path}/${id}`}
              text={title}
              src={`${process.env.NEXT_PUBLIC_STATIC_PATH}/posts/${id}/${posts[id].preview_image}`}
            />
          )
        }
      })
  }, [])

  return <MasonryGrid elementsWithKeys={ListItems} />
}

export default Blog
