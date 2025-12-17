import { Box, Typography } from '@mui/material'
import { FONT_SIZES, SPACING } from '../styles/consts'
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
        backgroundColor: 'background.paper',
        p: SPACING.MEDIUM.PX,
        m: `${SPACING.MEDIUM.PX} 0`,
      }}
    >
      <BlurHashImage priority={false} src={src} alt={caption} />

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

export default Figure
