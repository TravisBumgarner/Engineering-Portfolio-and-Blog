import { ROUTES } from '@common/core'
import { Backdrop, Box, Drawer, IconButton, Stack, Tooltip } from '@mui/material'
import { AnimatePresence } from 'motion/react'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import Icon from '../sharedComponents/Icon'
import Link from '../sharedComponents/Link'
import { SPACING, Z_INDICES } from '../styles/consts'

const SOCIAL_MEDIA = [
  { title: 'GitHub', href: 'https://github.com/travisBumgarner/', target: '_blank', icon: 'github' },
  { title: 'LinkedIn', href: 'https://www.linkedin.com/in/travisbumgarner/', target: '_blank', icon: 'linkedin' },
  { title: 'Instagram', href: 'https://instagram.com/sillysideprojects', target: '_blank', icon: 'instagram' },
  { title: 'Reddit', href: 'https://www.reddit.com/user/travis_the_maker/', target: '_blank', icon: 'reddit' },
  { title: 'Bluesky', href: 'https://bsky.app/profile/travisbumgarner.dev', target: '_blank', icon: 'bsky' },
  { title: 'YouTube', href: 'https://www.youtube.com/@SillySideProjects', target: '_blank', icon: 'youtube' },
] as const

const THERE = [
  { title: 'Resume', href: '/travis_bumgarner_resume.pdf', target: '_blank' },
  { title: 'Photography', href: 'https://travisbumgarner.photography', target: '_blank' },
]

const ROUTES_TO_DISPLAY: (keyof typeof ROUTES)[] = ['SNAPSHOTS', 'WORK_WITH_ME', 'CREATIONS', 'BLOG', 'MARKETING']

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
          left: SPACING.SMALL.PX,
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
              justifyContent: 'space-between',
            },
          },
        }}
      >
        <Stack direction="column" spacing={SPACING.TINY.PX}>
          {ROUTES_TO_DISPLAY.map((key) => {
            const r = ROUTES[key as keyof typeof ROUTES]
            return (
              <Box key={r.href}>
                <Link type="inlineMenu" {...r} onClick={() => setIsOpen(false)}>
                  {' '}
                  {r.title}
                </Link>
              </Box>
            )
          })}

          {THERE.map((r) => (
            <Box key={r.href}>
              <Link type="inlineMenu" {...r} onClick={() => setIsOpen(false)}>
                {r.title}
              </Link>
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
          {SOCIAL_MEDIA.map((s) => (
            <Tooltip key={s.href} title={s.title} placement="top">
              <Box sx={{ margin: SPACING.SMALL.PX }}>
                <Link type="inlineMenu" key={s.href} href={s.href} target={s.target} rel="noopener noreferrer">
                  <Icon name={s.icon} size={32} />
                </Link>
              </Box>
            </Tooltip>
          ))}
        </Box>
      </Drawer>
    </>
  )
}

export default SidebarClient
