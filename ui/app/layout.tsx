import ClientLayout from '@/lib/client-layout'
import StyledComponentsRegistry from '@/lib/styled-components-registry'
import { makeNewSiteTitle } from '@/lib/utilities'
import { GoogleAnalytics } from '@next/third-parties/google'
import { ReactNode } from 'react'
import SiteTitle from './_components/SiteTitle'

import type { Metadata } from 'next'
import Sidebar from './_components/Sidebar'

export const metadata: Metadata = {
  metadataBase: new URL('https://travisbumgarner.dev'),
  title: 'Travis Bumgarner',
  description:
    'I am a lifelong learner, creator, explorer, and tinkerer. This is a collection of my experiences.',
  openGraph: {
    images: ['/me.png']
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const title = makeNewSiteTitle()
  return (
    <html lang="en">
      <head>
        <style>
          {/* eslint-disable-next-line */}
          @import
          url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap');
        </style>

        <link rel="icon" href="/favicon.png" />
        <GoogleAnalytics gaId="G-67RM7JF6TY" />
      </head>
      <body>
        <StyledComponentsRegistry>
          <ClientLayout>
            <Sidebar />
            <div>
              <SiteTitle title={title} />
              {children}
            </div>
          </ClientLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
