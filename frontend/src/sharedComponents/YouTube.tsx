import { Box, type BoxProps, useTheme } from '@mui/material'
import { PALETTE, SPACING } from '../styles/consts'

type YoutubeProps = {
  embedId: string
}

const Youtube = ({ embedId }: YoutubeProps) => (
  <YoutubeWrapper>
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      frameBorder={0}
    />
  </YoutubeWrapper>
)

export const YoutubeWrapper = ({ children, ...props }: BoxProps) => {
  const theme = useTheme()
  return (
    <Box sx={{
      backgroundColor: 'background.paper',
      p: SPACING.MEDIUM.PX,
      m: `${SPACING.MEDIUM.PX} 0`,
    }}>
      <Box
        component="figure"
        {...props}
        sx={{
          overflow: 'hidden',
          position: 'relative',
          margin: 0,
          border: `4px solid ${theme.palette.mode === 'light' ? PALETTE.grayscale[700] : PALETTE.grayscale[200]}`,
          backgroundColor: 'background.paper',
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
    </Box>
  )
}


export default Youtube
