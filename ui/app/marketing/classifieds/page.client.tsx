'use client'

import { SPACING } from '@/lib/styles/consts'
import styled from 'styled-components'
import { FaApple } from 'react-icons/fa'
import MarketingLink from '@/lib/sharedComponents/MarketingLink'
import BlurHashImage from '@/lib/sharedComponents/BlurHashImage'
import ContactForm from '@/lib/sharedComponents/ContactForm'
import Image from 'next/image'
import Youtube from '@/lib/sharedComponents/YouTube'
import { Box, Typography } from '@mui/material'

const Section = styled.div`
  display: flex;
  gap: 2rem;
  margin: 2rem 0;
  align-items: flex-start;
  flex-direction: column;
`

const TextColumn = styled.div`
  flex: 1;
  min-width: 200px;
`

const ImageColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const LandingPage = () => {
  return (
    <Box>
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: SPACING.SMALL,
            marginBottom: SPACING.MEDIUM
          }}
        >
          <div>
            <Image
              src="/marketing-resources/classifieds/favicon.png"
              alt="Fast Classifieds Logo"
              width={75}
              height={75}
            />
          </div>
          <div>
            <Typography variant="h2">Fast Classifieds</Typography>
            <Typography>Browse company job boards quickly.</Typography>
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: `${SPACING.MEDIUM} 0`,
          textAlign: 'center'
        }}
      >
        <MarketingLink
          target="_blank"
          href="https://github.com/TravisBumgarner/fast-classifieds/releases/download/v1.4.0/Fast.Classifieds-1.4.0-arm64.dmg"
        >
          <FaApple style={{ marginRight: '0.5rem' }} />
          Download for macOS
        </MarketingLink>
      </div>

      <BlurHashImage
        src="/marketing-resources/classifieds/screenshot.png"
        priority
      />
      <Typography>
        Stop wasting hours manually browsing company career pages. Fast
        Classifieds uses AI to automatically scan multiple company websites,
        find relevant job postings, and explain why each opportunity matches
        your criteria. Keep your job search organized in one desktop
        application. No accounts, no subscriptions, your data stays local.
      </Typography>
      <Section>
        <TextColumn>
          <Typography>
            <strong>Create Custom AI Prompts</strong>
          </Typography>
          <Typography>
            Define what makes a job relevant to you. The app uses your prompts
            with OpenAI to analyze job listings and determine matches.
          </Typography>
        </TextColumn>
        <ImageColumn>
          <BlurHashImage
            priority={false}
            src="/marketing-resources/classifieds/prompt.png"
          />
        </ImageColumn>
      </Section>
      <Section>
        <TextColumn>
          <Typography>
            <strong>Manage Company Career Pages</strong>
          </Typography>
          <Typography>
            Add career pages from companies you are interested in. Configure CSS
            selectors to target job listings, or use &apos;body&apos; to scan
            the entire page. Import multiple sites at once or add them
            individually.
          </Typography>
        </TextColumn>
        <ImageColumn>
          <BlurHashImage
            priority={false}
            src="/marketing-resources/classifieds/sites.png"
          />
        </ImageColumn>
      </Section>
      <Section>
        <TextColumn>
          <Typography>
            <strong>Automated Scanning with Progress Tracking</strong>
          </Typography>
          <Typography>
            Run automated scrapes across all active sites. Watch real-time
            progress as the app visits each career page, extracts job listings,
            and uses AI to evaluate relevance.
          </Typography>
        </TextColumn>
        <ImageColumn>
          <BlurHashImage
            priority={false}
            src="/marketing-resources/classifieds/scanner.png"
          />
        </ImageColumn>
      </Section>
      <Section>
        <TextColumn>
          <Typography>
            <strong>Track Your Applications</strong>
          </Typography>
          <Typography>
            All discovered jobs appear in one organized table. Update status as
            you progress (New → Applied → Interview → Offer). Sort by company,
            title, or date found. View AI explanations for why each job was
            matched.
          </Typography>
        </TextColumn>
        <ImageColumn>
          <BlurHashImage
            priority={false}
            src="/marketing-resources/classifieds/postings.png"
          />
        </ImageColumn>
      </Section>
      <Section>
        <TextColumn>
          <Typography>
            <strong>Find Duplicates</strong>
          </Typography>
          <Typography>
            The app automatically detects duplicate job postings. If the same
            job appears on multiple sites, it groups them together to keep your
            list clean.
          </Typography>
        </TextColumn>
        <ImageColumn>
          <BlurHashImage
            priority={false}
            src="/marketing-resources/classifieds/duplicates.png"
          />
        </ImageColumn>
      </Section>

      <Section>
        <TextColumn>
          <Typography>
            <strong>Review Scrape History</strong>
          </Typography>
          <Typography>
            See detailed history of every scan: which sites were checked, how
            many new jobs were found, duration, and any errors encountered.
            Retry failed sites with one click.
          </Typography>
        </TextColumn>
        <ImageColumn>
          <BlurHashImage
            priority={false}
            src="/marketing-resources/classifieds/history.png"
          />
        </ImageColumn>
      </Section>
      <Section>
        <TextColumn>
          <Typography>
            <strong>Privacy & Transparency</strong>
          </Typography>
          <ul>
            <li>
              All data stored locally in SQLite, no data leaves your computer.
            </li>
            <li>No account or subscription required</li>
            <li>OpenAI API key stored securely on your device</li>
            <li>Track API usage directly in the app</li>
            <li>
              Fully Open Source (
              <a
                target="_blank"
                href="https://github.com/TravisBumgarner/fast-classifieds"
              >
                GitHub
              </a>
              )
            </li>
            <li>Cross-platform: macOS, Windows, Linux</li>
          </ul>
        </TextColumn>
      </Section>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: `${SPACING.MEDIUM} 0`,
          textAlign: 'center'
        }}
      >
        <MarketingLink
          target="_blank"
          href="https://github.com/TravisBumgarner/fast-classifieds/releases/download/v1.4.0/Fast.Classifieds-1.4.0-arm64.dmg"
        >
          <FaApple style={{ marginRight: '0.5rem' }} />
          Download for macOS
        </MarketingLink>
      </div>
      <Typography>Windows and Linux coming soon!</Typography>
      <Typography variant="h3">Getting Started</Typography>
      <Youtube embedId="FQKY70r2288" />
      <Typography variant="h3">How It Works</Typography>
      <Typography>
        Fast Classifieds uses Puppeteer to visit company career pages and
        extract job listings. It then sends each listing to OpenAI along with
        your custom prompt. The AI analyzes the job description and explains why
        it matches (or does not match) your criteria. Jobs are deduplicated
        using content hashing, so you will not see the same posting twice.
      </Typography>
      <Typography variant="h3">Why Fast Classifieds?</Typography>
      <ul>
        <li>
          <strong>Save Time:</strong> Stop manually checking dozens of career
          pages daily
        </li>
        <li>
          <strong>Find Better Matches:</strong> AI explains why each job is
          relevant to you
        </li>
        <li>
          <strong>Stay Organized:</strong> Track applications from discovery to
          offer
        </li>
        <li>
          <strong>Own Your Data:</strong> Everything stays on your computer
        </li>
        <li>
          <strong>Transparent Costs:</strong> You control your OpenAI API usage
        </li>
      </ul>
      <Typography variant="h3">Contact</Typography>
      <ContactForm subject="Fast Classifieds Feedback" />
      <div style={{ height: '50px' }} />
    </Box>
  )
}

export default LandingPage
