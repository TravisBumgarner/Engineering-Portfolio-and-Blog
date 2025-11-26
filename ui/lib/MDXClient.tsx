"use client"

import { MDXProvider } from "@mdx-js/react"
import { mdxComponents } from "./mdxLibrary"

export default function MDXClient({ children }: { children: React.ReactNode }) {
    return <MDXProvider components={mdxComponents}>{children}</MDXProvider>
}