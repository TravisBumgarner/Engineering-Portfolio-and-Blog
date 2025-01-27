import ClientLayout from '@/lib/client-layout'
import StyledComponentsRegistry from '@/lib/styled-components-registry'
import { makeNewSiteTitle } from '@/lib/utilities'
import { GoogleAnalytics } from '@next/third-parties/google'
import { ReactNode } from 'react'
import SiteTitle from './_components/SiteTitle'

import type { Metadata } from 'next'
import Sidebar from './_components/Sidebar'
import { AppWrapper, BodyWrapper } from './layout.client'

export const metadata: Metadata = {
  metadataBase: new URL("https://travisbumgarner.dev"),
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
        @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap');
      </style>


        <link rel="icon" href="/favicon.png" />
        <GoogleAnalytics gaId="G-67RM7JF6TY" />
      </head>
      <body>
        <StyledComponentsRegistry>
          <AppWrapper>
            <ClientLayout>
              <SiteTitle title={title} />
              <BodyWrapper>
                <Sidebar />
                {children}
              </BodyWrapper>
            </ClientLayout>
          </AppWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
