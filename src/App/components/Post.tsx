import { useEffect, useState, useCallback, useMemo } from 'react'
import styled from 'styled-components'
import { useNavigate, useParams } from 'react-router-dom'

import { LargeTitleStyles, MediumTitleStyles, SmallTitleStyles, TextStyles } from "SharedComponents"
import posts from "Posts"
import { CSSHover, TERTIARY_COLOR } from 'Theme'

const MarkdownStyles = styled.div`
    h1 {
        ${LargeTitleStyles}
    };
    h2 {
        ${MediumTitleStyles};
    };
    h3 {
        ${SmallTitleStyles};
    };
    strong {
        font-weight: 700;
        font-size: 1rem;
    }

    a {
            color: ${TERTIARY_COLOR};
            ${CSSHover};
            text-decoration: underline;
            text-decoration-thickness: from-font;

        }

    p {
        display: block;
        ${TextStyles}
    };
    ul, ol {
        li {
            margin: 0.25rem 0rem 0.25rem 1rem;
        }
    }
    ul {
        list-style: circle;
    }
    ol {
        list-style: decimal;
    }

    code {
        margin: calc(3 * 18px) 0;
        position: relative;
        border: 1px solid #979797;
        border-radius: 18px;
        font-family: "Roboto Mono",monospace;
        font-weight: 300;
        padding: 2rem;
        display: block;
        box-sizing: border-box;
        
        &:before {
            padding-bottom: 2rem;
            content: '<code>';
            color: #979797;
            font-size: calc(1rem);
            font-weight: 100;
            line-height: 0;
            display: flex;
            justify-content: start;
        }

        &:after{
            padding-top: 2rem;
            padding: 1rem 0;
            content: '</code>';
            color: #979797;
            font-size: calc(1rem);
            font-weight: 100;
            line-height: 0;
            display: flex;
            justify-content: end;
        }
    }

    time {
        font-size: 0.8rem;
    }

    p > code {
        display: inline;
        border: 0;
        padding: 0;
        border-radius: 0;
        background-color: #e2e2e2;
        
        &:before, &:after {
            content: '';
            display: inline
        }
    }

    blockquote {
        margin: calc(3 * 18px) 0;
        position: relative;
        border: 1px solid #979797;
        border-radius: 18px;
        font-family: "Roboto Mono",monospace;
        font-weight: 300;
        padding: 2rem;
        display: block;
        box-sizing: border-box;
        
        &:before {
            padding-bottom: 2rem;
            content: '<quote>';
            color: #979797;
            font-size: calc(1rem);
            font-weight: 100;
            line-height: 0;
            display: flex;
            justify-content: start;
        }

        &:after{
            padding-top: 2rem;
            padding: 1rem 0;
            content: '</quote>';
            color: #979797;
            font-size: calc(1rem);
            font-weight: 100;
            line-height: 0;
            display: flex;
            justify-content: end;
        }
    }

    figure {
        margin: 1rem 0;
    }
    
`

const Header = styled.div < { src: string }>`
    position: relative;
    height: 300px;
    margin-bottom: 2rem;

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

    div {
        position: absolute;
        left: 0;
        bottom: 0;
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

    const postDate = useMemo(() => new Date(post.date).toDateString(), [post.date])

    return (
        <MarkdownStyles>
            {/* <Header src={`${__STATIC__}/posts/${id}/${post.preview_image}`}> */}
            {/* <div> */}
            <h1>{post.title}</h1>
            <time>{postDate}</time>
            {/* </div> */}
            {/* </Header> */}
            {post.renderer()}

        </MarkdownStyles>
    )
}

export default Post
