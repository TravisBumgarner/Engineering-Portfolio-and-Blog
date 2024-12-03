import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import posts from 'Posts'

import Header from 'SharedComponents/Header'
import Snapshot from 'SharedComponents/Snapshot'
import { CSSHover } from 'Theme'

const ReadNow = styled.strong`
  ${CSSHover};
`

const Blog = () => {
  const ListItems = useMemo(() => {
    return Object.keys(posts)
      .sort((a, b) =>
        new Date(posts[a].date) < new Date(posts[b].date) ? 1 : -1
      )
      .map(id => {
        const { title, description } = posts[id]
        return (
          <Link key={id} to={`/post/${id}`}>
            <Snapshot
              src={`${__STATIC__}/posts/${id}/${posts[id].preview_image}`}
            >
              <Header size="medium">
                <ReadNow>{title}</ReadNow>
              </Header>
            </Snapshot>
          </Link>
        )
      })
  }, [])

  return <div>{ListItems}</div>
}

export default Blog
