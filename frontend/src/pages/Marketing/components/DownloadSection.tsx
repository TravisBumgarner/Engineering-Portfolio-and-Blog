import { Box, Typography } from '@mui/material'
import type { ReactNode } from 'react'
import Link from '../../../sharedComponents/Link'
import { SPACING } from '../../../styles/consts'

interface Platform {
  platform: 'macos' | 'windows' | 'linux' | 'ios' | 'android' | 'steam' | 'web'
  label: string
  href: string
  available: boolean
  icon?: ReactNode
}

interface DownloadSectionProps {
  platforms: Platform[]
  title?: string
}

const DownloadSection = ({ platforms, title = 'Get Started' }: DownloadSectionProps) => {
  return (
    <Box sx={{ mb: SPACING.LARGE.PX }}>
      <Typography variant="h3" sx={{ mb: SPACING.MEDIUM.PX }}>
        {title}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: SPACING.SMALL.PX,
          alignItems: 'center',
        }}
      >
        {platforms.map((platform) =>
          platform.available ? (
            <Link key={platform.platform} type="block" target="_blank" href={platform.href}>
              {platform.icon && (
                <Box component="span" sx={{ mr: 1, display: 'inline-flex', alignItems: 'center' }}>
                  {platform.icon}
                </Box>
              )}
              {platform.label}
            </Link>
          ) : (
            <Typography key={platform.platform} sx={{ opacity: 0.6, fontStyle: 'italic' }}>
              {platform.label} - Coming soon
            </Typography>
          )
        )}
      </Box>
    </Box>
  )
}

export default DownloadSection
