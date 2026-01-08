import * as Sentry from '@sentry/node'

const isProduction = process.env.NODE_ENV === 'production'

export const logger = {
  error: (message: string, error?: Error) => {
    // biome-ignore lint/suspicious/noConsole: For logging only.
    isProduction ? Sentry.captureException(error || new Error(message)) : console.error(message, error)
  },
  info: (message: string) => {
    // biome-ignore lint/suspicious/noConsole: For logging only.
    isProduction ? Sentry.captureMessage(message) : console.log(message)
  },
}
