import { useEffect, useState, useCallback, useMemo } from 'react'
import { Markdown } from 'SharedComponents'

import blogPosts, { BlogPost } from "./content"

// const BlogPost = ({ post }: { post: BlogPost }) => {
//     return (
//     )
// }

const Blog = () => {
    const [markdownPath, setMarkdownPath] = useState<string | null>(null)

    const handleClick = useCallback((markdownPath: string) => {
        setMarkdownPath(markdownPath)
    }, [])

    const ListItems = useMemo(() => {
        return blogPosts.map(post => <p key={post.title}>{post.title}</p>)
    }, [])
    return (
        <div>
            <ul>
                {ListItems}
            </ul>
            {/* <BlogPost post={blogPosts[0]} /> */}
            {blogPosts[0].renderer()}
        </div>
    )
}

export default Blog
