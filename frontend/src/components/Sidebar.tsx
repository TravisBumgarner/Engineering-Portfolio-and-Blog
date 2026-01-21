import { ROUTES } from '@common/core'
import { Backdrop, Box, Drawer, Stack, Typography } from '@mui/material'
import { useSignals } from '@preact/signals-react/runtime'
import { AnimatePresence } from 'motion/react'
import { HiOutlineExternalLink } from 'react-icons/hi'
import Link from '../sharedComponents/Link'
import { isSidebarOpen, toggleSidebar } from '../signals'
import { SPACING, Z_INDICES } from '../styles/consts'

// Work section
const WORK_LINKS = [
  { title: 'Portfolio', href: ROUTES.CREATIONS.href },
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

const MARKETING_PAGES = [
  { title: 'Candlelight', href: ROUTES.MARKETING_CANDLELIGHT.href },
  { title: 'Fast Classifieds', href: ROUTES.MARKETING_CLASSIFIEDS.href },
  { title: 'Ideas Down', href: ROUTES.MARKETING_IDEAS.href },
  { title: 'Todo Today', href: ROUTES.MARKETING_TODO.href },
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
    <Typography variant="body1" sx={{ fontWeight: 700, mb: SPACING.TINY.PX, mt: 0 }}>
      {title}
    </Typography>
    <Stack direction="column" spacing={SPACING.TINY.PX}>
      {links.map((link) => (
        <Link
          key={link.href}
          sx={{ fontWeight: 400, display: 'flex', alignItems: 'center', gap: SPACING.TINY.PX }}
          type="inlineMenu"
          href={link.href}
          target={link.target}
          rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
          onClick={onLinkClick}
        >
          {link.title}
          {link.target === '_blank' && <HiOutlineExternalLink size={16} />}
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
    <Section title="Marketing Pages" links={MARKETING_PAGES} onLinkClick={onLinkClick} />
    <Section title="Socials" links={SOCIAL_MEDIA} onLinkClick={onLinkClick} />
  </Stack>
)

const SidebarClient = ({ isDesktop }: { isDesktop: boolean }) => {
  useSignals()

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
export const DesktopSidebarContent = ({ isDesktop }: { isDesktop: boolean }) => {
  if (!isDesktop) return null

  return (
    <Box
      sx={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        p: `${SPACING.SMALL.PX} ${SPACING.LARGE.PX} ${SPACING.SMALL.PX} ${SPACING.SMALL.PX}`,
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
