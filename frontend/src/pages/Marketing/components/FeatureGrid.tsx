import { Box, Typography } from '@mui/material'
import BlurHashImage from '../../../sharedComponents/BlurHashImage'
import { SPACING } from '../../../styles/consts'

interface Feature {
  title: string
  description: string
  image?: string
}

interface FeatureGridProps {
  features: Feature[]
  fullWidthImages?: boolean
}

const FeatureGrid = ({ features, fullWidthImages = false }: FeatureGridProps) => {
  if (fullWidthImages) {
    return (
      <Box sx={{ mb: SPACING.LARGE.PX }}>
        {features.map((feature) => (
          <Box key={feature.title} sx={{ mb: SPACING.LARGE.PX }}>
            <Typography variant="h4" sx={{ mb: SPACING.SMALL.PX }}>
              <strong>{feature.title}</strong>
            </Typography>
            <Typography sx={{ mb: feature.image ? SPACING.MEDIUM.PX : 0 }}>
              {feature.description}
            </Typography>
            {feature.image && (
              <Box sx={{ mt: SPACING.SMALL.PX }}>
                <BlurHashImage src={feature.image} alt={feature.title} />
              </Box>
            )}
          </Box>
        ))}
      </Box>
    )
  }

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: 'repeat(auto-fit, minmax(280px, 1fr))' },
        gap: SPACING.LARGE.PX,
        mb: SPACING.LARGE.PX,
      }}
    >
      {features.map((feature) => (
        <Box key={feature.title}>
          <Typography variant="h4" sx={{ mb: SPACING.SMALL.PX }}>
            <strong>{feature.title}</strong>
          </Typography>
          <Typography sx={{ mb: feature.image ? SPACING.MEDIUM.PX : 0 }}>
            {feature.description}
          </Typography>
          {feature.image && (
            <Box sx={{ mt: SPACING.SMALL.PX }}>
              <BlurHashImage src={feature.image} alt={feature.title} />
            </Box>
          )}
        </Box>
      ))}
    </Box>
  )
}

export default FeatureGrid
