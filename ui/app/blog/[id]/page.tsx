import Link from '@/app/_sharedComponents/Link'
import posts, { postMappings } from '@/content/posts'
import { MAX_CONTENT_WIDTH } from '@/lib/consts'
import ROUTES from '@/lib/routes'
import { notFound } from 'next/navigation'

const loadPost = async (fileName: keyof typeof postMappings) => {
  const postModule = await postMappings[fileName]()
  return postModule.default // Assuming the default export is the MDX component
}

const Post = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  const post = posts[id]
  if(!post){
    return notFound()
  }
  const Component = await loadPost(post.postMapping as keyof typeof postMappings)


  return (
    <div style={{maxWidth: MAX_CONTENT_WIDTH, margin: '0px auto'}}>
      <h1>
        <Link to={ROUTES.BLOG.path}>Blog://</Link> {post.title}
      </h1>
      <time>{new Date(post.date).toDateString()}</time>
      <Component />
    </div>
  )
}

export default Post
