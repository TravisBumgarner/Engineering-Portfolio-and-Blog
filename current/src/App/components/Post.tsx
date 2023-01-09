import { useEffect, useState, useCallback, useMemo } from 'react'
import styled from 'styled-components'
import { useNavigate, useParams } from 'react-router-dom'

import { LargeTitleStyles, MediumTitleStyles, SmallTitleStyles, TextStyles } from "SharedComponents"
import posts from "Posts"

const MarkdownStyles = styled.div`
    h1 {
        ${LargeTitleStyles}
    };
    h2 {
        ${MediumTitleStyles}
    };
    h3 {
        ${SmallTitleStyles}
    };
    strong {
        font-weight: 400;
    }
    p {
        ${TextStyles}
        a {
            text-decoration: underline;
        }
    };
    ul, ol {
        li {
            margin-left: 1rem;
        }
    }
    ul {
        list-style: circle;
    }
    ol {
        list-style: decimal;
    }
    code {
        border: 5px solid black;
        width: 100%;
        display: block;
        box-sizing: border-box;
        padding: 1rem;
    }

    blockquote {
        border: 5px solid green;
        width: 100%;
        display: block;
        box-sizing: border-box;
        padding: 1rem;
    }
    
`

const Post = () => {
    const { id } = useParams()
    const post = useMemo(() => id ? posts[id] : null, [id])
    const navigate = useNavigate()

    if (!post) {
        navigate('/blog')
        return null
    }

    return (
        <MarkdownStyles>
            <h1>{post.title}</h1>
            <time>{post.date}</time>
            {post.renderer()}
        </MarkdownStyles>
    )
}

export default Post
