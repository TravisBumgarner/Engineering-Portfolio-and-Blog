import posts from '@/content/posts'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Subscribe from '../Subscribe'
import ContentStyler from '@/app/_sharedComponents/ContentStyler'

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
    metadataBase: new URL('https://travisbumgarner.dev'),
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
    <ContentStyler>
      <h2>{post.title}</h2>
      <time>
        Posted{' '}
        {new Date(post.date + 'T00:00:00Z')
          .toUTCString()
          .split(' ')
          .slice(0, 4)
          .join(' ')}
      </time>
      <Component />
      <Subscribe />
    </ContentStyler>
  )
}

export default Post
