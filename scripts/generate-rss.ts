import fs from 'fs'
import path from 'path'

const SITE_URL = 'https://travisbumgarner.dev'
const POSTS_DIRECTORY = path.join(process.cwd(), '../ui/content/posts')
console.log(POSTS_DIRECTORY)

interface Post {
  title: string
  date: string
  slug: string
  content: string
  description?: string
}

const generateRSSItem = (post: Post): string => `
  <item>
    <title><![CDATA[${post.title}]]></title>
    <link>${SITE_URL}/blog/${post.slug}</link>
    <guid>${SITE_URL}/blog/${post.slug}</guid>
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    <description><![CDATA[${post.description || ''}]]></description>
  </item>
`

const generateRSS = (
  posts: Post[]
): string => `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Travis Bumgarner's Blog</title>
    <link>${SITE_URL}</link>
    <description>Engineering, photography, and everything in between</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
    ${posts.map(generateRSSItem).join('')}
  </channel>
</rss>
`

const getPosts = (): Post[] => {
  const postMetadata = JSON.parse(
    fs.readFileSync(path.join(POSTS_DIRECTORY, 'index.json'), 'utf8')
  )
  console.log(postMetadata)
  return Object.keys(postMetadata)
    .map(file => {
      const data = postMetadata[file]

      if (!data.title || !data.date) {
        console.error(`Missing title or date in file: ${file}`)
        return null
      }

      return {
        title: data.title,
        date: data.date,
        slug: file.replace(/\.mdx$/, ''),
        content: '', // Assuming content is not needed for RSS
        description: data.description || ''
      }
    })
    .filter(post => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

const main = () => {
  const posts = getPosts()
  const rss = generateRSS(posts)
  fs.writeFileSync('../ui/public/rss.xml', rss)
  console.log('RSS feed generated successfully!')
}

main()
