import { useEffect, useState, useCallback, useMemo } from 'react'
import { Markdown } from 'SharedComponents'

import blogPosts, { BlogPost } from "./content"

const BlogPost = ({ post }: { post: BlogPost }) => {
    return (
        <Markdown children={post.content} />
    )
}

const Blog = () => {
    const [markdownPath, setMarkdownPath] = useState<string | null>(null)

    const handleClick = useCallback((markdownPath: string) => {
        setMarkdownPath(markdownPath)
    }, [])

    const ListItems = useMemo(() => {
        return blogPosts.map(post => <p>{post.title}</p>)
    }, [])

    return (
        <div>
            <ul>
                {ListItems}
            </ul>
            <BlogPost post={blogPosts[0]} />
        </div>
    )
}

export default Blog
