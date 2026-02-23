import { Box, Typography, useTheme } from '@mui/material'
import { FONT_SIZES, PALETTE, SPACING } from '../styles/consts'

type VideoProps = {
  src: string
  caption: string
  aspectRatio: string
}

const Video = ({ src, aspectRatio, caption }: VideoProps) => {
  const theme = useTheme()
  return (
    <Box
      component="figure"
      sx={{
        backgroundColor: 'background.paper',
        p: SPACING.MEDIUM.PX,
        m: `${SPACING.MEDIUM.PX} 0`,
      }}
    >
      <Box
        className="video"
        sx={{
          border: `4px solid ${theme.palette.mode === 'light' ? PALETTE.grayscale[700] : PALETTE.grayscale[200]}`,
          padding: SPACING.MEDIUM.PX,
          width: '100%',
          aspectRatio: aspectRatio,
          overflow: 'hidden',
        }}
      >
        <video
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover', // This line might cause issues in the future with aspect ratio. Check somehash.mdx and make sure that still works.
          }}
          src={src}
          muted
          loop
          playsInline
          controls
        >
          <source src={src} type="video/mp4" />
        </video>
      </Box>

      <Typography
        component="figcaption"
        sx={{
          fontSize: FONT_SIZES.SMALL,
          fontWeight: 100,
          marginTop: SPACING.SMALL.PX,
          marginBottom: 0,
        }}
      >
        {caption}
      </Typography>
    </Box>
  )
}

export default Video
