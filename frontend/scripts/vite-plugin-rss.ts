import { writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import type { Plugin, ViteDevServer } from 'vite'
import { posts } from '../../common/src/posts'

const SITE_URL = 'https://travisbumgarner.dev'

function generateRSSItem(slug: string, post: { title: string; date: string; description?: string }): string {
  return `
  <item>
    <title><![CDATA[${post.title}]]></title>
    <link>${SITE_URL}/blog/${slug}</link>
    <guid>${SITE_URL}/blog/${slug}</guid>
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    <description><![CDATA[${post.description || ''}]]></description>
  </item>`
}

function generateRSS(): string {
  const sortedEntries = Object.entries(posts).sort(
    ([, a], [, b]) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  const items = sortedEntries.map(([slug, post]) => generateRSSItem(slug, post)).join('')

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Travis Bumgarner's Blog</title>
    <link>${SITE_URL}</link>
    <description>Engineering, photography, and everything in between</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>${items}
  </channel>
</rss>
`
}

export function rssPlugin(): Plugin {
  let outputPath: string

  async function generate() {
    const rss = generateRSS()
    await writeFile(outputPath, rss)
    console.log('[rss] Generated rss.xml')
  }

  return {
    name: 'vite-plugin-rss',

    configResolved(config) {
      outputPath = resolve(config.publicDir, 'rss.xml')
    },

    async buildStart() {
      await generate()
    },

    configureServer(server: ViteDevServer) {
      const postsFile = resolve(__dirname, '../../common/src/posts.ts')
      server.watcher.add(postsFile)

      server.watcher.on('change', async (filePath: string) => {
        if (filePath === postsFile) {
          console.log('[rss] posts.ts changed, regenerating...')
          await generate()
        }
      })
    },
  }
}
