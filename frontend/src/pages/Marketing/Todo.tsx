import { TODO_FAVICON, TODO_IMAGE } from '@common/core'
import { Box, Typography } from '@mui/material'
import { FaApple, FaLinux, FaWindows } from 'react-icons/fa'
import BlurHashImage from '../../sharedComponents/BlurHashImage'
import ContactForm from '../../sharedComponents/ContactForm'
import Link from '../../sharedComponents/Link'
import { SPACING } from '../../styles/consts'
import { BenefitsList, DownloadSection, MarketingHero } from './components'

const MAC_DOWNLOAD_URL = 'https://github.com/TravisBumgarner/Todo-Today/releases/latest/download/Todo-Today-darwin.dmg'
const WINDOWS_DOWNLOAD_URL =
  'https://github.com/TravisBumgarner/Todo-Today/releases/latest/download/Todo-Today-win32-x64-setup.exe'
const DEBIAN_UBUNTU_DOWNLOAD_URL =
  'https://github.com/TravisBumgarner/Todo-Today/releases/latest/download/todo-today-linux-x64.deb'

const BENEFITS = [
  'Focus on today: No past or future clutter',
  'Simple ordering: Drag and drop your priorities',
  'Notes and subtasks: Add details when you need them',
  'Distraction-free: No timers, workspaces, or extra features',
  'Local data: Everything stays on your computer',
  'Free and open source',
]

const TodoToday = () => {
  return (
    <>
      <MarketingHero
        icon={TODO_FAVICON}
        title="Todo Today"
        tagline="The todo list for the easily distracted"
        ctas={[
          { label: 'macOS (Apple Silicon)', href: MAC_DOWNLOAD_URL, icon: <FaApple /> },
          { label: 'Windows (64-bit)', href: WINDOWS_DOWNLOAD_URL, icon: <FaWindows /> },
          { label: 'Linux (.deb)', href: DEBIAN_UBUNTU_DOWNLOAD_URL, icon: <FaLinux /> },
        ]}
      />

      <Typography sx={{ mb: SPACING.LARGE.PX, fontSize: '1.1rem', lineHeight: 1.6 }}>
        Todo Today isn't about the past or the future—it's about right now. Focus on what matters today. Set your tasks,
        order them, and add notes or subtasks. Nothing more, nothing less.
      </Typography>

      <Box sx={{ mb: SPACING.LARGE.PX }}>
        <BlurHashImage src={TODO_IMAGE} alt="Todo Today app interface" />
      </Box>

      <BenefitsList title="Why Todo Today?" items={BENEFITS} />

      <DownloadSection
        platforms={[
          {
            platform: 'macos',
            label: 'macOS (Apple Silicon)',
            href: MAC_DOWNLOAD_URL,
            available: true,
            icon: <FaApple />,
          },
          {
            platform: 'windows',
            label: 'Windows (64-bit)',
            href: WINDOWS_DOWNLOAD_URL,
            available: true,
            icon: <FaWindows />,
          },
          {
            platform: 'linux',
            label: 'Linux (.deb)',
            href: DEBIAN_UBUNTU_DOWNLOAD_URL,
            available: true,
            icon: <FaLinux />,
          },
        ]}
      />

      <Box sx={{ mb: SPACING.LARGE.PX }}>
        <Typography variant="h3" sx={{ mb: SPACING.MEDIUM.PX }}>
          Contact
        </Typography>
        <ContactForm subject="Todo Today Feedback" />
      </Box>

      <Box sx={{ display: 'flex', gap: SPACING.MEDIUM.PX, flexWrap: 'wrap', opacity: 0.8, fontSize: '0.9rem' }}>
        <Link type="inline" target="_blank" href="https://github.com/TravisBumgarner/Todo-Today/releases">
          Release Notes
        </Link>
      </Box>
    </>
  )
}

export default TodoToday
