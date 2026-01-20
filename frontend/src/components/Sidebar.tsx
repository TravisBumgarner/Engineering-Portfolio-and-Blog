import { ROUTES } from '@common/core'
import { Backdrop, Box, Drawer, IconButton, Stack, Typography, useMediaQuery } from '@mui/material'
import { useSignals } from '@preact/signals-react/runtime'
import { AnimatePresence } from 'motion/react'
import { GiHamburgerMenu } from 'react-icons/gi'
import Link from '../sharedComponents/Link'
import { isSidebarOpen, toggleSidebar } from '../signals'
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
]

// Generic reusable section component
const Section = ({
  title,
  links,
  onLinkClick,
}: {
  title: string
  links: Array<{ title: string; href: string; target?: string }>
  onLinkClick?: () => void
}) => (
  <Box>
    <Typography variant="body1" sx={{ fontWeight: 400, mb: SPACING.TINY.PX, mt: 0 }}>
      {title}
    </Typography>
    <Stack direction="column" spacing={SPACING.TINY.PX}>
      {links.map((link) => (
        <Link
          key={link.href}
          sx={{ fontWeight: 100 }}
          type="inlineMenu"
          href={link.href}
          target={link.target}
          rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
          onClick={onLinkClick}
        >
          {link.title}
        </Link>
      ))}
    </Stack>
  </Box>
)

// Reusable sidebar content component
const SidebarContent = ({ onLinkClick }: { onLinkClick?: () => void }) => (
  <Stack direction="column" spacing={SPACING.LARGE.PX}>
    <Section title="Work" links={WORK_LINKS} onLinkClick={onLinkClick} />
    <Section title="Creative" links={CREATIVE_LINKS} onLinkClick={onLinkClick} />
    <Section title="Socials" links={SOCIAL_MEDIA} onLinkClick={onLinkClick} />
  </Stack>
)

const SidebarClient = () => {
  useSignals()
  const isDesktop = useMediaQuery(`(min-width:1100px)`)

  if (isDesktop) {
    // Desktop persistent sidebar - return null as we'll render it in the App component
    return null
  }

  // Mobile drawer sidebar
  return (
    <>
      <AnimatePresence>
        {isSidebarOpen.value && (
          <Backdrop
            open
            onClick={toggleSidebar}
            sx={{
              zIndex: Z_INDICES.SIDEBAR_BACKDROP,
            }}
          />
        )}
      </AnimatePresence>

      <Drawer
        anchor="left"
        open={isSidebarOpen.value}
        onClose={toggleSidebar}
        slotProps={{
          paper: {
            sx: {
              width: 190,
              backgroundColor: 'background.paper',
              p: `${SPACING.HUGE.PX} ${SPACING.MEDIUM.PX} ${SPACING.MEDIUM.PX} ${SPACING.MEDIUM.PX}`,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            },
          },
        }}
      >
        <SidebarContent onLinkClick={toggleSidebar} />
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
        position: 'sticky',
        top: 0,
        width: 240,
        height: '100vh',
        p: SPACING.SMALL.PX,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <SidebarContent />
    </Box>
  )
}

export default SidebarClient
