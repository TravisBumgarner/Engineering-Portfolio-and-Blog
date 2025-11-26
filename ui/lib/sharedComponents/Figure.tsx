'use client'

import { Box, Typography } from '@mui/material'
import { FONT_SIZES, SPACING } from '@/lib/styles/consts'
import BlurHashImage from './BlurHashImage'

type FigureProps = {
  src: string
  caption: string
}

const Figure = ({ src, caption }: FigureProps) => {
  return (
    <Box
      component="figure"
      sx={{
        backgroundColor: 'var(--secondary-background)',
        color: 'var(--foreground)',
        p: SPACING.SMALL.PX,
        m: 0
      }}
    >
      <BlurHashImage priority={false} src={src} alt={caption} />

      <Typography
        component="figcaption"
        sx={{
          fontSize: FONT_SIZES.SMALL,
          fontWeight: 100,
          mt: SPACING.SMALL.PX
        }}
      >
        {caption}
      </Typography>
    </Box>
  )
}

export default Figure
