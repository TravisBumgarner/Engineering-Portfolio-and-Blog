import { FILM_TRACKER_FAVICON } from '@common/core'
import { Box, Typography } from '@mui/material'
import ContactForm from '../../sharedComponents/ContactForm'
import { SPACING } from '../../styles/consts'
import { MarketingHero } from './components'

const FilmTrackerPage = () => {
  return (
    <>
      <MarketingHero icon={FILM_TRACKER_FAVICON} title="Film Tracker" tagline="Track your film photography" ctas={[]} />

      <Typography sx={{ mb: SPACING.LARGE.PX, fontSize: '1.1rem', lineHeight: 1.6 }}>
        Film Tracker is an app for tracking your film photography. App is currently in early alpha.
      </Typography>

      <Box sx={{ mb: SPACING.LARGE.PX }}>
        <Typography variant="h3" sx={{ mb: SPACING.MEDIUM.PX }}>
          Contact
        </Typography>
        <ContactForm subject="Film Tracker Feedback" />
      </Box>
    </>
  )
}

export default FilmTrackerPage
