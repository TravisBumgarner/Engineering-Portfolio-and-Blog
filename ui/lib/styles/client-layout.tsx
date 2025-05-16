'use client'

import { ReactNode } from 'react'
import { GlobalReset, GlobalStyle, GlobalFonts } from './theme'
export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <GlobalFonts />
      <GlobalReset />
      <GlobalStyle />
      {children}
    </>
  )
}
