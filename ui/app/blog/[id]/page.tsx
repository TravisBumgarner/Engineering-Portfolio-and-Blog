import posts, { postMappings } from '@/app/_content/posts'
import Header from '@/app/_sharedComponents/Header'
import Link from '@/app/_sharedComponents/Link'
import ROUTES from '@/lib/routes'
import './page.css'

const loadPost = async (fileName: keyof typeof postMappings) => {
  const postModule = await postMappings[fileName]()
  return postModule.default // Assuming the default export is the MDX component
}

const Post = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  const post = posts[id]
  const Component = await loadPost(post.postMapping as keyof typeof postMappings)

  return (
    <div>
      <Header size="large">
        <Link to={ROUTES.BLOG.path}>Blog://</Link> {post.title}
      </Header>
      <time>{new Date(post.date).toDateString()}</time>
      <Component />
    </div>
  )
}

export default Post
