import { ErrorBoundary, init as sentryInit } from '@sentry/react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import { Error } from './sharedComponents'

if (__IS_PRODUCTION__) {
  sentryInit({
    dsn: 'https://96b0481bcf204abfaec06fb7ffc59ed8@sentry.io/1315175'
  })
}

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
  <ErrorBoundary fallback={<Error />}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ErrorBoundary>
)
