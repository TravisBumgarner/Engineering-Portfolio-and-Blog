import posthog from 'posthog-js'

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
      posthog.captureException(error ?? new Error(message), context)
    }
  },
}

export default logger
