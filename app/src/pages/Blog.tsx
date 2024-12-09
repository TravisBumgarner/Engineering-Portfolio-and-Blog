import React, { useMemo } from 'react'

import posts from 'content/posts'
import MasonryGrid from 'SharedComponents/MasonryGrid'
import MasonryImage from 'SharedComponents/MasonryImage'
import ROUTES from 'SharedComponents/routes'

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
              src={`${__STATIC__}/posts/${id}/${posts[id].preview_image}`}
            />
          )
        }
      })
  }, [])

  return <MasonryGrid elementsWithKeys={ListItems} />
}

export default Blog
