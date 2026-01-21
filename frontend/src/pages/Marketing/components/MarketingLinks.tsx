import { Box } from '@mui/material'
import Link from '../../../sharedComponents/Link'
import { SPACING } from '../../../styles/consts'

interface MarketingLinksProps {
  links: {
    href: string
    label: string
  }[]
}

const MarketingLinks = ({ links }: MarketingLinksProps) => {
  return (
    <Box sx={{ display: 'flex', gap: SPACING.MEDIUM.PX, flexWrap: 'wrap', opacity: 0.8, fontSize: '0.9rem' }}>
      {links.map((link) => (
        <Link key={link.href} type="inline" target="_blank" href={link.href}>
          {link.label}
        </Link>
      ))}
    </Box>
  )
}

export default MarketingLinks
