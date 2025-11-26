'use client'

import { Box, Collapse, List, ListItem, Typography } from '@mui/material'
import Image from 'next/image'
import { useState } from 'react'
import { FaApple, FaChevronDown, FaChevronUp, FaGithub } from 'react-icons/fa'
import BlurHashImage from '@/lib/sharedComponents/BlurHashImage'
import ContactForm from '@/lib/sharedComponents/ContactForm'
import Link from '@/lib/sharedComponents/Link'
import { IDEAS_DESCRIPTION, IDEAS_TITLE } from '../classifieds/_consts'

type UpdateType = 'add' | 'update' | 'fix'
type Update = {
  title: string
  date: string
  updates: Record<UpdateType, string[]>
}

const LABELS: Record<UpdateType, string> = {
  add: 'Add',
  update: 'Update',
  fix: 'Fix',
}

const UPDATES: Update[] = [
  {
    title: '1.3.0 - Small Improvements',
    date: 'August 27th, 2024',
    updates: {
      add: ['Feedback request'],
      update: ['Cancel button behavior when adding an idea after creating a category'],
      fix: ['Keyboard not dismissible when trying to delete database'],
    },
  },
  {
    title: '1.2.0 - Dropdown Replacement & Bug Fixes',
    date: 'August 3rd, 2024',
    updates: {
      add: ['Feedback button to settings page'],
      update: ['Replace dropdown for category select/filter with modal'],
      fix: ['Help messages displaying at the incorrect time', 'Filter to empty list caused incorrect UI'],
    },
  },
  {
    title: '1.1.10 - Initial Release',
    date: 'July 18th, 2024',
    updates: {
      add: ['Create a Category', 'Create an Idea', 'Reflect on recorded Ideas', 'Backup & Restore'],
      update: [],
      fix: [],
    },
  },
]

