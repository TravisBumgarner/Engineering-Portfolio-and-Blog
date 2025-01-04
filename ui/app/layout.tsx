import ClientLayout from '@/lib/client-layout'
import StyledComponentsRegistry from '@/lib/styled-components-registry'
import { makeNewSiteTitle } from '@/lib/utilities'
import { ReactNode } from 'react'
import SiteTitle from './_components/SiteTitle'

import type { Metadata } from 'next'
import Sidebar from './_components/Sidebar'
import { AppWrapper, BodyWrapper } from './layout.client'

export const metadata: Metadata = {
  title: 'Travis Bumgarner',
  description:
    'I am a lifelong learner, creator, explorer, and tinkerer. This is a collection of my experiences.',
  openGraph: {
    images: ['https://storage.googleapis.com/eng42-asdsad/public/me.png']
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const title = makeNewSiteTitle()
  return (
    <html lang="en">
      <head>
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
      </style>

        <link rel="icon" href="/favicon.png" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-67RM7JF6TY"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || []
            function gtag() {
              dataLayer.push(arguments)
            }
            gtag('js', new Date())

            gtag('config', 'G-67RM7JF6TY')
      `}
        </script>
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
