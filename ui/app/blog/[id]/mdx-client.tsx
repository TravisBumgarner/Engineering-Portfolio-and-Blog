"use client"

import { MDXProvider } from '@mdx-js/react'
import { useMDXComponents } from '../../../mdx-components'
import Test from './_hello.mdx'

export default function MDXClient() {
  const components = useMDXComponents({})
  return (
    <MDXProvider components={components}>
      <Test />
    </MDXProvider>
  )
} 