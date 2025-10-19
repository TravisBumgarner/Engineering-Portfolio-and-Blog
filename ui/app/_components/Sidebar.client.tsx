'use client'

import ROUTES from '@/lib/routes'
import { SPACING } from '@/lib/styles/consts'
import { motion, AnimatePresence } from 'motion/react'
import Link from 'next/link'
import { useState } from 'react'
import { SocialIcon } from 'react-social-icons'
import styled from 'styled-components'
import Hamburger from '../../lib/sharedComponents/Hamburger'

const SOCIAL_MEDIA = [
  {
    title: 'GitHub',
    path: 'https://github.com/travisBumgarner/',
    target: '_blank',
    icon: 'github'
  },
  {
    title: 'LinkedIn',
    path: 'https://www.linkedin.com/in/travisbumgarner/',
    target: '_blank',
    icon: 'linkedin'
  },
  {
    title: 'Instagram',
    path: 'https://instagram.com/sillysideprojects',
    target: '_blank',
    icon: 'instagram'
  },
  {
    title: 'Reddit',
    path: 'https://www.reddit.com/user/travis_the_maker/',
    target: '_blank',
    icon: 'reddit'
  },
  {
    title: 'Bluesky',
    path: 'https://bsky.app/profile/travisbumgarner.dev',
    target: '_blank',
    icon: 'bsky.app'
  },
  {
    title: 'YouTube',
    path: 'https://www.youtube.com/@SillySideProjects',
    target: '_blank',
    icon: 'youtube'
  }
]

const THERE = [
  {
    title: 'Resume',
    path: '/travis_bumgarner_resume.pdf',
    target: '_blank'
  },
  {
    title: 'Photography',
    path: 'https://travisbumgarner.photography',
    target: '_blank'
  }
]

type ItemProps = {
  title: string
  path: string
  target: string
  onClick: () => void
}

const Item = ({ title, path, target, onClick }: ItemProps) => {
  return (
    <Link
      scroll={true}
      style={{ textDecoration: 'none' }}
      target={target}
      href={path}
    >
      <Box onClick={onClick}>{title}</Box>
    </Link>
  )
}

const SidebarClient = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <Overlay
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
      <Positioner>
        <Hamburger onClick={() => setIsOpen(!isOpen)} />
        <AnimatePresence>
          {isOpen && (
            <Wrapper
              as={motion.div}
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div>
                {Object.values(ROUTES).map(r => (
                  <Item
                    key={r.path}
                    onClick={() => setIsOpen(false)}
                    title={r.title}
                    path={r.path}
                    target={r.target}
                  />
                ))}
                {THERE.map(r => (
                  <Item
                    key={r.path}
                    onClick={() => setIsOpen(false)}
                    title={r.title}
                    path={r.path}
                    target={r.target}
                  />
                ))}
              </div>
              <IconsWrapper>
                {SOCIAL_MEDIA.map(r => (
                  <SocialIcon
                    bgColor="transparent"
                    fgColor="var(--foreground)"
                    url={r.path}
                    network={r.icon}
                    title={r.title}
                  />
                ))}
              </IconsWrapper>
            </Wrapper>
          )}
        </AnimatePresence>
      </Positioner>
    </>
  )
}

const Overlay = styled.div`
  background-color: var(--background-blur);
  backdrop-filter: blur(1px);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 998;
`

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  height: 100vh;
  background-color: var(--secondary-background);
  z-index: 999;
  padding: ${SPACING.SMALL};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);

  > div {
    margin-bottom: ${SPACING.MEDIUM};
  }

  .social-icon:hover {
    .social-svg-icon {
      fill: var(--primary) !important;
    }
  }
`

const IconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 150px;

  > * {
    background-color: var(--background);
    border-radius: 50%;
  }
`

const Box = styled.div`
  margin: ${SPACING.XSMALL} 0;
  background-color: var(--background);
  color: var(--foreground);
  align-content: center;
  cursor: pointer;

  &:hover {
    color: var(--primary);
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

const Positioner = styled.div`
  z-index: 1000;
  position: fixed;
  top: ${SPACING.SMALL};
  left: ${SPACING.SMALL};

  @media (max-width: 900px) {
    top: ${SPACING.SMALL};
    left: ${SPACING.SMALL};
  }
`

export default SidebarClient
