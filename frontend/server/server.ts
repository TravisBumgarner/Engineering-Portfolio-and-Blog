import * as Sentry from '@sentry/node'
import type { Request, Response } from 'express'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import { ABOUT_ME_SENTENCE_1, ABOUT_ME_SENTENCE_2 } from '../common/dist/index.js'

Sentry.init({
  dsn: "https://bcd547c832cb7bbb68cea814aa198f5d@o196886.ingest.us.sentry.io/4510551525949440",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
const port = process.env.PORT || 3000

const frontendDist = path.join(__dirname, 'dist-web')
app.set('view engine', 'ejs')
app.set('views', frontendDist)

// Serve static assets first
app.use('/assets', express.static(path.join(frontendDist, 'assets')))
app.use('/public', express.static(frontendDist)) // serve everything in dist, including og.png and favicon.png

const BASE_TITLE = 'Travis Bumgarner'
const BASE_DESCRIPTION = `${ABOUT_ME_SENTENCE_1} ${ABOUT_ME_SENTENCE_2}`
// const BASE_IMAGE = 'https://photopalettes.com/public/og.png'
const BASE_URL = 'https://travisbumgarner.dev'

app.get('/health-check', (_req: Request, res: Response) => {
  res.status(200).send('OK!')
})

// Match only non file routes.
app.get(/^\/(?!.*\.[a-zA-Z0-9]+$).*/, async (_req, res) => {
  try {
    res.render('index', { ogTitle: BASE_TITLE, ogDescription: BASE_DESCRIPTION, ogUrl: BASE_URL })
  } catch (error) {
    Sentry.captureException(error)
    res.render('index', {
      ogTitle: BASE_TITLE,
      ogDescription: BASE_DESCRIPTION,
      ogUrl: BASE_URL,
    })
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