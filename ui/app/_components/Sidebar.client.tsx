'use client'

import ROUTES from '@/lib/routes'
import { SPACING } from '@/lib/theme'
import Link from 'next/link'
import { useState } from 'react'
import styled from 'styled-components'
import Hamburger from '../_sharedComponents/Hamburger'

const THERE = [
  {
    title: 'Resume',
    path: '/travis_bumgarner_resume.pdf',
    target: '_blank'
  },
  {
    title: 'LinkedIn',
    path: 'https://www.linkedin.com/in/travisbumgarner/',
    target: '_blank'
  },
  {
    title: 'Github',
    path: 'https://github.com/travisBumgarner/',
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
    <Link  scroll={true} style={{ textDecoration: 'none' }} target={target} href={path}>
      <Box onClick={onClick}>{title}</Box>
    </Link>
  )
}

const SidebarClient = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {isOpen && <Overlay onClick={() => setIsOpen(false)} />}
    <Positioner>
      <Hamburger onClick={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <Wrapper>
          <div>
          {Object.values(ROUTES).map(r => (
            <Item
              onClick={() => setIsOpen(false)}
              key={r.path}
              title={r.title}
              path={r.path}
              target={r.target}
            />
          ))}
          </div>
          <div>
            {THERE.map(r => (
              <Item
                onClick={() => setIsOpen(false)}
                key={r.path}
                title={r.title}
                path={r.path}
              target={r.target}
              />
            ))}
          </div>
        </Wrapper>
      )}
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
  z-index: 999;
  margin-top: ${SPACING.MEDIUM};
  > div {
    margin-bottom: ${SPACING.LARGE};
  }
`

const Box = styled.div`
  width: 120px;
  height: 40px;
  margin: ${SPACING.XXSMALL} 0;
  background-color: var(--secondary-background);
  color: var(--foreground);

  text-align: left;
  padding-left: 17px;
  padding-right: 17px;
  align-content: center;

  &:hover {
    color: var(--primary);
  }

  a {
    text-decoration: none;
    color: var(--foreground);
  }
`

const Positioner = styled.div`
  z-index: 999;
  position: fixed;
  top: ${SPACING.SMALL};
  left: ${SPACING.SMALL};

  @media (max-width: 900px) {
    top: ${SPACING.SMALL};
    left: ${SPACING.SMALL};
  }
`

export default SidebarClient
