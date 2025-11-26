// MuiNextLink.tsx
import NextLink, { type LinkProps as NextLinkProps } from 'next/link'
import { Link as MuiLink, SxProps, type LinkProps as MuiLinkProps } from '@mui/material'
import { forwardRef } from 'react'
import { SPACING } from '../styles/styleConstsNEW'

type LinkType = 'block' | 'inline'

const SX: Record<LinkType, SxProps> = {
    block: {
        display: 'block',
        textAlign: 'center',
        padding: SPACING.SMALL.PX,
        backgroundColor: 'darkred', // TODO - Fix me
        margin: `${SPACING.SMALL.PX} 0`
    },
    inline: {
        display: 'inline'
    }
}

export type MuiNextLinkProps = MuiLinkProps &
    Omit<NextLinkProps, 'href'> & {
        href: NextLinkProps['href']
        type?: LinkType
    }

const MuiNextLink = forwardRef<HTMLAnchorElement, MuiNextLinkProps>(
    function MuiNextLink(props, ref) {
        const { href, as, replace, scroll, shallow, prefetch, locale, ...muiProps } = props

        return (
            <MuiLink
                sx={{ textDecoration: 'none', ...SX[muiProps.type ?? 'inline'] }}
                component={NextLink}
                ref={ref}
                href={href}
                as={as}
                replace={replace}
                scroll={scroll}
                shallow={shallow}
                prefetch={prefetch}
                locale={locale}
                {...muiProps}
            />
        )
    }
)

export default MuiNextLink
