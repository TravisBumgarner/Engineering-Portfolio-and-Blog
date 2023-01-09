import { useEffect, useState, useCallback, useMemo } from 'react'
import styled from 'styled-components'

import blogPosts, { BlogPost } from "./content"

import { LargeTitleStyles, MediumTitleStyles, SmallTitleStyles, TextStyles } from "SharedComponents"


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
    p {
        ${TextStyles}
        a {
            text-decoration: underline;
        }
        strong {
            font-weight: 400;
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

const BlogListItem = ({ post, setSelectedPost }: { post: BlogPost, setSelectedPost: () => void }) => {
    return (
        <li key={post.title}>{post.title} <button onClick={setSelectedPost}> Pick me</button></li>
    )
}


const Blog = () => {
    const [selectedPost, setSelectedPost] = useState<number | null>(null)

    const ListItems = useMemo(() => {
        return blogPosts.map((post, index) => <BlogListItem post={post} setSelectedPost={() => setSelectedPost(index)} />)
    }, [])

    const Post = useMemo(() => {
        if (selectedPost === null) return <p>Select a post</p>
        const { renderer, title, date } = blogPosts[selectedPost]
        return (
            <MarkdownStyles>
                <h1>{title}</h1>
                <time>{date}</time>
                {renderer()}
            </MarkdownStyles>
        )
    }, [selectedPost])

    return (
        <div>
            <ul>
                {ListItems}
            </ul>
            {Post}
        </div>
    )
}

export default Blog
