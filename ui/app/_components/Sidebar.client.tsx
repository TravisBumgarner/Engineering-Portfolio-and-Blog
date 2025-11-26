'use client'

import ROUTES from '@/lib/routes'
import { SPACING, Z_INDICES } from '@/lib/styles/consts'
import { AnimatePresence } from 'motion/react'
import Link from 'next/link'
import { useState } from 'react'
import { SocialIcon } from 'react-social-icons'
import { Box, Drawer, IconButton, Backdrop } from '@mui/material'
import { GiHamburgerMenu } from 'react-icons/gi'

const SOCIAL_MEDIA = [
  { title: 'GitHub', path: 'https://github.com/travisBumgarner/', target: '_blank', icon: 'github' },
  { title: 'LinkedIn', path: 'https://www.linkedin.com/in/travisbumgarner/', target: '_blank', icon: 'linkedin' },
  { title: 'Instagram', path: 'https://instagram.com/sillysideprojects', target: '_blank', icon: 'instagram' },
  { title: 'Reddit', path: 'https://www.reddit.com/user/travis_the_maker/', target: '_blank', icon: 'reddit' },
  { title: 'Bluesky', path: 'https://bsky.app/profile/travisbumgarner.dev', target: '_blank', icon: 'bsky.app' },
  { title: 'YouTube', path: 'https://www.youtube.com/@SillySideProjects', target: '_blank', icon: 'youtube' }
]

const THERE = [
  { title: 'Resume', path: '/travis_bumgarner_resume.pdf', target: '_blank' },
  { title: 'Photography', path: 'https://travisbumgarner.photography', target: '_blank' }
]

interface ItemProps {
  title: string
  path: string
  target: string
  onClick: () => void
}

const Item = ({ title, path, target, onClick }: ItemProps) => (
  <Link
    href={path}
    target={target}
    scroll
    style={{ textDecoration: 'none' }}
  >
    <Box
      sx={{
        m: `${SPACING.SMALL.PX} 0`,
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)',
        cursor: 'pointer',
        p: '4px 0',
        '&:hover': { color: 'var(--primary)' }
      }}
      onClick={onClick}
    >
      {title}
    </Box>
  </Link>
)

const SidebarClient = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <Backdrop
            open
            onClick={() => setIsOpen(false)}
            sx={{
              zIndex: Z_INDICES.SIDEBAR_BACKDROP,
            }}
          />
        )}
      </AnimatePresence>

      <Box
        sx={{
          zIndex: 1000,
          position: 'fixed',
          top: SPACING.SMALL.PX,
          left: SPACING.SMALL.PX
        }}
      >
        <IconButton onClick={() => setIsOpen(true)}>
          <GiHamburgerMenu size={30} />
        </IconButton>
      </Box>

      <Drawer
        anchor="left"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: 190,
              backgroundColor: 'var(--secondary-background)',
              p: SPACING.SMALL.PX,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }
          }
        }}
      >
        <Box sx={{ mb: SPACING.MEDIUM.PX }}>
          {Object.values(ROUTES).map(r => (
            <Item
              key={r.path}
              title={r.title}
              path={r.path}
              target={r.target}
              onClick={() => setIsOpen(false)}
            />
          ))}

          {THERE.map(r => (
            <Item
              key={r.path}
              title={r.title}
              path={r.path}
              target={r.target}
              onClick={() => setIsOpen(false)}
            />
          ))}
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {SOCIAL_MEDIA.map(s => (
            <SocialIcon
              key={s.path}
              bgColor="transparent"
              fgColor="var(--foreground)"
              url={s.path}
              network={s.icon}
              title={s.title}
            />
          ))}
        </Box>
      </Drawer>
    </>
  )
}

export default SidebarClient
