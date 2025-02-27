import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import RSS from 'rss'

const SITE_URL = 'https://travisrbumgarner.com'
const POSTS_DIRECTORY = path.join(process.cwd(), 'content/posts')

interface Post {
  title: string
  date: string
  slug: string
  content: string
  description?: string
}

const getPosts = (): Post[] => {
  const postFiles = fs.readdirSync(POSTS_DIRECTORY)

  return postFiles
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const fullPath = path.join(POSTS_DIRECTORY, file)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        title: data.title,
        date: data.date,
        slug: file.replace(/\.md$/, ''),
        content,
        description: data.description
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

const main = () => {
  const feed = new RSS({
    title: "Travis Bumgarner's Blog",
    description: 'Engineering, photography, and everything in between',
    feed_url: `${SITE_URL}/rss.xml`,
    site_url: SITE_URL,
    language: 'en',
    pubDate: new Date().toUTCString()
  })

  const posts = getPosts()
  posts.forEach(post => {
    feed.item({
      title: post.title,
      description: post.description || '',
      url: `${SITE_URL}/blog/${post.slug}`,
      guid: `${SITE_URL}/blog/${post.slug}`,
      date: new Date(post.date)
    })
  })

  fs.writeFileSync('public/rss.xml', feed.xml({ indent: true }))
  console.log('RSS feed generated successfully!')
}

main()
