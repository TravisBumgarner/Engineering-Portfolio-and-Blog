"use client"

import type { MDXComponents } from 'mdx/types'
 
// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 style={{color: 'red'}}>{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold mb-3">{children}</h2>
    ),
    p: ({ children }) => (
      <p className="mb-4 leading-relaxed">{children}</p>
    ),
    // Add more component styles as needed
    ...components,
  }
}