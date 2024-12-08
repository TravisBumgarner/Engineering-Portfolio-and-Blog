import React, { useMemo } from 'react'

import posts from 'Posts'

import Snapshot from 'SharedComponents/Snapshot'
import MasonryGrid from 'SharedComponents/MasonryGrid'

const Blog = () => {
  const ListItems = useMemo(() => {
    return Object.keys(posts)
      .sort((a, b) =>
        new Date(posts[a].date) < new Date(posts[b].date) ? 1 : -1
      )
      .map(id => {
        const { title } = posts[id]
        return ({
          key: id,
          element: (
            <Snapshot
            link={`/post/${id}`}
            text={title}
            src={`${__STATIC__}/posts/${id}/${posts[id].preview_image}`}
          />
          )
        }
          
        )
      })
  }, [])

  return <MasonryGrid elementsWithKeys={ListItems} />
}

export default Blog
