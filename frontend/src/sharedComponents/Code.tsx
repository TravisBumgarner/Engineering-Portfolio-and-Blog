'use client'

import { Typography } from '@mui/material'
import { FONT_SIZES, SPACING, subtleBackground } from '../styles/consts'

type CodeProps = {
    children: React.ReactNode
    block?: boolean
}

const Code = ({ children, block = false, ...props }: CodeProps) => {
    return (
        <Typography
            component={block ? 'pre' : 'code'}
            variant="body2"
            {...props}
            sx={[
                (theme) => ({
                    fontFamily: 'monospace',
                    backgroundColor: subtleBackground(theme.palette.mode, 'slightly'),
                    padding: block ? SPACING.MEDIUM.PX : '2px 4px',
                    fontSize: FONT_SIZES.MEDIUM.PX,
                    ...(block && {
                        overflow: 'auto',
                        whiteSpace: 'pre-wrap',
                    }),
                }),
            ]}
        >
            {children}
        </Typography>
    )
}

export default Code
