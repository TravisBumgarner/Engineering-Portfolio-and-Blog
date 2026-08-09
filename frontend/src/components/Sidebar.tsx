import { CANDLELIGHT_TITLE, IDEAS_TITLE, ROUTES, TODO_TITLE } from '@common/core'
import { Backdrop, Box, Drawer, Stack, Typography } from '@mui/material'
import { useSignals } from '@preact/signals-react/runtime'
import { AnimatePresence } from 'motion/react'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { useLocation } from 'react-router-dom'
import Link from '../sharedComponents/Link'
import { isSidebarOpen, toggleSidebar } from '../signals'
import { SPACING, Z_INDICES } from '../styles/consts'

// Helper function to determine if a link is active
const isLinkActive = (linkHref: string, currentPath: string): boolean => {
  // Exact match for external links or non-nested routes
  if (linkHref.startsWith('http') || linkHref === currentPath) {
    return linkHref === currentPath
  }

  // For internal routes, check if current path starts with the link href
  // This handles nested routes like /blog and /blog/post-id
  return currentPath.startsWith(linkHref) && linkHref !== '/'
}

// Work section
// Internal links pull their label from ROUTES so there's one source of truth.
// External links and files aren't in ROUTES, so they stay literal.
const WORK_LINKS = [
  { title: ROUTES.CREATIONS.title, href: ROUTES.CREATIONS.href },
  { title: ROUTES.WORK_WITH_ME.title, href: ROUTES.WORK_WITH_ME.href },
  { title: 'Resume', href: '/travis_bumgarner_resume.pdf', target: '_blank' },
  { title: 'GitHub', href: 'https://github.com/travisBumgarner/', target: '_blank', icon: 'github' },
  { title: 'LinkedIn', href: 'https://www.linkedin.com/in/travisbumgarner/', target: '_blank', icon: 'linkedin' },
]

// Home section
// Deliberately not ROUTES.SNAPSHOTS.title ('Photo Journal'). In the nav this is
// the home link, and the page names itself on the page.
const HOME_LINK = [{ title: 'Home', href: ROUTES.SNAPSHOTS.href }]

// Creative section
const CREATIVE_LINKS = [
  { title: ROUTES.BLOG.title, href: ROUTES.BLOG.href },
  { title: 'Photography', href: 'https://travisbumgarner.photography', target: '_blank' },
  { title: 'Creative Podcast', href: 'https://happymaking.art/', target: '_blank' },
]

// Social media section
const SOCIAL_MEDIA = [
  { title: 'Bluesky', href: 'https://bsky.app/profile/travisbumgarner.dev', target: '_blank', icon: 'bsky' },
  { title: 'Instagram', href: 'https://instagram.com/sillysideprojects', target: '_blank', icon: 'instagram' },
  { title: 'Reddit', href: 'https://www.reddit.com/user/travis_the_maker/', target: '_blank', icon: 'reddit' },
  { title: 'YouTube', href: 'https://www.youtube.com/@SillySideProjects', target: '_blank', icon: 'youtube' },
]

// Product names, not the route titles ('Candlelight Marketing Page' etc.), which
// are internal labels rather than anything a visitor should read.
const MARKETING_PAGES = [
  { title: CANDLELIGHT_TITLE, href: ROUTES.MARKETING_CANDLELIGHT.href },
  { title: IDEAS_TITLE, href: ROUTES.MARKETING_IDEAS.href },
  { title: TODO_TITLE, href: ROUTES.MARKETING_TODO.href },
]

// Generic reusable section component
const Section = ({
  title,
  links,
  onLinkClick,
  currentPath,
}: {
  title: string
  links: Array<{ title: string; href: string; target?: string }>
  onLinkClick?: () => void
  currentPath: string
}) => (
  <Box>
    {title && (
      <Typography variant="body1" sx={{ fontWeight: 700, mb: SPACING.TINY.PX, mt: 0 }}>
        {title}
      </Typography>
    )}
    <Stack direction="column" spacing={SPACING.TINY.PX}>
      {links.map((link) => {
        const isActive = isLinkActive(link.href, currentPath)
        return (
          <Link
            key={link.href}
            sx={{
              fontWeight: isActive ? 600 : title === '' ? 600 : 400,
              display: 'flex',
              alignItems: 'center',
              gap: SPACING.TINY.PX,
              color: isActive ? 'primary.main' : undefined,
              '&:hover': {
                color: isActive ? 'primary.main' : undefined,
              },
            }}
            type="inlineMenu"
            href={link.href}
            target={link.target}
            rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
            onClick={onLinkClick}
          >
            {link.title}
            {link.target === '_blank' && <HiOutlineExternalLink size={16} />}
          </Link>
        )
      })}
    </Stack>
  </Box>
)

// Reusable sidebar content component
const SidebarContent = ({ onLinkClick }: { onLinkClick?: () => void }) => {
  const location = useLocation()
  const currentPath = location.pathname

  return (
    <Stack direction="column" spacing={SPACING.LARGE.PX}>
      <Section title="" links={HOME_LINK} onLinkClick={onLinkClick} currentPath={currentPath} />
      <Section title="Work" links={WORK_LINKS} onLinkClick={onLinkClick} currentPath={currentPath} />
      <Section title="Creative" links={CREATIVE_LINKS} onLinkClick={onLinkClick} currentPath={currentPath} />
      <Section title="Marketing Pages" links={MARKETING_PAGES} onLinkClick={onLinkClick} currentPath={currentPath} />
      <Section title="Socials" links={SOCIAL_MEDIA} onLinkClick={onLinkClick} currentPath={currentPath} />
    </Stack>
  )
}

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
