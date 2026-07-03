import { PostHog } from 'posthog-node'

const isProduction = process.env.NODE_ENV === 'production'

const posthog = new PostHog('phc_tFX3Eygr8Eq9Dz5fEQayTzx2uiykLMPcGdQvh46sB8Rg', {
  host: 'https://us.i.posthog.com',
  flushAt: 1,
})

export const logger = {
  error: (message: string, error?: Error) => {
    // biome-ignore lint/suspicious/noConsole: For logging only.
    isProduction ? posthog.captureException(error ?? new Error(message)) : console.error(message, error)
  },
  info: (message: string) => {
    // biome-ignore lint/suspicious/noConsole: For logging only.
    isProduction
      ? posthog.capture({ distinctId: 'server', event: 'server_info', properties: { message } })
      : console.log(message)
  },
}
