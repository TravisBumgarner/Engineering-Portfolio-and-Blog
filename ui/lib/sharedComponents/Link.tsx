// MuiNextLink.tsx
import NextLink, { type LinkProps as NextLinkProps } from 'next/link'
import { Link as MuiLink, SxProps, useTheme, type LinkProps as MuiLinkProps } from '@mui/material'
import { forwardRef } from 'react'
import { PALETTE, SPACING } from '../styles/consts'

type LinkType = 'block' | 'inline' | 'inlineBlock'

const sxBlockShared = (mode: 'light' | 'dark'): SxProps => ({
    textAlign: 'center',
    padding: SPACING.SMALL.PX,
    backgroundColor: mode === 'light' ? PALETTE.primary[500] : PALETTE.primary[500],
    color: mode === 'light' ? PALETTE.primary[100] : PALETTE.primary[900],
    '&:hover': {
        backgroundColor: mode === 'light' ? PALETTE.primary[600] : PALETTE.primary[400],
        color: mode === 'light' ? PALETTE.primary[50] : PALETTE.primary[950],
    },
})

const SX = (mode: 'light' | 'dark', type: LinkType) => {
    const sx: Record<LinkType, SxProps> = {
        block: {
            display: 'block',
            ...sxBlockShared(mode)
        },
        inlineBlock: {
            display: 'inline-block',
            ...sxBlockShared(mode)
        },
        inline: {
            display: 'inline',
            color: mode === 'light' ? PALETTE.primary[500] : PALETTE.primary[500],
            '&:hover': {
                color: mode === 'light' ? PALETTE.primary[600] : PALETTE.primary[400],
            },
            fontWeight: 700,
        }
    }

    return sx[type]
}

export type MuiNextLinkProps = MuiLinkProps &
    Omit<NextLinkProps, 'href'> & {
        href: NextLinkProps['href']
        type: LinkType
        sx?: SxProps
    }

const MuiNextLink = forwardRef<HTMLAnchorElement, MuiNextLinkProps>(
    function MuiNextLink(props, ref) {
        const { href, as, replace, scroll, shallow, prefetch, locale, ...muiProps } = props
        const theme = useTheme()
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
                sx={{ textDecoration: 'none', ...SX(theme.palette.mode, muiProps.type), ...muiProps.sx }}

            />
        )
    }
)

export default MuiNextLink
