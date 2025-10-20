import * as Sentry from '@sentry/nextjs'

const isDev = process.env.NODE_ENV === 'development'

export const logger = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  info: (message: string, context?: any) => {
    if (isDev) {
      console.info(message, context)
    } else {
      Sentry.addBreadcrumb({ message, level: 'info', data: context })
    }
  },

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  warn: (message: string, context?: any) => {
    if (isDev) {
      console.warn(message, context)
    } else {
      Sentry.captureMessage(message, 'warning')
    }
  },

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: (message: string, error?: Error, context?: any) => {
    if (isDev) {
      console.error(message, error, context)
    } else {
      if (error) {
        Sentry.captureException(error)
      } else {
        Sentry.captureMessage(message, 'error')
      }
    }
  }
}

export default logger
