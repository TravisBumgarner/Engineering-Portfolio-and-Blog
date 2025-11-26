'use client'

import ROUTES from '@/lib/routes'
import { SPACING, Z_INDICES } from '@/lib/styles/consts'
import { AnimatePresence } from 'motion/react'
import Link from '@/lib/sharedComponents/Link'
import { useState } from 'react'
import { SocialIcon } from 'react-social-icons'
import { Box, Drawer, IconButton, Backdrop, Stack } from '@mui/material'
import { GiHamburgerMenu } from 'react-icons/gi'

const SOCIAL_MEDIA = [
  { title: 'GitHub', href: 'https://github.com/travisBumgarner/', target: '_blank', icon: 'github' },
  { title: 'LinkedIn', href: 'https://www.linkedin.com/in/travisbumgarner/', target: '_blank', icon: 'linkedin' },
  { title: 'Instagram', href: 'https://instagram.com/sillysideprojects', target: '_blank', icon: 'instagram' },
  { title: 'Reddit', href: 'https://www.reddit.com/user/travis_the_maker/', target: '_blank', icon: 'reddit' },
  { title: 'Bluesky', href: 'https://bsky.app/profile/travisbumgarner.dev', target: '_blank', icon: 'bsky.app' },
  { title: 'YouTube', href: 'https://www.youtube.com/@SillySideProjects', target: '_blank', icon: 'youtube' }
]

const THERE = [
  { title: 'Resume', href: '/travis_bumgarner_resume.pdf', target: '_blank' },
  { title: 'Photography', href: 'https://travisbumgarner.photography', target: '_blank' }
]

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
          zIndex: Z_INDICES.SIDEBAR,
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
              backgroundColor: 'background.paper',
              p: SPACING.SMALL.PX,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }
          }
        }}
      >
        <Stack direction="column" spacing={SPACING.TINY.PX}>
          {Object.values(ROUTES).map(r => (
            <Box key={r.href}>
              <Link
                type="inline"
                {...r}
                onClick={() => setIsOpen(false)}
              >  {r.title}
              </Link>
            </Box>
          ))}

          {THERE.map(r => (
            <Box key={r.href}>
              <Link
                type='inline'
                {...r}
                onClick={() => setIsOpen(false)}
              >{r.title}</Link>
            </Box>
          ))}
        </Stack>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {SOCIAL_MEDIA.map(s => (
            <SocialIcon
              key={s.href}
              bgColor="transparent"
              fgColor="var(--foreground)"
              url={s.href}
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
