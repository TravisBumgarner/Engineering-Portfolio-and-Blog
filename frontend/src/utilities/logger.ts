import * as Sentry from '@sentry/react'

export const logger = {
  // biome-ignore lint/suspicious/noExplicitAny: Fine for now.
  info: (message: string, context?: any) => {
    // biome-ignore lint/suspicious/noConsole: Fine for now.
    console.info(message, context)
  },
  // biome-ignore lint/suspicious/noExplicitAny: Fine for now.
  warn: (message: string, context?: any) => {
    // biome-ignore lint/suspicious/noConsole: Fine for now.
    console.warn(message, context)
  },
  // biome-ignore lint/suspicious/noExplicitAny: Fine for now.
  error: (message: string, error?: Error | unknown, context?: any) => {
    // biome-ignore lint/suspicious/noConsole: Fine for now.
    console.error(message, error, context)
    if (import.meta.env.PROD) {
      if (error) {
        Sentry.captureException(error)
      } else {
        Sentry.captureMessage(message, 'error')
      }
    }
  },
}

export default logger
