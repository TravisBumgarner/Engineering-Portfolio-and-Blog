import { useEffect, useState, useCallback, useMemo } from 'react'
import styled from 'styled-components'

import posts, { BlogPost } from "Posts"

import { Link } from 'react-router-dom'
import { Text, Title, Snapshot } from 'SharedComponents'

const BlogWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    > * {
        width: 48%;
    }
`

const ReadNow = styled.strong`
  &:hover {
    background-color: #3e8eff;
    color: white;
    border-color: #3e8eff;
  }
`

const Blog = () => {
    const ListItems = useMemo(() => {
        return Object
            .keys(posts)
            .sort((a, b) => new Date(posts[a].date) < new Date(posts[b].date) ? 1 : -1)
            .map((id) => {
                const { title, description } = posts[id]
                return (
                    <Link key={id} to={`/post/${id}`}>
                        <Snapshot src={`${__STATIC__}posts/${id}/${posts[id].preview_image}`}>
                            <>
                                <Title size="medium">{title}</Title>
                                <Text>{description} <ReadNow>Read Now</ReadNow></Text>
                            </>
                        </Snapshot >
                    </Link>
                )
            })
    }, [])

    return (
        <BlogWrapper>
            {ListItems}
        </BlogWrapper>
    )
}

export default Blog
