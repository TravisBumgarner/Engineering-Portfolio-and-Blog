// "use client"

// import posts, { postMappings } from '@/app/_content/posts'
// import Header from '@/app/_sharedComponents/Header'
// import InternalLink from '@/app/_sharedComponents/InternalLink'
// import ROUTES from '@/lib/routes'
// import { MDXProvider } from '@mdx-js/react'

// import { MarkdownStyles } from './_page.client'

// const loadPost = async (fileName: keyof typeof postMappings) => {
//   const postModule = await postMappings[fileName]()
//   return postModule.default // Assuming the default export is the MDX component
// }

// const Post = async ({ params }: { params: { id: string } }) => {
//   const { id } = await params
//   const post = posts[id]
//   const Component = await loadPost(post.postMapping)

//   return (
//     <MarkdownStyles>
//       <Header size="large">
//         <InternalLink to={ROUTES.BLOG.path}>Blog://</InternalLink> {post.title}
//       </Header>
//       <time>{new Date(post.date).toDateString()}</time>
//       <MDXProvider>
//         <Component />
//       </MDXProvider>
//     </MarkdownStyles>
//   )
// }

// export default Post
