import { ROUTES } from '@common/core'
import { Backdrop, Box, Drawer, IconButton, Stack, Typography, useMediaQuery } from '@mui/material'
import { AnimatePresence } from 'motion/react'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import Link from '../sharedComponents/Link'
import { SPACING, Z_INDICES } from '../styles/consts'

// Work section
const WORK_LINKS = [
  { title: 'Portfolio', href: ROUTES.CREATIONS.href },
  { title: 'Launch Pages', href: ROUTES.MARKETING.href },
  { title: 'Hire Me', href: ROUTES.WORK_WITH_ME.href },
  { title: 'Resume', href: '/travis_bumgarner_resume.pdf', target: '_blank' },
]

// Creative section
const CREATIVE_LINKS = [
  { title: 'Writing', href: ROUTES.BLOG.href },
  { title: 'Photo Journal', href: ROUTES.SNAPSHOTS.href },
  { title: 'Photography', href: 'https://travisbumgarner.photography', target: '_blank' },
]

// Social media section
const SOCIAL_MEDIA = [
  { title: 'Bluesky', href: 'https://bsky.app/profile/travisbumgarner.dev', target: '_blank', icon: 'bsky' },
  { title: 'GitHub', href: 'https://github.com/travisBumgarner/', target: '_blank', icon: 'github' },
  { title: 'Instagram', href: 'https://instagram.com/sillysideprojects', target: '_blank', icon: 'instagram' },
  { title: 'LinkedIn', href: 'https://www.linkedin.com/in/travisbumgarner/', target: '_blank', icon: 'linkedin' },
  { title: 'Reddit', href: 'https://www.reddit.com/user/travis_the_maker/', target: '_blank', icon: 'reddit' },
  { title: 'YouTube', href: 'https://www.youtube.com/@SillySideProjects', target: '_blank', icon: 'youtube' },
] as const

// Work section component
const WorkSection = ({ onLinkClick }: { onLinkClick?: () => void }) => (
  <Box>
    <Typography variant="body1" sx={{ fontWeight: 400, mb: SPACING.TINY.PX }}>
      Work
    </Typography>
    <Stack direction="column" spacing={SPACING.TINY.PX}>
      {WORK_LINKS.map((link) => (
        <Link
          key={link.href}
          sx={{ fontWeight: 100 }}
          type="inlineMenu"
          href={link.href}
          target={link.target}
          onClick={onLinkClick}
        >
          {link.title}
        </Link>
      ))}
    </Stack>
  </Box>
)

// Creative section component
const CreativeSection = ({ onLinkClick }: { onLinkClick?: () => void }) => (
  <Box>
    <Typography variant="body1" sx={{ fontWeight: 400, mb: SPACING.TINY.PX }}>
      Creative
    </Typography>
    <Stack direction="column" spacing={SPACING.TINY.PX}>
      {CREATIVE_LINKS.map((link) => (
        <Link
          key={link.href}
          sx={{ fontWeight: 100 }}
          type="inlineMenu"
          href={link.href}
          target={link.target}
          onClick={onLinkClick}
        >
          {link.title}
        </Link>
      ))}
    </Stack>
  </Box>
)

// Socials section component
const SocialsSection = ({ onLinkClick }: { onLinkClick?: () => void }) => (
  <Box>
    <Typography variant="body1" sx={{ fontWeight: 400, mb: SPACING.TINY.PX }}>
      Socials
    </Typography>
    <Stack direction="column" spacing={SPACING.TINY.PX}>
      {SOCIAL_MEDIA.map((s) => (
        <Link
          key={s.href}
          sx={{ fontWeight: 100 }}
          type="inlineMenu"
          href={s.href}
          target={s.target}
          rel="noopener noreferrer"
          onClick={onLinkClick}
        >
          {s.title}
        </Link>
      ))}
    </Stack>
  </Box>
)

// Reusable sidebar content component
const SidebarContent = ({ onLinkClick }: { onLinkClick?: () => void }) => (
  <Stack direction="column" spacing={SPACING.MEDIUM.PX}>
    <WorkSection onLinkClick={onLinkClick} />
    <CreativeSection onLinkClick={onLinkClick} />
    <SocialsSection onLinkClick={onLinkClick} />
  </Stack>
)

const SidebarClient = () => {
  const [isOpen, setIsOpen] = useState(false)
  const isDesktop = useMediaQuery(`(min-width:1100px)`)

  if (isDesktop) {
    // Desktop persistent sidebar - return null as we'll render it in the App component
    return null
  }

  // Mobile drawer sidebar
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
        <SidebarContent onLinkClick={() => setIsOpen(false)} />
      </Drawer>
    </>
  )
}

// Export the sidebar content for use in desktop layout
export const DesktopSidebarContent = () => {
  const isDesktop = useMediaQuery(`(min-width:1100px)`)

  if (!isDesktop) return null

  return (
    <Box
      sx={{
        position: 'fixed',
        top: '50%',
        left: 0,
        transform: 'translateY(-50%)',
        width: 190,
        p: SPACING.SMALL.PX,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flexShrink: 0,
        zIndex: 1,
      }}
    >
      <SidebarContent />
    </Box>
  )
}

export default SidebarClient
