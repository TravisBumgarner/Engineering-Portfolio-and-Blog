import ClientLayout from '@/lib/styles/client-layout'
import StyledComponentsRegistry from '@/lib/styles/styled-components-registry'
import { makeNewSiteTitle } from '@/lib/utilities'
import { GoogleAnalytics } from '@next/third-parties/google'
import { ReactNode } from 'react'
import SiteTitle from './_components/SiteTitle'

import {
  ABOUT_ME_SENTENCE_1,
  ABOUT_ME_SENTENCE_2,
  SITE_TITLE
} from '@/lib/consts'
import type { Metadata } from 'next'
import Scroll from './_components/Scroll'
import Sidebar from './_components/Sidebar'
import { BodyWrapper } from './_layout.client'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import AppThemeProvider from '@/lib/styles/ThemeMUI'

export const metadata: Metadata = {
  metadataBase: new URL('https://travisbumgarner.dev'),
  title: SITE_TITLE,
  description: `${ABOUT_ME_SENTENCE_1} ${ABOUT_ME_SENTENCE_2}`,
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
          {/* eslint-disable react/no-unescaped-entities */}
          @import
          url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap');
          {/* eslint-enable react/no-unescaped-entities */}
        </style>
        <link rel="icon" href="/favicon.png" />
        <GoogleAnalytics gaId="G-67RM7JF6TY" />
      </head>
      <Scroll />
      <body>
        <AppRouterCacheProvider>
          <AppThemeProvider>
            <StyledComponentsRegistry>
              <ClientLayout>
                <Sidebar />
                <BodyWrapper>
                  <SiteTitle title={title} />
                  {children}
                </BodyWrapper>
              </ClientLayout>
            </StyledComponentsRegistry>
          </AppThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
