import { useEffect, useState, useCallback, useMemo } from 'react'

import blogPosts, { BlogPost } from "./content"

const Blog = () => {
    const [selectedPost, setSelectedPost] = useState<number | null>(null)

    const ListItems = useMemo(() => {
        return blogPosts.map((post, index) => <div key={post.title}>{post.title} <button onClick={() => setSelectedPost(index)}> Pick me</button></div>)
    }, [])
    return (
        <div>
            <ul>
                {ListItems}
            </ul>
            {selectedPost !== null ? blogPosts[selectedPost].renderer() : 'Select a post'}
        </div>
    )
}

export default Blog
