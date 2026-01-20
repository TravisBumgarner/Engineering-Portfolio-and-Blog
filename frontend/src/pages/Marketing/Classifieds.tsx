import { FAST_CLASSIFIEDS_FAVICON, FAST_CLASSIFIEDS_IMAGE } from '@common/core'
import { Box, Typography } from '@mui/material'
import { FaApple } from 'react-icons/fa'
import BlurHashImage from '../../sharedComponents/BlurHashImage'
import ContactForm from '../../sharedComponents/ContactForm'
import Link from '../../sharedComponents/Link'
import PageWrapper from '../../sharedComponents/PageWrapper'
import Youtube from '../../sharedComponents/YouTube'
import { SPACING } from '../../styles/consts'
import { BenefitsList, DownloadSection, FeatureGrid, MarketingHero } from './components'

const MACOS_DOWNLOAD_URL =
  'https://github.com/TravisBumgarner/fast-classifieds/releases/download/v1.4.0/Fast.Classifieds-1.4.0-arm64.dmg'

const FEATURES = [
  {
    title: 'AI Matching',
    description:
      'Define what makes a job relevant to you. The app uses your custom prompts with OpenAI to analyze job listings and explain why each opportunity matches your criteria.',
    image: '/marketing-resources/classifieds/prompt.png',
  },
  {
    title: 'Auto-Scanning',
    description:
      'Run automated scrapes across all your saved company career pages. Watch real-time progress as the app visits each site, extracts job listings, and evaluates relevance.',
    image: '/marketing-resources/classifieds/scanner.png',
  },
  {
    title: 'Application Tracking',
    description:
      'All discovered jobs appear in one organized table. Update status as you progress from discovery to offer. View AI explanations for why each job was matched.',
    image: '/marketing-resources/classifieds/postings.png',
  },
]

const BENEFITS = [
  'Save time: Stop manually checking dozens of career pages daily',
  'Better matches: AI explains why each job is relevant to you',
  'Own your data: Everything stays on your computer',
  'No subscriptions: Free and open source',
  'Transparent costs: You control your OpenAI API usage',
]

const ClassifiedsPage = () => {
  return (
    <PageWrapper width="medium">
      <MarketingHero
        icon={FAST_CLASSIFIEDS_FAVICON}
        title="Fast Classifieds"
        tagline="AI-powered job search automation"
        ctas={[{ label: 'Download for macOS', href: MACOS_DOWNLOAD_URL, icon: <FaApple /> }]}
      />

      <Box sx={{ mb: SPACING.LARGE.PX }}>
        <BlurHashImage src={FAST_CLASSIFIEDS_IMAGE} alt="Fast Classifieds app interface" />
      </Box>

      <Typography sx={{ mb: SPACING.LARGE.PX, fontSize: '1.1rem', lineHeight: 1.6 }}>
        Stop wasting hours manually browsing company career pages. Fast Classifieds uses AI to automatically scan
        multiple company websites, find relevant job postings, and explain why each opportunity matches your criteria.
        Keep your job search organized in one desktop application—no accounts, no subscriptions, your data stays local.
      </Typography>

      <FeatureGrid features={FEATURES} fullWidthImages />

      <BenefitsList title="Why Fast Classifieds?" items={BENEFITS} />

      <Box sx={{ mb: SPACING.LARGE.PX }}>
        <Typography variant="h3" sx={{ mb: SPACING.MEDIUM.PX }}>
          Getting Started
        </Typography>
        <Youtube embedId="FQKY70r2288" />
      </Box>

      <Box sx={{ mb: SPACING.LARGE.PX }}>
        <Typography variant="h3" sx={{ mb: SPACING.SMALL.PX }}>
          How It Works
        </Typography>
        <Typography sx={{ lineHeight: 1.6 }}>
          Fast Classifieds uses Puppeteer to visit company career pages and extract job listings. It then sends each
          listing to OpenAI along with your custom prompt. The AI analyzes the job description and explains why it
          matches (or does not match) your criteria. Jobs are deduplicated using content hashing, so you won't see the
          same posting twice.
        </Typography>
      </Box>

      <Box sx={{ mb: SPACING.LARGE.PX }}>
        <Typography sx={{ fontSize: '0.9rem', opacity: 0.8 }}>
          Fully open source on{' '}
          <Link type="inline" target="_blank" href="https://github.com/TravisBumgarner/fast-classifieds">
            GitHub
          </Link>
        </Typography>
      </Box>

      <DownloadSection
        platforms={[
          {
            platform: 'macos',
            label: 'macOS',
            href: MACOS_DOWNLOAD_URL,
            available: true,
            icon: <FaApple />,
          },
          {
            platform: 'windows',
            label: 'Windows',
            href: '',
            available: false,
          },
          {
            platform: 'linux',
            label: 'Linux',
            href: '',
            available: false,
          },
        ]}
      />

      <Box sx={{ mb: SPACING.LARGE.PX }}>
        <Typography variant="h3" sx={{ mb: SPACING.MEDIUM.PX }}>
          Contact
        </Typography>
        <ContactForm subject="Fast Classifieds Feedback" />
      </Box>
    </PageWrapper>
  )
}

export default ClassifiedsPage
