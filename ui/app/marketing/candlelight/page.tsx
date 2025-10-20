import { Metadata } from 'next'
import CandlelightPage from './page.client'

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL('https://travisbumgarner.dev/marketing/candlelight'),
    title: `Candlelight`,
    description: 'A Puzzle Game of Shape, Color, and Alchemy',
    openGraph: {
      title: 'Candlelight',
      description: 'A Puzzle Game of Shape, Color, and Alchemy'
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
