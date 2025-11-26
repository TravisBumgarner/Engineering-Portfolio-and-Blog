'use client'

import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import { ABOUT_ME_SENTENCE_1, ABOUT_ME_SENTENCE_2 } from '@/lib/consts'
import Link from '@/lib/sharedComponents/Link'
import { SPACING } from '@/lib/styles/consts'

const SiteTitle = ({ title }: { title: string }) => {
  return (
    <Box
      sx={{
        py: SPACING.LARGE.PX,
        mt: { xs: SPACING.SMALL.PX, md: 0 },
      }}
    >
      <Link type="inline" href="/">
        <Typography variant="h1">{title}</Typography>
      </Link>
      <Typography>
        {ABOUT_ME_SENTENCE_1}
        <br />
        {ABOUT_ME_SENTENCE_2}
      </Typography>
    </Box>
  )
}

export default SiteTitle
