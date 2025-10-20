'use client'

import BlurHashImage from '@/lib/sharedComponents/BlurHashImage'
import ContactForm from '@/lib/sharedComponents/ContactForm'
import ContentStyler from '@/lib/sharedComponents/ContentStyler'
import { SPACING } from '@/lib/styles/consts'
import Link from 'next/link'
import styled from 'styled-components'

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

const LandingPage = () => {
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
            <img
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

      <p>
        <a
          target="_blank"
          href="https://apps.apple.com/us/app/ideas-down-quickly/id6529524065?platform=iphone"
        >
          App Store
        </a>
        {' | '}
        <a
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSftglI15-9coi2P1Tx_QaZitHYrSMvVilQKn6_BB1t_3V3nvg/viewform?usp=sf_link"
        >
          Play Store Internal Testing
        </a>
      </p>

      <strong>Contact</strong>
      <ContactForm subject="Ideas Down Feedback" />
      <div style={{ height: SPACING.XLARGE }} />
    </ContentStyler>
  )
}

export default LandingPage
