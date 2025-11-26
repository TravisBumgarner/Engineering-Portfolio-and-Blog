'use client'

import { FONT_SIZES, SPACING } from '@/lib/styles/consts'
import Link from '@/lib/sharedComponents/Link'
import BlurHashImage from './BlurHashImage'
import { Typography, Box } from '@mui/material'

const dateLabelLookup = {
  post: 'Posted ',
  creation: 'Last Updated ',
  snapshot: ''
}

const formatDateByType = (
  date: string,
  type: 'post' | 'creation' | 'snapshot'
) => {
  if (type === 'post') {
    return new Date(date + 'T00:00:00Z')
      .toUTCString()
      .split(' ')
      .slice(0, 4)
      .join(' ')
  } else if (type === 'creation') {
    return new Date(date + 'T00:00:00Z').toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      timeZone: 'UTC'
    })
  } else {
    return null
  }
}

const ItemPreview = ({
  src,
  link,
  title,
  description,
  date,
  priority,
  type,
}: {
  src: string
  link?: string
  title?: string
  description?: string
  date?: string
  priority: boolean
  type: 'post' | 'creation' | 'snapshot'
}) => {
  const paragraphs = !description
    ? null
    : description
      .split('\n')
      .map((paragraph, index) => <Typography key={index}>{paragraph}</Typography>)

  return (

    <Box
      sx={{
        padding: SPACING.SMALL.PX,
        display: 'flex',
        backgroundColor: 'background.paper',
        flexDirection: 'column',
        marginBottom: SPACING.LARGE.PX,
        gap: SPACING.SMALL.PX,
      }}
    >

      {!!title && (<Typography variant="h2" sx={{ margin: 0 }}>{title}</Typography>)}
      {!!date && (
        <time style={{
          display: 'block',
          fontSize: FONT_SIZES.SMALL.PX,
        }}>
          {dateLabelLookup[type]}
          {formatDateByType(date, type)}
        </time>
      )}
      {paragraphs}
      <BlurHashImage maxHeight={70} priority={priority} src={src} />
      {link && <Link type="block" href={link}>Learn more</Link>}
    </Box >
  )
}

export default ItemPreview
