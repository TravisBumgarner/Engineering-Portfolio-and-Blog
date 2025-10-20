'use client'

import { SPACING } from '@/lib/styles/consts'
import styled from 'styled-components'
import Link from 'next/link'
import { FaApple, FaGithub } from 'react-icons/fa'
import { useState } from 'react'
import MarketingLink from '@/lib/sharedComponents/MarketingLink'
import BlurHashImage from '@/lib/sharedComponents/BlurHashImage'
import ContactForm from '@/lib/sharedComponents/ContactForm'
import ContentStyler from '@/lib/sharedComponents/ContentStyler'
import Image from 'next/image'

type UpdateType = 'add' | 'update' | 'fix'
type Update = {
  title: string
  date: string
  updates: Record<UpdateType, string[]>
}

const LABELS: Record<UpdateType, string> = {
  add: 'Add',
  update: 'Update',
  fix: 'Fix'
}

const UPDATES: Update[] = [
  {
    title: '1.3.0 - Small Improvements',
    date: 'August 27th, 2024',
    updates: {
      add: ['Feedback request'],
      update: [
        'Cancel button behavior when adding an idea after creating a category'
      ],
      fix: ['Keyboard not dismissible when trying to delete database']
    }
  },
  {
    title: '1.2.0 - Dropdown Replacement & Bug Fixes',
    date: 'August 3rd, 2024',
    updates: {
      add: ['Feedback button to settings page'],
      update: ['Replace dropdown for category select/filter with modal'],
      fix: [
        'Help messages displaying at the incorrect time',
        'Filter to empty list caused incorrect UI'
      ]
    }
  },
  {
    title: '1.1.10 - Initial Release',
    date: 'July 18th, 2024',
    updates: {
      add: [
        'Create a Category',
        'Create an Idea',
        'Reflect on recorded Ideas',
        'Backup & Restore'
      ],
      update: [],
      fix: []
    }
  }
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
    <div>
      <p>
        <strong>{title}</strong>
      </p>
      <p>
        <time>{date}</time>
      </p>
      <ul>
        {flatUpdates.map((item, idx) => (
          <li key={item.type + item.text + idx}>
            {LABELS[item.type]}: {item.text}
          </li>
        ))}
      </ul>
    </div>
  )
}

const Section = styled.div`
  display: flex;
  gap: 2rem;
  margin: 2rem 0;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
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

const CollapsibleHeader = styled.h3<{ $isOpen: boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  user-select: none;

  &:hover {
    opacity: 0.7;
  }

  &::after {
    content: '${props => (props.$isOpen ? '▼' : '▶')}';
    margin-left: 0.5rem;
    font-size: 0.8em;
  }
`

const CollapsibleContent = styled.div<{ $isOpen: boolean }>`
  overflow: hidden;
  transition: max-height 0.3s ease-out;
  max-height: ${props => (props.$isOpen ? '2000px' : '0')};
`

