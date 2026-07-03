import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { ABOUT_ME, SITE_OG_IMAGE, SITE_TITLE, SITE_URL } from '@common/core'
import type { Request, Response } from 'express'
import express from 'express'
import { getOgContentFromParts } from './og-content.js'
import { logger } from './utilities.js'

const SITE_OG_TAGS = {
  title: SITE_TITLE,
  ogTitle: SITE_TITLE,
  ogDescription: ABOUT_ME,
  ogUrl: SITE_URL,
  ogImage: SITE_OG_IMAGE,
}

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
const port = Number(process.env.PORT) || 3000

const frontendDist = path.join(__dirname, '..', 'frontend-dist')

app.set('view engine', 'ejs')
app.set('views', frontendDist)

// Serve static assets first
app.use('/assets', express.static(path.join(frontendDist, 'assets')))
app.use(express.static(frontendDist)) // serve everything in dist, including og.png and favicon.png

app.get('/health-check', (_req: Request, res: Response) => {
  res.status(200).send('OK!')
})

// Match only non file routes.
app.get(/^\/(?!.*\.[a-zA-Z0-9]+$).*/, async (_req, res) => {
  const routeParts = _req.path.split('/').filter(Boolean)
  const ogData = getOgContentFromParts(routeParts)

  if (!ogData) {
    res.render('index', SITE_OG_TAGS)
    return
  }

  try {
    res.render('index', {
      title: ogData['og:title'],
      ogTitle: ogData['og:title'],
      ogDescription: ogData['og:description'],
      ogImage: ogData['og:image'],
      ogUrl: `${SITE_URL}${_req.path}`,
    })
  } catch (error) {
    logger.error('OG render failed', error as Error)
    res.render('index', SITE_OG_TAGS)
  }
})

// Fallthrough error handler
app.use(function onError(_err: unknown, _req: unknown, res: Response, _next: unknown) {
  logger.error('Unhandled error', _err as Error)
  res.sendStatus(500)
})

app.listen(port, '127.0.0.1', () => {
  // biome-ignore lint/suspicious/noConsole: This is fine.
  console.log(`Server running on port ${port}`)
})
