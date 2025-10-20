import { Metadata } from 'next'

import LandingPage from './page.client'

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL('https://travisbumgarner.dev/marketing/ideas_down'),
    title: `Ideas Down`,
    description: 'Clear your mind and make room for your next big idea.',
    openGraph: {
      title: 'Ideas Down',
      description: 'Clear your mind and make room for your next big idea.',
      images: [
        {
          url: 'https://travisbumgarner.dev/marketing-resources/ideas_down/og_image.png',
          width: 1200,
          height: 630,
          alt: 'Ideas Down'
        }
      ]
    }
  }
}

export default LandingPage