const UpdateComponent = ({ title, date, updates }: Update) => {
  // Flatten updates to a single array of { type, text }
  const flatUpdates: { type: UpdateType; text: string }[] = []
  ;(['add', 'update', 'fix'] as UpdateType[]).forEach((type: UpdateType) => {
    updates[type].forEach((text: string) => {
      flatUpdates.push({ type, text })
    })
  })

  return (
    <Box>
      <Typography>
        <strong>{title}</strong>
      </Typography>
      <Typography>
        <time>{date}</time>
      </Typography>
      <List>
        {flatUpdates.map((item) => (
          <ListItem key={item.type + item.text}>
            {LABELS[item.type]}: {item.text}
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

const LandingPage = () => {
  const [isReleaseNotesOpen, setIsReleaseNotesOpen] = useState(false)
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false)

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', p: 3 }}>
      <Box sx={{ mb: 4 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            mb: 3,
          }}
        >
          <Box>
            <Image src="/marketing-resources/ideas_down/favicon.png" alt="App Screenshot" width={75} height={75} />
          </Box>
          <Box>
            <Typography variant="h2" gutterBottom>
              {IDEAS_TITLE}
            </Typography>
            <Typography variant="h5" color="text.secondary">
              {IDEAS_DESCRIPTION}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Typography sx={{ mb: 4, fontSize: '1.1rem', lineHeight: 1.6 }}>
        Do you find it hard to keep track of your creative ideas? Do they slip away or consume your focus? Ideas Down
        lets you capture them instantly—no logins, no complicated setup, and no internet needed. Data stays on your
        device and the app is fully open source.
      </Typography>

      <Box
        sx={{
          mb: 4,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
          alignItems: 'flex-start',
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" gutterBottom>
            <strong>Ideate</strong>
          </Typography>
          <Typography>Create a new category or choose from an existing one, and start ideating.</Typography>
        </Box>
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <BlurHashImage maxHeight={80} priority={true} src="/marketing-resources/ideas_down/ideate.png" alt="Ideate" />
        </Box>
      </Box>

      <Box
        sx={{
          mb: 4,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
          alignItems: 'flex-start',
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" gutterBottom>
            <strong>Reflect</strong>
          </Typography>
          <Typography>
            Keep all your ideas in one place, organized by date and category. Use filters to focus on specific topics.
          </Typography>
        </Box>
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <BlurHashImage
            maxHeight={80}
            priority={false}
            src="/marketing-resources/ideas_down/reflect.png"
            alt="Reflect"
          />
        </Box>
      </Box>

      <Box
        sx={{
          mb: 4,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
          alignItems: 'flex-start',
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" gutterBottom>
            <strong>Privacy & Security First</strong>
          </Typography>
          <List>
            <ListItem>No internet connection required</ListItem>
            <ListItem>No login needed</ListItem>
            <ListItem>Ideas remain on your device</ListItem>
            <ListItem>
              Fully Open Source (
              <Link type="inline" target="_blank" href="https://github.com/TravisBumgarner/ideas-down-quickly">
                GitHub
              </Link>
              )
            </ListItem>
            <ListItem>Perform your own backups</ListItem>
          </List>
        </Box>
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <BlurHashImage
            maxHeight={80}
            priority={false}
            src="/marketing-resources/ideas_down/settings.png"
            alt="Settings"
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          gap: 2,
          mb: 4,
          flexWrap: 'wrap',
        }}
      >
        <Box>
          <Link
            type="block"
            target="_blank"
            href="https://apps.apple.com/us/app/ideas-down-quickly/id6529524065?platform=iphone"
          >
            App Store
          </Link>
        </Box>
        <Box>
          <Link
            type="block"
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSftglI15-9coi2P1Tx_QaZitHYrSMvVilQKn6_BB1t_3V3nvg/viewform?usp=sf_link"
          >
            Play Store Internal Testing
          </Link>
        </Box>
      </Box>

      <Typography variant="h3" gutterBottom sx={{ mt: 4 }}>
        Contact
      </Typography>
      <ContactForm subject="Ideas Down Feedback" />

      <Box sx={{ mt: 4 }}>
        <Typography
          variant="h4"
          onClick={() => setIsReleaseNotesOpen(!isReleaseNotesOpen)}
          sx={{
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            userSelect: 'none',
            '&:hover': { opacity: 0.7 },
            mb: 1,
          }}
        >
          Release Notes
          <Box sx={{ ml: 1, display: 'flex', alignItems: 'center' }}>
            {isReleaseNotesOpen ? <FaChevronUp /> : <FaChevronDown />}
          </Box>
        </Typography>
        <Collapse in={isReleaseNotesOpen}>
          <Box sx={{ pl: 2 }}>
            {UPDATES.map((update) => (
              <UpdateComponent key={update.title + update.date} {...update} />
            ))}
          </Box>
        </Collapse>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography
          variant="h4"
          onClick={() => setIsPrivacyPolicyOpen(!isPrivacyPolicyOpen)}
          sx={{
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            userSelect: 'none',
            '&:hover': { opacity: 0.7 },
            mb: 1,
          }}
        >
          Privacy Policy
          <Box sx={{ ml: 1, display: 'flex', alignItems: 'center' }}>
            {isPrivacyPolicyOpen ? <FaChevronUp /> : <FaChevronDown />}
          </Box>
        </Typography>
        <Collapse in={isPrivacyPolicyOpen}>
          <Box sx={{ pl: 2 }}>
            <Typography>
              <strong>Effective Date: July 10th, 2024</strong>
            </Typography>

            <Typography>
              Welcome to Ideas Down (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). Your privacy is
              important to us. This Privacy Policy outlines how we handle your information. Importantly, Ideas Down does
              not collect, store, or process any personal data from its users.
            </Typography>

            <Typography variant="h4">1. Information We Do Not Collect</Typography>
            <Typography>
              At Ideas Down, we are committed to maintaining your privacy. We do not collect, store, or process any
              personal data, including but not limited to:
            </Typography>
            <List>
              <ListItem>Personal Identification Information (such as name, email address, or phone number)</ListItem>
              <ListItem>Location Information</ListItem>
              <ListItem>Usage Data</ListItem>
              <ListItem>Device Information</ListItem>
              <ListItem>Payment Information</ListItem>
            </List>
            <Typography variant="h4">2. Data Retention</Typography>
            <Typography>
              Since we do not collect any personal data, we do not retain any information about you or your activities.
            </Typography>

            <Typography variant="h4">3. Third-Party Services</Typography>
            <Typography>
              Ideas Down does not integrate with any third-party services that would collect your data. Our app is
              designed to operate independently without needing to share or transfer any information about you to third
              parties.
            </Typography>

            <Typography variant="h4">4. Cookies and Tracking Technologies</Typography>
            <Typography>
              We do not use cookies, web beacons, or any other tracking technologies to collect information about your
              usage or behavior within the app.
            </Typography>

            <Typography variant="h4">5. Security</Typography>
            <Typography>
              Even though we do not collect personal data, we take security seriously. We employ standard security
              measures to ensure that the app itself remains secure and free from vulnerabilities.
            </Typography>

            <Typography variant="h4">6. Children&apos;s Privacy</Typography>
            <Typography>
              Ideas Down does not knowingly collect or solicit any personal information from anyone under the age of 13.
              If we become aware that we have collected personal information from a child under 13, we will take steps
              to delete such information promptly.
            </Typography>

            <Typography variant="h4">7. Changes to This Privacy Policy</Typography>
            <Typography>
              We may update this Privacy Policy from time to time. Any changes will be posted in this section with the
              revised date. We encourage you to review this Privacy Policy periodically to stay informed about how we
              are protecting your information.
            </Typography>

            <Typography variant="h4">8. Contact Us</Typography>
            <Typography>
              If you have any questions or concerns about this Privacy Policy, please contact us at the form listed
              above.
            </Typography>
          </Box>
        </Collapse>
      </Box>

      <Box sx={{ height: 64 }} />

      <Box
        sx={{
          position: 'fixed',
          top: 10,
          right: 10,
          fontSize: 12,
          color: '#888',
          display: 'flex',
          gap: 1,
        }}
      >
        <Link type="inline" href="https://apps.apple.com/us/app/ideas-down-quickly/id6529524065?platform=iphone">
          <FaApple size={40} />
        </Link>
        <Link type="inline" href="https://github.com/TravisBumgarner/ideas-down-quickly">
          <FaGithub size={40} />
        </Link>
      </Box>
    </Box>
  )
}

export default LandingPage
