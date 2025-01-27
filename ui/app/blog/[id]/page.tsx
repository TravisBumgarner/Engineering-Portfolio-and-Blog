import Link from '@/app/_sharedComponents/Link'
import posts from '@/content/posts'
import { MAX_CONTENT_WIDTH } from '@/lib/consts'
import ROUTES from '@/lib/routes'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

const loadPost = async (postId: string) => {
  const postModule = await import(`@/content/posts/${postId}.mdx`)
  return postModule.default // Assuming the default export is the MDX component
}

type Params = Promise<{ id: string }>

export async function generateMetadata({
  params
}: {
  params: Params
}): Promise<Metadata> {
  const { id } = await params
  const post = posts[id]

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found'
    }
  }

  return {
    title: `${post.title} - Travis Bumgarner`,
    description: post.description || 'A blog post by Travis Bumgarner',
    openGraph: {
      images: [`/post-resources/${id}/${post.preview_image}`]
    }
  }
}

const Post = async ({ params }: { params: Params }) => {
  const { id } = await params
  const post = posts[id]
  if (!post) {
    return notFound()
  }
  const Component = await loadPost(id)

  return (
    <div style={{ maxWidth: MAX_CONTENT_WIDTH, margin: '0px auto' }}>
      <h1>
        <Link to={ROUTES.BLOG.path}>Blog://</Link> {post.title}
      </h1>
      <time>{new Date(post.date).toDateString()}</time>
      <Component />
    </div>
  )
}

export default Post
