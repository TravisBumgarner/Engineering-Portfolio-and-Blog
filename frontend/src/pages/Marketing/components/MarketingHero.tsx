import { Box, Typography } from '@mui/material'
import type { ReactNode } from 'react'
import Link from '../../../sharedComponents/Link'
import { SPACING, subtleBackground } from '../../../styles/consts'

interface CTA {
  label: string
  href: string
  icon?: ReactNode
}

interface MarketingHeroProps {
  icon: string
  title: string
  tagline: string
  ctas: CTA[]
}

const MarketingHero = ({ icon, title, tagline, ctas }: MarketingHeroProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        mb: SPACING.LARGE.PX,
        backgroundColor: ({ palette }) => subtleBackground(palette.mode, 'slightly'),
        padding: SPACING.MEDIUM.PX,
      }}
    >
      <Box sx={{ mb: SPACING.MEDIUM.PX }}>
        <img
          src={icon}
          alt={`${title} icon`}
          style={{
            width: 100,
            height: 100,
            objectFit: 'contain',
          }}
        />
      </Box>
      <Typography variant="h1">{title}</Typography>
      <Typography
        sx={{
          mb: SPACING.MEDIUM.PX,
          fontSize: '1.1rem',
          opacity: 0.8,
        }}
      >
        {tagline}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: SPACING.SMALL.PX,
          justifyContent: 'center',
        }}
      >
        {ctas.map((cta) => (
          <Link key={cta.href} type="block" target="_blank" href={cta.href}>
            {cta.icon && (
              <Box component="span" sx={{ mr: 1, display: 'inline-flex', alignItems: 'center' }}>
                {cta.icon}
              </Box>
            )}
            {cta.label}
          </Link>
        ))}
      </Box>
    </Box>
  )
}

export default MarketingHero
