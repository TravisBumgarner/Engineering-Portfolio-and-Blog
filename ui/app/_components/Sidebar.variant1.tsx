'use client'

import ROUTES from '@/lib/routes'
import { SPACING } from '@/lib/theme'
import { motion } from 'framer-motion'
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

const SidebarClient = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Positioner>
      <Wrapper>
        
        <motion.div>
          <motion.ul
            initial={{ transform: 'scale(0)' }}
            animate={{ transform: isOpen ? 'scale(1)' : 'scale(0)' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {Object.values(ROUTES).map(r => (
              <Box key={r.path}>
                <Link href={r.path}>{r.title}</Link>
              </Box>
            ))}
          </motion.ul>
          <Hamburger onClick={() => setIsOpen(!isOpen)} />
          <motion.ul
            initial={{ transform: 'scale(0)' }}
            animate={{ transform: isOpen ? 'scale(1)' : 'scale(0)' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {THERE.map(t => (
              <Box key={t.path}>
                <Link target={t.target} href={t.path}>
                  {t.title}
                </Link>
              </Box>
            ))}
          </motion.ul>
        </motion.div>
      </Wrapper>
    </Positioner>
  )
}

const Box = styled.li`
  padding: 0 10px;
  height: 50px;
  margin: ${SPACING.XSMALL} 0;
  background-color: var(--secondary-background);
  color: var(--foreground);
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
    color: var(--primary);
  }
`

const Positioner = styled.div`
  position: fixed;
  padding: 10px;
  top: 0;
  left: 0;
  height: 100%;
  align-content: center;
`

const Wrapper = styled(motion.div)`
  background: var(--primary-background-color);
  padding: 10px;
`

export default SidebarClient
