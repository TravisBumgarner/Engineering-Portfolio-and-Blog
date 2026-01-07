import { ABOUT_ME, SITE_OG_IMAGE, SITE_TITLE, SITE_URL } from '@common/core'
import * as Sentry from '@sentry/node'
import type { Request, Response } from 'express'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import { getOgContentFromParts } from './og-content'

const SITE_OG_TAGS = {
  title: SITE_TITLE,
  ogTitle: SITE_TITLE,
  ogDescription: ABOUT_ME,
  ogUrl: SITE_URL,
  ogImage: SITE_OG_IMAGE,
}

Sentry.init({
  dsn: 'https://bcd547c832cb7bbb68cea814aa198f5d@o196886.ingest.us.sentry.io/4510551525949440',
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
})

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
const port = process.env.PORT || 3000

const frontendDist = path.join(__dirname, 'frontend-dist')
console.log(`Serving frontend from ${frontendDist}`)
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
    Sentry.captureException(error)
    res.render('index', SITE_OG_TAGS)
  }
})

// The error handler must be registered before any other error middleware and after all controllers
Sentry.setupExpressErrorHandler(app)

// Fallthrough error handler
app.use(function onError(_err: unknown, _req: unknown, res: Response, _next: unknown) {
  // The error id is attached to `res.sentry` to be returned
  // and optionally displayed to the user for support.
  console.log(_err)
  res.sendStatus(500)
})

app.listen(port, () => {
  // biome-ignore lint/suspicious/noConsole: This is fine.
  console.log(`Server running on port ${port}`)
})
