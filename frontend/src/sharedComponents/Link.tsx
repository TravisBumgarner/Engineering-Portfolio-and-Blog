'use client'

import { Link as MuiLink, type LinkProps as MuiLinkProps, type SxProps, useTheme } from '@mui/material'
import type { CSSObject } from '@mui/material/styles'
import { Link as RouterLink } from 'react-router-dom'
import { forwardRef } from 'react'
import { DARK_BUTTON_STYLES, LIGHT_BUTTON_STYLES, PALETTE, SPACING } from '../styles/consts'

export type LinkType = 'block' | 'inline' | 'inlineBlock' | 'inlineMenu'

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
        case 'inlineMenu':
            return {
                display: 'inline',
                color: mode === 'light' ? PALETTE.grayscale[800] : PALETTE.grayscale[100],
                fontWeight: 700,
                '&:visited': {
                    color: mode === 'light' ? PALETTE.grayscale[800] : PALETTE.grayscale[100],
                },
                '&:hover': {
                    color: mode === 'light' ? PALETTE.primary[600] : PALETTE.primary[400],
                },
            }
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

export type MuiReactLinkProps = {
    type: LinkType
    sx?: SxProps
    href: string
} & Omit<MuiLinkProps, 'href' | 'component'>

const MuiReactLink = forwardRef<HTMLAnchorElement, MuiReactLinkProps>(function MuiReactLink(props, ref) {
    const { href, type, sx, ...muiProps } = props

    const theme = useTheme()
    const mode = theme.palette.mode as 'light' | 'dark'

    return (
        <MuiLink
            {...muiProps}
            component={RouterLink}
            ref={ref}
            to={href}
            // replace={replace}
            // scroll={scroll}
            // shallow={shallow}
            // prefetch={prefetch}
            // locale={locale}
            underline="none"
            sx={{
                textDecoration: 'none',
                ...getTypeStyles(mode, type),
                ...normalizeSx(sx),
            }}
        />
    )
})

export default MuiReactLink
