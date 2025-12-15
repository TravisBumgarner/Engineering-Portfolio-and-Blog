import { Navigate, useParams } from "react-router-dom"
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import posts from '../content/posts'
import Subscribe from './Blog/Subscribe'
import ROUTES from "../routes"


const loadPost = async (fileName: string) => {
    const postModule = await posts[fileName]
    return postModule.default // Assuming the default export is the MDX component
}

// type Params = Promise<{ id: string }>

// export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
//     const { id } = await params


//     if (!post) {
//         return {
//             title: 'Post Not Found',
//             description: 'The requested blog post could not be found',
//         }
//     }

//     return {
//         metadataBase: new URL('https://travisbumgarner.dev'),
//         title: `${post.title} - Travis Bumgarner`,
//         description: post.description || 'A blog post by Travis Bumgarner',
//         openGraph: {
//             images: [`/post-resources/${id}/${post.preview_image}`],
//         },
//     }
// }

const BlogPost = async () => {
    const { id } = await useParams()
    if (!id) {
        return <Navigate to={ROUTES.NOT_FOUND.href} />
    }

    const post = posts[id]
    if (!post) {
        return
    }
    const Component = await loadPost(id)

    return (
        <Box>
            <Typography variant="h2">{post.title}</Typography>

            <time>Posted {new Date(post.date + 'T00:00:00Z').toUTCString().split(' ').slice(0, 4).join(' ')}</time>

            <Component />

            <Subscribe />
        </Box>
    )
}

export default BlogPost
