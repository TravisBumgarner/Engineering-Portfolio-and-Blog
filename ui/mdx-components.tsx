import { List, ListItem, Typography } from '@mui/material'
import type { MDXComponents } from 'mdx/types'
import Link from './lib/sharedComponents/Link'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children, ...props }) => {
      const { ref: _ref, ...restProps } = props
      return (
        <Typography variant="h1" component="h1" {...restProps}>
          {children}
        </Typography>
      )
    },
    h2: ({ children, ...props }) => {
      const { ref: _ref, ...restProps } = props
      return (
        <Typography variant="h2" component="h2" {...restProps}>
          {children}
        </Typography>
      )
    },
    h3: ({ children, ...props }) => {
      const { ref: _ref, ...restProps } = props
      return (
        <Typography variant="h3" component="h3" {...restProps}>
          {children}
        </Typography>
      )
    },
    h4: ({ children, ...props }) => {
      const { ref: _ref, ...restProps } = props
      return (
        <Typography variant="h4" component="h4" {...restProps}>
          {children}
        </Typography>
      )
    },
    p: ({ children, ...props }) => {
      const { ref: _ref, ...restProps } = props
      return (
        <Typography variant="body1" component="p" {...restProps}>
          {children}
        </Typography>
      )
    },
    ul: ({ children, ...props }) => {
      const { ref: _ref, ...restProps } = props
      return <List {...restProps}>{children}</List>
    },
    ol: ({ children, ...props }) => {
      const { ref: _ref, ...restProps } = props
      return (
        <List component="ol" {...restProps}>
          {children}
        </List>
      )
    },
    li: ({ children, ...props }) => {
      const { ref: _ref, ...restProps } = props
      return <ListItem {...restProps}>{children}</ListItem>
    },
    a: ({ children, href, ...props }) => {
      const { ref: _ref, ...restProps } = props
      return (
        <Link href={href || '#'} {...restProps} type="inline">
          {children}
        </Link>
      )
    },
  }
}
