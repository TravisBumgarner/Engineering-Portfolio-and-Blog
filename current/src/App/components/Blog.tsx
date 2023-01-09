import { useEffect, useState, useCallback, useMemo } from 'react'
import styled from 'styled-components'

import posts, { BlogPost } from "Posts"

import { Link, useNavigate } from 'react-router-dom'

const BlogListItemWrapper = styled(Link)`
    margin: 1rem 0;
    padding: 1rem;
    box-sizing: border-box;
    border: 2px solid black;
    display: block;
    cursor: pointer;
`

const BlogListItem = ({ post, id }: { post: BlogPost, id: string }) => {
    return (
        <BlogListItemWrapper to={`/post/${id}`}>
            <h2>{post.title}</h2>
            <time>{post.date}</time>
            <p>{post.description}</p>
        </BlogListItemWrapper>
    )
}


const Blog = () => {
    const ListItems = useMemo(() => {
        return Object
            .keys(posts)
            .sort((a, b) => new Date(posts[a].date) < new Date(posts[b].date) ? 1 : -1)
            .map((id) => <BlogListItem key={id} id={id} post={posts[id]} />)
    }, [])

    return (
        <div>
            <ul>
                {ListItems}
            </ul>
        </div>
    )
}

export default Blog
