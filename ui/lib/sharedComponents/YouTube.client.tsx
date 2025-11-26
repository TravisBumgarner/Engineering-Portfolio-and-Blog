'use client'

import { Box, BoxProps } from '@mui/material'
import { SPACING } from '@/lib/styles/consts'

export const YoutubeWrapper = ({ children, ...props }: BoxProps) => (
  <Box
    component="figure"
    {...props}
    sx={{
      overflow: 'hidden',
      position: 'relative',
      margin: '1rem 0',
      border: `${SPACING.MEDIUM.PX} solid var(--secondary-background)`,
      color: 'var(--foreground)',
      aspectRatio: '16 / 9',
      width: '100%',

      '& iframe': {
        left: 0,
        top: 0,
        height: '100%',
        width: '100%',
        position: 'absolute',
      },

      ...props.sx,
    }}
  >
    {children}
  </Box>
)
