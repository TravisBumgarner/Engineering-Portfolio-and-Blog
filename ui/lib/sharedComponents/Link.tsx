'use client'

import { Link as MuiLink, type LinkProps as MuiLinkProps, type SxProps, useTheme } from '@mui/material'
import type { CSSObject } from '@mui/material/styles'
import NextLink, { type LinkProps as NextLinkProps } from 'next/link'
import { forwardRef } from 'react'
import { DARK_BUTTON_STYLES, LIGHT_BUTTON_STYLES, PALETTE, SPACING } from '../styles/consts'

export type LinkType = 'block' | 'inline' | 'inlineBlock'

/** Shared block style — returns plain CSS object */
const sxBlockShared = (mode: 'light' | 'dark'): CSSObject => ({
  textAlign: 'center',
  fontWeight: 900,
  padding: SPACING.SMALL.PX,
  color: mode === 'light' ? LIGHT_BUTTON_STYLES.color : DARK_BUTTON_STYLES.color,
  '&:visited': {
    color: mode === 'light' ? LIGHT_BUTTON_STYLES.color : DARK_BUTTON_STYLES.color,
  },
  backgroundColor: mode === 'light' ? LIGHT_BUTTON_STYLES.background : DARK_BUTTON_STYLES.background,
  '&:hover': {
    color: mode === 'light' ? LIGHT_BUTTON_STYLES.color : DARK_BUTTON_STYLES.color,
    backgroundColor: mode === 'light' ? LIGHT_BUTTON_STYLES.hoverBackground : DARK_BUTTON_STYLES.hoverBackground,
  },
})

/** Returns plain CSS object (never SxProps array) */
const getTypeStyles = (mode: 'light' | 'dark', type: LinkType): CSSObject => {
  switch (type) {
    case 'block':
      return { display: 'block', ...sxBlockShared(mode) }
    case 'inlineBlock':
      return { display: 'inline-block', ...sxBlockShared(mode) }
    case 'inline':
      return {
        display: 'inline',
        color: PALETTE.primary[500],
        fontWeight: 700,
        '&:visited': {
          color: PALETTE.primary[500],
        },
        '&:hover': {
          color: mode === 'light' ? PALETTE.primary[600] : PALETTE.primary[400],
        },
      }
    default:
      return {}
  }
}

/** Ensures sx is always a plain object */
const normalizeSx = (sx?: SxProps): CSSObject => {
  if (!sx) return {}
  if (Array.isArray(sx)) return Object.assign({}, ...sx)
  return sx as CSSObject
}

export type MuiNextLinkProps = {
  type?: LinkType
  sx?: SxProps
  href: NextLinkProps['href']
} & Omit<NextLinkProps, 'href'> &
  Omit<MuiLinkProps, 'href' | 'component'>

const MuiNextLink = forwardRef<HTMLAnchorElement, MuiNextLinkProps>(function MuiNextLink(props, ref) {
  const { href, as, replace, scroll, shallow, prefetch, locale, type, sx, ...muiProps } = props

  const theme = useTheme()
  const mode = theme.palette.mode as 'light' | 'dark'

  return (
    <MuiLink
      {...muiProps}
      component={NextLink}
      ref={ref}
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      prefetch={prefetch}
      locale={locale}
      underline="none"
      sx={{
        textDecoration: 'none',
        ...getTypeStyles(mode, type || 'inline'),
        ...normalizeSx(sx),
      }}
    />
  )
})

export default MuiNextLink
