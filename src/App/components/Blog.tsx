import { useEffect, useState, useCallback, useMemo } from 'react'
import styled from 'styled-components'

import posts, { BlogPost } from "Posts"

import { Link, useNavigate } from 'react-router-dom'
import { Text, Title } from 'SharedComponents'

const BlogListItemWrapper = styled(Link) <{ src: string }>`
    margin: 1rem 0;
    padding: 4rem 1rem;
    box-sizing: border-box;
    display: block;
    cursor: pointer;
    width: 48%;
    color: black;
    transition: all 0.5s;
    position: relative;
    z-index: 1;

    &:before {
        opacity: 0.2;
        position: absolute;
        left: 0;
        content: '';
        top: 0;
        width: 100%;
        height: 100%;
        background-image: ${({ src }) => `url("${src}");`};
        background-size: cover;
        background-position: center;
        z-index: -1;
    }
`

const BlogListItem = ({ post, id }: { post: BlogPost, id: string }) => {
    return (
        <BlogListItemWrapper src={`${__STATIC__}posts/${id}/${post.preview_image}`} to={`/post/${id}`}>
            <Title size="medium">{post.title}</Title>
            <Text>{post.description}</Text>
        </BlogListItemWrapper>
    )
}

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Blog = () => {
    const ListItems = useMemo(() => {
        return Object
            .keys(posts)
            .sort((a, b) => new Date(posts[a].date) < new Date(posts[b].date) ? 1 : -1)
            .map((id) => <BlogListItem key={id} id={id} post={posts[id]} />)
    }, [])

    return (
        <div>
            <List>
                {ListItems}
            </List>
        </div>
    )
}

export default Blog
