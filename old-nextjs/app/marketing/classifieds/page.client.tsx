'use client'

import { Box, List, ListItem, Typography } from '@mui/material'
import { FaApple } from 'react-icons/fa'
import BlurHashImage from '@/lib/sharedComponents/BlurHashImage'
import ContactForm from '@/lib/sharedComponents/ContactForm'
import Link from '@/lib/sharedComponents/Link'
import Youtube from '@/lib/sharedComponents/YouTube'
import MarketingHeader from '../../../lib/sharedComponents/MarketingHeader'
import { SPACING } from '../../../lib/styles/consts'
import { FAST_CLASSIFIEDS_DESCRIPTION, FAST_CLASSIFIEDS_FAVICON, FAST_CLASSIFIEDS_TITLE } from '../_consts'

const LandingPage = () => {
  return (
    <Box>
      <MarketingHeader
        src={FAST_CLASSIFIEDS_FAVICON}
        title={FAST_CLASSIFIEDS_TITLE}
        description={FAST_CLASSIFIEDS_DESCRIPTION}
      />

      <Box sx={{ mb: SPACING.MEDIUM.PX }}>
        <Link
          type="block"
          target="_blank"
          href="https://github.com/TravisBumgarner/fast-classifieds/releases/download/v1.4.0/Fast.Classifieds-1.4.0-arm64.dmg"
        >
          <FaApple style={{ marginRight: '0.5rem' }} />
          Download for macOS
        </Link>
      </Box>

      <Box sx={{ mb: SPACING.MEDIUM.PX }}>
        <BlurHashImage src="/marketing-resources/classifieds/screenshot.png" priority />
      </Box>
      <Typography sx={{ mb: 4, fontSize: '1.1rem', lineHeight: 1.6 }}>
        Stop wasting hours manually browsing company career pages. Fast Classifieds uses AI to automatically scan
        multiple company websites, find relevant job postings, and explain why each opportunity matches your criteria.
        Keep your job search organized in one desktop application. No accounts, no subscriptions, your data stays local.
      </Typography>
      <Box sx={{ display: 'flex', gap: 4, mb: 4, alignItems: 'flex-start', flexDirection: 'column' }}>
        <Box sx={{ flex: 1, minWidth: 200 }}>
          <Typography variant="h4" gutterBottom>
            <strong>Create Custom AI Prompts</strong>
          </Typography>
          <Typography>
            Define what makes a job relevant to you. The app uses your prompts with OpenAI to analyze job listings and
            determine matches.
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
          <BlurHashImage priority={false} src="/marketing-resources/classifieds/prompt.png" />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', gap: 4, mb: 4, alignItems: 'flex-start', flexDirection: 'column' }}>
        <Box sx={{ flex: 1, minWidth: 200 }}>
          <Typography variant="h4" gutterBottom>
            <strong>Manage Company Career Pages</strong>
          </Typography>
          <Typography>
            Add career pages from companies you are interested in. Configure CSS selectors to target job listings, or
            use &apos;body&apos; to scan the entire page. Import multiple sites at once or add them individually.
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
          <BlurHashImage priority={false} src="/marketing-resources/classifieds/sites.png" />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', gap: 4, mb: 4, alignItems: 'flex-start', flexDirection: 'column' }}>
        <Box sx={{ flex: 1, minWidth: 200 }}>
          <Typography variant="h4" gutterBottom>
            <strong>Automated Scanning with Progress Tracking</strong>
          </Typography>
          <Typography>
            Run automated scrapes across all active sites. Watch real-time progress as the app visits each career page,
            extracts job listings, and uses AI to evaluate relevance.
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
          <BlurHashImage priority={false} src="/marketing-resources/classifieds/scanner.png" />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', gap: 4, mb: 4, alignItems: 'flex-start', flexDirection: 'column' }}>
        <Box sx={{ flex: 1, minWidth: 200 }}>
          <Typography variant="h4" gutterBottom>
            <strong>Track Your Applications</strong>
          </Typography>
          <Typography>
            All discovered jobs appear in one organized table. Update status as you progress (New → Applied → Interview
            → Offer). Sort by company, title, or date found. View AI explanations for why each job was matched.
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
          <BlurHashImage priority={false} src="/marketing-resources/classifieds/postings.png" />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', gap: 4, mb: 4, alignItems: 'flex-start', flexDirection: 'column' }}>
        <Box sx={{ flex: 1, minWidth: 200 }}>
          <Typography variant="h4" gutterBottom>
            <strong>Find Duplicates</strong>
          </Typography>
          <Typography>
            The app automatically detects duplicate job postings. If the same job appears on multiple sites, it groups
            them together to keep your list clean.
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
          <BlurHashImage priority={false} src="/marketing-resources/classifieds/duplicates.png" />
        </Box>
      </Box>

      <Box sx={{ display: 'flex', gap: 4, mb: 4, alignItems: 'flex-start', flexDirection: 'column' }}>
        <Box sx={{ flex: 1, minWidth: 200 }}>
          <Typography variant="h4" gutterBottom>
            <strong>Review Scrape History</strong>
          </Typography>
          <Typography>
            See detailed history of every scan: which sites were checked, how many new jobs were found, duration, and
            any errors encountered. Retry failed sites with one click.
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
          <BlurHashImage priority={false} src="/marketing-resources/classifieds/history.png" />
        </Box>
      </Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          <strong>Privacy & Transparency</strong>
        </Typography>
        <List>
          <ListItem>All data stored locally in SQLite, no data leaves your computer.</ListItem>
          <ListItem>No account or subscription required</ListItem>
          <ListItem>OpenAI API key stored securely on your device</ListItem>
          <ListItem>Track API usage directly in the app</ListItem>
          <ListItem>
            Fully Open Source (
            <Link type="inline" target="_blank" href="https://github.com/TravisBumgarner/fast-classifieds">
              GitHub
            </Link>
            )
          </ListItem>
          <ListItem>Cross-platform: macOS, Windows, Linux</ListItem>
        </List>
      </Box>
      <Box sx={{ mb: SPACING.MEDIUM.PX }}>
        <Link
          type="block"
          target="_blank"
          href="https://github.com/TravisBumgarner/fast-classifieds/releases/download/v1.4.0/Fast.Classifieds-1.4.0-arm64.dmg"
        >
          <FaApple style={{ marginRight: '0.5rem' }} />
          Download for macOS
        </Link>
      </Box>
      <Typography sx={{ mb: 3, textAlign: 'center' }}>Windows and Linux coming soon!</Typography>
      <Typography variant="h3" gutterBottom sx={{ mt: 4 }}>
        Getting Started
      </Typography>
      <Box sx={{ mb: 3 }}>
        <Youtube embedId="FQKY70r2288" />
      </Box>
      <Typography variant="h3" gutterBottom sx={{ mt: 4 }}>
        How It Works
      </Typography>
      <Typography sx={{ mb: 4, lineHeight: 1.6 }}>
        Fast Classifieds uses Puppeteer to visit company career pages and extract job listings. It then sends each
        listing to OpenAI along with your custom prompt. The AI analyzes the job description and explains why it matches
        (or does not match) your criteria. Jobs are deduplicated using content hashing, so you will not see the same
        posting twice.
      </Typography>
      <Typography variant="h3" gutterBottom sx={{ mt: 4 }}>
        Why Fast Classifieds?
      </Typography>
      <List sx={{ mb: 4 }}>
        <ListItem>
          <strong>Save Time:</strong> Stop manually checking dozens of career pages daily
        </ListItem>
        <ListItem>
          <strong>Find Better Matches:</strong> AI explains why each job is relevant to you
        </ListItem>
        <ListItem>
          <strong>Stay Organized:</strong> Track applications from discovery to offer
        </ListItem>
        <ListItem>
          <strong>Own Your Data:</strong> Everything stays on your computer
        </ListItem>
        <ListItem>
          <strong>Transparent Costs:</strong> You control your OpenAI API usage
        </ListItem>
      </List>
      <Typography variant="h3" gutterBottom sx={{ mt: 4 }}>
        Contact
      </Typography>
      <ContactForm subject="Fast Classifieds Feedback" />
      <Box sx={{ height: 50 }} />
    </Box>
  )
}

export default LandingPage
