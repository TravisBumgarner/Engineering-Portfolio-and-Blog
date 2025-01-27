'use client'

import MasonryGrid from '@/app/_sharedComponents/MasonryGrid'
import MasonryImage from '@/app/_sharedComponents/MasonryImage'
import posts from '@/content/posts'
import useTotalColumns from '@/lib/hooks/useTotalColumns'
import ROUTES from '@/lib/routes'

const Blog = () => {
  const totalColumns = useTotalColumns()

  const ListItems = Object.keys(posts)
    .sort((a, b) =>
      new Date(posts[a].date) < new Date(posts[b].date) ? 1 : -1
    )
    .map((id, index) => {
      const { title } = posts[id]
      return {
        key: id,
        element: (
          <MasonryImage
          totalColumns={totalColumns}
            // Prioritize the first two posts
            priority={index <= 1}
            date={new Date(posts[id].date).toLocaleString('default', {
              month: 'long',
              year: 'numeric'
            })}
            link={`${ROUTES.BLOG.path}/${id}`}
            text={title}
            src={`/post-resources/${id}/${posts[id].preview_image}`}
          />
        )
      }
    })

  return <MasonryGrid elementsWithKeys={ListItems} totalColumns={totalColumns} />
}

export default Blog