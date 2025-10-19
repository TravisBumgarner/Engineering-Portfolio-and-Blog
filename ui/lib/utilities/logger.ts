import * as Sentry from '@sentry/nextjs'

const isDev = process.env.NODE_ENV === 'development'

export const logger = {
  info: (message: string, context?: any) => {
    if (isDev) {
      console.info(message, context)
    } else {
      Sentry.addBreadcrumb({ message, level: 'info', data: context })
    }
  },

  warn: (message: string, context?: any) => {
    if (isDev) {
      console.warn(message, context)
    } else {
      Sentry.captureMessage(message, 'warning')
    }
  },

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
