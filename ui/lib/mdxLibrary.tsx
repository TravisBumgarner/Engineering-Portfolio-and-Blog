'use client'

import Typography from '@mui/material/Typography'
import { ComponentProps } from 'react'
import Link from '@/lib/sharedComponents/Link'

export const mdxComponents = {
    h1: ({ children, id, className }: ComponentProps<'h1'>) => (
        <Typography
            component="h1"
            variant="h1"
            id={id}
            className={className}
        >
            {children}
        </Typography>
    ),
    h2: ({ children, id, className }: ComponentProps<'h2'>) => (
        <Typography
            component="h2"
            variant="h2"
            id={id}
            className={className}
        >
            {children}
        </Typography>
    ),
    h3: ({ children, id, className }: ComponentProps<'h3'>) => (
        <Typography
            component="h3"
            variant="h3"
            gutterBottom
            id={id}
            className={className}
        >
            {children}
        </Typography>
    ),
    h4: ({ children, id, className }: ComponentProps<'h4'>) => (
        <Typography
            component="h4"
            variant="h4"
            gutterBottom
            id={id}
            className={className}
        >
            {children}
        </Typography>
    ),
    h5: ({ children, id, className }: ComponentProps<'h5'>) => (
        <Typography
            component="h5"
            variant="h5"
            gutterBottom
            id={id}
            className={className}
        >
            {children}
        </Typography>
    ),
    h6: ({ children, id, className }: ComponentProps<'h6'>) => (
        <Typography
            component="h6"
            variant="h6"
            gutterBottom
            id={id}
            className={className}
        >
            {children}
        </Typography>
    ),
    p: ({ children, id, className }: ComponentProps<'p'>) => (
        <Typography
            component="p"
            variant="body1"
            id={id}
            className={className}
        >
            {children}
        </Typography>
    ),
    a: ({ children, href, id, className, ...props }: ComponentProps<'a'>) => (
        <Link
            variant="inline"
            href={href || ''}
            id={id}
            className={className}
            {...props}
        >
            {children}
        </Link>
    )
}