const LandingPage = () => {
  const [isReleaseNotesOpen, setIsReleaseNotesOpen] = useState(false)
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false)

  return (
    <ContentStyler>
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: SPACING.SMALL
          }}
        >
          <div>
            <Image
              src="/marketing-resources/ideas_down/favicon.png"
              alt="App Screenshot"
              width={75}
              height={75}
            />
          </div>
          <div>
            <h2>Ideas Down</h2>
            <p>Clear your mind and make room for your next big idea.</p>
          </div>
        </div>
      </div>

      <p>
        Do you find it hard to keep track of your creative ideas? Do they slip
        away or consume your focus? Ideas Down lets you capture them
        instantly—no logins, no complicated setup, and no internet needed. Data
        stays on your device and the app is fully open source.
      </p>

      <Section>
        <TextColumn>
          <p>
            <strong>Ideate</strong>
          </p>
          <p>
            Create a new category or choose from an existing one, and start
            ideating.
          </p>
        </TextColumn>
        <ImageColumn>
          <BlurHashImage
            maxHeight={80}
            priority={true}
            src="/marketing-resources/ideas_down/ideate.png"
            alt="Ideate"
          />
        </ImageColumn>
      </Section>

      <Section>
        <TextColumn>
          <p>
            <strong>Reflect</strong>
          </p>
          <p>
            Keep all your ideas in one place, organized by date and category.
            Use filters to focus on specific topics.
          </p>
        </TextColumn>
        <ImageColumn>
          <BlurHashImage
            maxHeight={80}
            priority={false}
            src="/marketing-resources/ideas_down/reflect.png"
            alt="Reflect"
          />
        </ImageColumn>
      </Section>

      <Section>
        <TextColumn>
          <p>
            <strong>Privacy & Security First</strong>
          </p>
          <ul>
            <li>No internet connection required</li>
            <li>No login needed</li>
            <li>Ideas remain on your device</li>
            <li>
              Fully Open Source (
              <a
                target="_blank"
                href="https://github.com/TravisBumgarner/ideas-down-quickly"
              >
                GitHub
              </a>
              )
            </li>
            <li>Perform your own backups</li>
          </ul>
        </TextColumn>
        <ImageColumn>
          <BlurHashImage
            maxHeight={80}
            priority={false}
            src="/marketing-resources/ideas_down/settings.png"
            alt="Settings"
          />
        </ImageColumn>
      </Section>

      <div
        style={{
          display: 'flex',
          gap: SPACING.MEDIUM
        }}
      >
        <div>
          <MarketingLink
            target="_blank"
            href="https://apps.apple.com/us/app/ideas-down-quickly/id6529524065?platform=iphone"
          >
            App Store
          </MarketingLink>
        </div>
        <div>
          <MarketingLink
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSftglI15-9coi2P1Tx_QaZitHYrSMvVilQKn6_BB1t_3V3nvg/viewform?usp=sf_link"
          >
            Play Store Internal Testing
          </MarketingLink>
        </div>
      </div>

      <h3>Contact</h3>
      <ContactForm subject="Ideas Down Feedback" />

      <CollapsibleHeader
        $isOpen={isReleaseNotesOpen}
        onClick={() => setIsReleaseNotesOpen(!isReleaseNotesOpen)}
      >
        Release Notes
      </CollapsibleHeader>
      <CollapsibleContent $isOpen={isReleaseNotesOpen}>
        {UPDATES.map(update => (
          <UpdateComponent key={update.title + update.date} {...update} />
        ))}
      </CollapsibleContent>

      <CollapsibleHeader
        $isOpen={isPrivacyPolicyOpen}
        onClick={() => setIsPrivacyPolicyOpen(!isPrivacyPolicyOpen)}
      >
        Privacy Policy
      </CollapsibleHeader>
      <CollapsibleContent $isOpen={isPrivacyPolicyOpen}>
        <p>
          <strong>Effective Date: July 10th, 2024</strong>
        </p>

        <p>
          Welcome to Ideas Down (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or
          &ldquo;us&rdquo;). Your privacy is important to us. This Privacy
          Policy outlines how we handle your information. Importantly, Ideas
          Down does not collect, store, or process any personal data from its
          users.
        </p>

        <h4>1. Information We Do Not Collect</h4>
        <p>
          At Ideas Down, we are committed to maintaining your privacy. We do not
          collect, store, or process any personal data, including but not
          limited to:
        </p>
        <ul>
          <li>
            Personal Identification Information (such as name, email address, or
            phone number)
          </li>
          <li>Location Information</li>
          <li>Usage Data</li>
          <li>Device Information</li>
          <li>Payment Information</li>
        </ul>

        <h4>2. Data Retention</h4>
        <p>
          Since we do not collect any personal data, we do not retain any
          information about you or your activities.
        </p>

        <h4>3. Third-Party Services</h4>
        <p>
          Ideas Down does not integrate with any third-party services that would
          collect your data. Our app is designed to operate independently
          without needing to share or transfer any information about you to
          third parties.
        </p>

        <h4>4. Cookies and Tracking Technologies</h4>
        <p>
          We do not use cookies, web beacons, or any other tracking technologies
          to collect information about your usage or behavior within the app.
        </p>

        <h4>5. Security</h4>
        <p>
          Even though we do not collect personal data, we take security
          seriously. We employ standard security measures to ensure that the app
          itself remains secure and free from vulnerabilities.
        </p>

        <h4>6. Children&apos;s Privacy</h4>
        <p>
          Ideas Down does not knowingly collect or solicit any personal
          information from anyone under the age of 13. If we become aware that
          we have collected personal information from a child under 13, we will
          take steps to delete such information promptly.
        </p>

        <h4>7. Changes to This Privacy Policy</h4>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted in this section with the revised date. We encourage you to
          review this Privacy Policy periodically to stay informed about how we
          are protecting your information.
        </p>

        <h4>8. Contact Us</h4>
        <p>
          If you have any questions or concerns about this Privacy Policy,
          please contact us at the form listed above.
        </p>
      </CollapsibleContent>

      <div style={{ height: SPACING.XLARGE }} />

      <div
        style={{
          position: 'fixed',
          top: 10,
          right: 10,
          fontSize: 12,
          color: '#888'
        }}
      >
        <Link href="https://apps.apple.com/us/app/ideas-down-quickly/id6529524065?platform=iphone">
          <FaApple size={40} />
        </Link>
        <Link href="https://github.com/TravisBumgarner/ideas-down-quickly">
          <FaGithub size={40} />
        </Link>
      </div>
    </ContentStyler>
  )
}

export default LandingPage
