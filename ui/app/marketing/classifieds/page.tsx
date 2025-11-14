import { Metadata } from 'next'

import LandingPage from './page.client'

const TITLE = 'Fast Classifieds - AI Job Search Assistant'
const DESCRIPTION =
  'Stop manually browsing job boards. Let AI scan company career pages and find the most relevant opportunities for you.'

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL(
      'https://travisbumgarner.dev/marketing/fast-classifieds'
    ),
    title: TITLE,
    description: DESCRIPTION,
    openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      images: [
        {
          url: 'https://travisbumgarner.dev/marketing-resources/fast-classifieds/og-banner.png',
          width: 1200,
          height: 630,
          alt: 'Fast Classifieds - Browse company job boards quickly.'
        }
      ]
    }
  }
}

export default LandingPage
