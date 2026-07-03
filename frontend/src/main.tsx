import posthog from 'posthog-js'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/globals.css'

if (import.meta.env.PROD) {
  posthog.init('phc_tFX3Eygr8Eq9Dz5fEQayTzx2uiykLMPcGdQvh46sB8Rg', {
    api_host: 'https://us.i.posthog.com',
    defaults: '2025-05-24',
  })
}

// biome-ignore lint/style/noNonNullAssertion: This is expected with React.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
