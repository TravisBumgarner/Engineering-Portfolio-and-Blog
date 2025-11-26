// MuiNextLink.tsx
import NextLink, { type LinkProps as NextLinkProps } from 'next/link'
import { Link as MuiLink, type LinkProps as MuiLinkProps } from '@mui/material'
import { forwardRef } from 'react'

export type MuiNextLinkProps = MuiLinkProps &
    Omit<NextLinkProps, 'href'> & {
        href: NextLinkProps['href']
    }

const MuiNextLink = forwardRef<HTMLAnchorElement, MuiNextLinkProps>(
    function MuiNextLink(props, ref) {
        const { href, as, replace, scroll, shallow, prefetch, locale, ...muiProps } = props

        return (
            <MuiLink
                sx={{ textDecoration: 'none' }}
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
