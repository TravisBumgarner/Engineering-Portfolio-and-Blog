// const isDev = process.env.NODE_ENV === 'development'

export const logger = {
  // biome-ignore lint/suspicious/noExplicitAny: Fine for now.
  info: (message: string, context?: any) => {
    // biome-ignore lint/suspicious/noConsole: Fine for now.
    console.info(message, context)
    // if (isDev) {
    //   console.info(message, context)
    // } else {
    //   // Sentry.addBreadcrumb({ message, level: 'info', data: context })
    // }
  },
  // biome-ignore lint/suspicious/noExplicitAny: Fine for now.
  warn: (message: string, context?: any) => {
    // biome-ignore lint/suspicious/noConsole: Fine for now.
    console.warn(message, context)
    // if (isDev) {
    //   console.warn(message, context)
    // } else {
    //   // Sentry.captureMessage(message, 'warning')
    // }
  },
  // biome-ignore lint/suspicious/noExplicitAny: Fine for now.
  error: (message: string, error?: Error, context?: any) => {
    // biome-ignore lint/suspicious/noConsole: Fine for now.
    console.error(message, error, context)
    // if (isDev) {
    // } else {
    //   // if (error) {
    //   //   Sentry.captureException(error)
    //   // } else {
    //   //   Sentry.captureMessage(message, 'error')
    //   // }
    // }
  },
}

export default logger
