import { FILM_TRACKER_FAVICON } from '@common/core'
import { Box, Typography } from '@mui/material'
import { FaApple } from 'react-icons/fa'
import ContactForm from '../../sharedComponents/ContactForm'
import { SPACING } from '../../styles/consts'
import { BenefitsList, FeatureGrid, MarketingHero, MarketingLinks } from './components'

const APP_STORE_URL = ''

const FEATURES = [
  {
    title: 'Track Your Cameras & Rolls',
    description:
      'Add your cameras, load rolls, and track each one through its lifecycle—from exposing to developed to archived.',
    image: '/marketing-resources/film_tracker/cameras.png',
  },
  {
    title: 'Organize Your Workflow',
    description:
      'Filter rolls by status, add notes and frame counts, and keep a clear picture of where every roll stands.',
    image: '/marketing-resources/film_tracker/rolls.png',
  },
  {
    title: 'Backup & Sync',
    description: 'Automatic weekly iCloud backups with multiple restore points. Export and import your data anytime.',
    image: '/marketing-resources/film_tracker/settings.png',
  },
]

const BENEFITS = [
  'Track rolls from loading to archiving',
  'Automatic iCloud backups',
  'No account or internet required',
  'Export and import your data anytime',
  'Light and dark theme support',
]

const FilmTrackerPage = () => {
  return (
    <>
      <MarketingHero
        icon={FILM_TRACKER_FAVICON}
        title="Film Tracker"
        tagline="Track your film photography"
        ctas={[{ label: 'App Store (Coming Soon)', href: APP_STORE_URL, icon: <FaApple />, disabled: true }]}
      />

      <Typography sx={{ mb: SPACING.LARGE.PX, fontSize: '1.1rem', lineHeight: 1.6 }}>
        Shooting film? Film Tracker helps you keep track of every camera, roll, and frame. Know exactly which rolls are
        loaded, which are waiting for development, and which are done, No spreadsheets. No guesswork.
      </Typography>

      <FeatureGrid features={FEATURES} />

      <BenefitsList title="Why Film Tracker?" items={BENEFITS} />

      {/* <DownloadSection
        platforms={[
          {
            platform: 'ios',
            label: 'App Store',
            href: APP_STORE_URL,
            available: true,
            icon: <FaApple />,
          },
        ]}
      /> */}

      <Box sx={{ mb: SPACING.LARGE.PX }}>
        <Typography variant="h3" sx={{ mb: SPACING.MEDIUM.PX }}>
          Contact
        </Typography>
        <ContactForm subject="Film Tracker Feedback" />
      </Box>

      <MarketingLinks
        links={[
          {
            href: 'https://github.com/TravisBumgarner/film-tracker',
            label: 'Source Code',
          },
        ]}
      />
    </>
  )
}

export default FilmTrackerPage
