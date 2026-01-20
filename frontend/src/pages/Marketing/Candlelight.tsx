import { CANDLELIGHT_DESCRIPTION, CANDLELIGHT_FAVICON, CANDLELIGHT_IMAGE, CANDLELIGHT_TITLE } from '@common/core'
import { Box, Typography } from '@mui/material'
import { FaSteam } from 'react-icons/fa'
import BlurHashImage from '../../sharedComponents/BlurHashImage'
import ContactForm from '../../sharedComponents/ContactForm'
import PageWrapper from '../../sharedComponents/PageWrapper'
import { SPACING } from '../../styles/consts'
import { DownloadSection, FeatureGrid, MarketingHero } from './components'

const STEAM_URL = 'https://store.steampowered.com/app/3157820/Candlelight/'

const FEATURES = [
  {
    title: 'Puzzle Mode',
    description:
      'Complete 50 levels across 9 worlds, each challenging you to work with a limited number of shapes. Every move counts as you aim for the most efficient solution.',
  },
  {
    title: 'Free Play',
    description:
      "Unwind and play at your own pace. There's no goal here—just relax, enjoy the music, and experiment with shapes to your heart's content.",
  },
  {
    title: 'Daily Challenge',
    description:
      'Every day brings a fresh puzzle. Compete with friends to see who can solve it using the fewest shapes.',
  },
]

const CandlelightPage = () => {
  return (
    <PageWrapper width="medium">
      <MarketingHero
        icon={CANDLELIGHT_FAVICON}
        title={CANDLELIGHT_TITLE}
        tagline={CANDLELIGHT_DESCRIPTION}
        ctas={[{ label: 'Get on Steam', href: STEAM_URL, icon: <FaSteam /> }]}
      />

      <Box sx={{ mb: SPACING.LARGE.PX }}>
        <BlurHashImage src={CANDLELIGHT_IMAGE} alt="Candlelight gameplay" />
      </Box>

      <Typography sx={{ mb: SPACING.LARGE.PX, fontSize: '1.1rem', lineHeight: 1.6 }}>
        Candlelight is a puzzle game where each shape you place onto the grid inverts the color of the space it
        occupies. Every inversion offers the opportunity to alchemize a gem and advance. Master the interplay of shape
        and color as you progress through increasingly challenging puzzles.
      </Typography>

      <FeatureGrid features={FEATURES} />

      <DownloadSection
        title="Get Candlelight"
        platforms={[
          {
            platform: 'steam',
            label: 'Steam Store',
            href: STEAM_URL,
            available: true,
            icon: <FaSteam />,
          },
        ]}
      />

      <Box sx={{ mb: SPACING.LARGE.PX }}>
        <Typography variant="h3" sx={{ mb: SPACING.MEDIUM.PX }}>
          Contact
        </Typography>
        <ContactForm subject="Candlelight Feedback" />
      </Box>
    </PageWrapper>
  )
}

export default CandlelightPage
