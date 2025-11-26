import type { Metadata } from 'next'
import { FAST_CLASSIFIEDS_DESCRIPTION, FAST_CLASSIFIEDS_TITLE } from './_consts'
import LandingPage from './page.client'

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL('https://travisbumgarner.dev/marketing/fast-classifieds'),
    title: FAST_CLASSIFIEDS_TITLE,
    description: FAST_CLASSIFIEDS_DESCRIPTION,
    openGraph: {
      title: FAST_CLASSIFIEDS_TITLE,
      description: FAST_CLASSIFIEDS_DESCRIPTION,
    },
  }
}

export default LandingPage
