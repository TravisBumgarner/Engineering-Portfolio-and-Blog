import { Box, Typography } from '@mui/material'
import { SPACING } from '../styles/consts'

const MarketingHeader = ({ title, description, src }: { title: string; description: string; src: string }) => {
  return (
    <Box sx={{ marginBottom: SPACING.LARGE.PX }}>
      <Box
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: SPACING.SMALL.PX,
        }}
      >
        <Box>
          <img src={src} alt="App Logo" width={75} height={75} />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: SPACING.SMALL.PX }}>
          <Typography sx={{ margin: 0 }} variant="h2">
            {title}
          </Typography>
          <Typography sx={{ margin: 0 }}>{description}</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default MarketingHeader
