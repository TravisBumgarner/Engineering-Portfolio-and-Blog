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
        <BlogListItemWrapper to={`/blog/${id}`}>
            <h2>{post.title}</h2>
            <time>{post.date}</time>
            <p>{post.description}</p>
        </BlogListItemWrapper>
    )
}


const Blog = () => {
    const ListItems = useMemo(() => {
        return Object.keys(posts).map((id) => <BlogListItem key={id} id={id} post={posts[id]} />)
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
