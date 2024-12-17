import { BORDER_COLOR, PRIMARY_COLOR, SPACING } from '@/lib/theme';
import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 style={{ fontSize: '1.6rem', color: PRIMARY_COLOR, margin: '0', fontWeight: 700 }}>
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 style={{ fontSize: '1.4rem', color: PRIMARY_COLOR, margin: `${SPACING.MEDIUM}px 0`, fontWeight: 400 }}>
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 style={{ fontSize: '1.2rem', color: PRIMARY_COLOR, margin: `${SPACING.MEDIUM}px 0`, fontWeight: 400 }}>
        {children}
      </h3>
    ),
    strong: ({ children }) => (
      <strong style={{ fontWeight: 700, fontSize: '1rem' }}>
        {children}
      </strong>
    ),
    a: ({ children, href }) => (
      <a
        href={href}
        style={{
          fontWeight: 100,
          color: PRIMARY_COLOR,
          textDecoration: 'underline',
          transition: 'color 0.3s',
        }}
      >
        {children}
      </a>
    ),
    p: ({ children }) => (
      <p style={{ display: 'block', margin: `${SPACING.SMALL}px 0`, fontWeight: 300 }}>
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul style={{ listStyle: 'circle', marginBottom: '1rem' }}>
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol style={{ listStyle: 'decimal' }}>
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li style={{ margin: '0.25rem 0 0.25rem 1rem' }}>
        {children}
      </li>
    ),
    code: ({ children }) => (
      <code
        style={{
          position: 'relative',
          fontSize: '1rem',
          border: `1px solid ${BORDER_COLOR}`,
          fontFamily: "'Roboto Mono', monospace",
          fontWeight: 100,
          display: 'block',
          boxSizing: 'border-box',
          padding: `${SPACING.MEDIUM}px`,
          margin: `${SPACING.MEDIUM}px 0`,
        }}
      >
        {children}
      </code>
    ),
    blockquote: ({ children }) => (
      <blockquote
        style={{
          position: 'relative',
          fontSize: '1rem',
          border: `1px solid ${BORDER_COLOR}`,
          fontFamily: "'Roboto Mono', monospace",
          fontWeight: 100,
          display: 'block',
          boxSizing: 'border-box',
          padding: `${SPACING.MEDIUM}px`,
          margin: `${SPACING.MEDIUM}px 0`,
        }}
      >
        {children}
      </blockquote>
    ),
    figure: ({ children }) => (
      <figure style={{ margin: `${SPACING.MEDIUM}px 0` }}>
        {children}
      </figure>
    ),
    figcaption: ({ children }) => (
      <figcaption style={{ fontSize: '0.8rem', textAlign: 'center' }}>
        {children}
      </figcaption>
    ),
  }
}