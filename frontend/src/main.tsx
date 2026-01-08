import * as Sentry from '@sentry/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/globals.css'

if (import.meta.env.PROD) {
  Sentry.init({
    dsn: 'https://70a85f691dc27fc54bcdd73ca86849a0@o196886.ingest.us.sentry.io/4510540755173376',
    // Setting this option to true will send default PII data to Sentry.
    // For example, automatic IP address collection on events
    sendDefaultPii: true,
  })
}

// biome-ignore lint/style/noNonNullAssertion: This is expected with React.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
