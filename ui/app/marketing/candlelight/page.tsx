import type { Metadata } from 'next'
import { CANDLELIGHT_DESCRIPTION, CANDLELIGHT_TITLE } from '../_consts'
import CandlelightPage from './page.client'

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL('https://travisbumgarner.dev/marketing/candlelight'),
    title: CANDLELIGHT_TITLE,
    description: CANDLELIGHT_DESCRIPTION,
    openGraph: {
      title: CANDLELIGHT_TITLE,
      description: CANDLELIGHT_DESCRIPTION,
      //   images: [
      //     {
      //       url: 'https://travisbumgarner.dev/marketing-resources/candlelight/og_image.png',
      //       width: 1200,
      //       height: 630,
      //       alt: 'Ideas Down'
      //     }
      //   ]
    },
  }
}

export default CandlelightPage
