import { Markdown } from 'SharedComponents'

const content = `
# Hello WOrldl.
## Hello WOrldl.

`

const Blog = () => {

    return (
        <Markdown>{content}</Markdown>
    )
}

export default Blog
