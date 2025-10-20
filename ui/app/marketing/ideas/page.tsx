import { Metadata } from 'next'

import LandingPage from './page.client'

const TITLE = 'Ideas Down'
const DESCRIPTION = 'Clear your mind and make room for your next big idea.'

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL('https://travisbumgarner.dev/marketing/ideas_down'),
    title: TITLE,
    description: DESCRIPTION,
    openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      images: [
        {
          url: 'https://travisbumgarner.dev/marketing-resources/ideas_down/og-banner.png',
          width: 1200,
          height: 630,
          alt: 'Ideas Down'
        }
      ]
    }
  }
}

export default LandingPage
