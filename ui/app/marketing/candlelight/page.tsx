import { Metadata } from 'next'
import CandlelightPage from './page.client'

const TITLE = 'Candlelight'
const DESCRIPTION = 'A Puzzle Game of Shape, Color, and Alchemy'

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL('https://travisbumgarner.dev/marketing/candlelight'),
    title: TITLE,
    description: DESCRIPTION,
    openGraph: {
      title: TITLE,
      description: DESCRIPTION
      //   images: [
      //     {
      //       url: 'https://travisbumgarner.dev/marketing-resources/candlelight/og_image.png',
      //       width: 1200,
      //       height: 630,
      //       alt: 'Ideas Down'
      //     }
      //   ]
    }
  }
}

export default CandlelightPage
