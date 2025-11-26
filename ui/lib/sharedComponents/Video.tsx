'use client'

import { PALETTE, SPACING } from '@/lib/styles/consts'
import { useTheme } from '@mui/material'
import { Box } from '@mui/material'
import { Palette } from '../styles/consts'

type VideoProps = {
  src: string
  caption: string
  aspectRatio: string
}

const Video = ({ src, aspectRatio }: VideoProps) => {
  const theme = useTheme()
  return (
    <Box
      className="video"
      sx={{
        border: `4px solid ${theme.palette.mode === 'light' ? PALETTE.grayscale[700] : PALETTE.grayscale[200]}`,
        padding: SPACING.MEDIUM.PX,
        width: '100%',
        aspectRatio: aspectRatio,
        overflow: 'hidden'
      }}
    >
      <video
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'none' // This line might cause issues in the future with aspect ratio. Check somehash.mdx and make sure that still works.
        }}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        controls
      >
        <source src={src} type="video/mp4" />
      </video>
    </Box>
  )
}

export default Video
