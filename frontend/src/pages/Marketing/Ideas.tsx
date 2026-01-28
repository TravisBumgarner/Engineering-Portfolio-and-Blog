import { IDEAS_FAVICON } from '@common/core'
import { Box, Typography } from '@mui/material'
import { FaAndroid, FaApple } from 'react-icons/fa'
import ContactForm from '../../sharedComponents/ContactForm'
import { SPACING } from '../../styles/consts'
import { BenefitsList, DownloadSection, FeatureGrid, MarketingHero, MarketingLinks } from './components'

const APP_STORE_URL = 'https://apps.apple.com/us/app/ideas-down-quickly/id6529524065?platform=iphone'
const PLAY_STORE_TESTING_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSftglI15-9coi2P1Tx_QaZitHYrSMvVilQKn6_BB1t_3V3nvg/viewform?usp=sf_link'

const FEATURES = [
  {
    title: 'Quick Capture',
    description:
      'Create a new category or choose from an existing one, and start ideating. No friction, no setup—just open the app and capture your thoughts.',
    image: '/marketing-resources/ideas_down/ideate.png',
  },
  {
    title: 'Organize & Reflect',
    description:
      'Keep all your ideas in one place, organized by date and category. Use filters to focus on specific topics and revisit your best thoughts.',
    image: '/marketing-resources/ideas_down/reflect.png',
  },
  {
    title: 'Privacy First',
    description:
      'No account required. No internet connection needed. All your ideas stay on your device, and you control your own backups. Cloud storage is disabled by default but can be enabled if you prefer.',
    image: '/marketing-resources/ideas_down/settings.png',
  },
]

const BENEFITS = [
  'No internet connection required',
  'No login or account needed',
  'All data stays on your device',
  'Backup and restore your data anytime',
  'Fully open source',
]

const IdeasPage = () => {
  return (
    <>
      <MarketingHero
        icon={IDEAS_FAVICON}
        title="Ideas Down"
        tagline="Clear your mind and make room for your next big idea"
        ctas={[
          { label: 'App Store', href: APP_STORE_URL, icon: <FaApple /> },
          { label: 'Play Store (Beta)', href: PLAY_STORE_TESTING_URL, icon: <FaAndroid /> },
        ]}
      />

      <Typography sx={{ mb: SPACING.LARGE.PX, fontSize: '1.1rem', lineHeight: 1.6 }}>
        Do you find it hard to keep track of your creative ideas? Do they slip away or consume your focus? Ideas Down
        lets you capture them instantly—no logins, no complicated setup, and no internet needed. Data stays on your
        device and the app is fully open source.
      </Typography>

      <FeatureGrid features={FEATURES} />

      <BenefitsList title="Why Ideas Down?" items={BENEFITS} />

      <DownloadSection
        platforms={[
          {
            platform: 'ios',
            label: 'App Store',
            href: APP_STORE_URL,
            available: true,
            icon: <FaApple />,
          },
          {
            platform: 'android',
            label: 'Play Store (Beta)',
            href: PLAY_STORE_TESTING_URL,
            available: true,
            icon: <FaAndroid />,
          },
        ]}
      />

      <Box sx={{ mb: SPACING.LARGE.PX }}>
        <Typography variant="h3" sx={{ mb: SPACING.MEDIUM.PX }}>
          Contact
        </Typography>
        <ContactForm subject="Ideas Down Feedback" />
      </Box>

      <MarketingLinks
        links={[
          {
            href: 'https://github.com/TravisBumgarner/ideas-down-quickly',
            label: 'Source Code',
          },
          {
            href: 'https://github.com/TravisBumgarner/ideas-down-quickly/releases',
            label: 'Releases',
          },
        ]}
      />
    </>
  )
}

export default IdeasPage
