'use client'

import { FONT_SIZES, SPACING } from '@/lib/styles/consts'
import Link from 'next/link'
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

const ListItem = ({
  src,
  link,
  title,
  description,
  date,
  priority,
  type,
}: {
  src?: string
  link?: string
  title?: string
  description?: string
  date?: string
  priority?: boolean
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
        padding: SPACING.MEDIUM.PX,
        display: 'flex',
        backgroundColor: 'var(--secondary-background)',
        color: 'var(--foreground)',
        flexDirection: 'column',
        textDecoration: 'none',
        marginBottom: SPACING.LARGE.PX,
      }}
    >
      <Box>
        {title && (<Typography sx={{
          fontSize: FONT_SIZES.LARGE,
          marginTop: 0,
          marginBottom: SPACING.SMALL.PX,
        }} variant="h2">{title}</Typography>)}
        {date && (
          <time style={{
            display: 'block',
            fontSize: FONT_SIZES.SMALL.PX,
          }}>
            {dateLabelLookup[type]}
            {formatDateByType(date, type)}
          </time>
        )}
      </Box>
      {paragraphs}
      {src && priority !== undefined && (
        <BlurHashImage priority={priority} src={src} />
      )}
      {link && <Link href={link} style={{ textDecoration: 'none' }}>Click me</Link>}
    </Box>
  )
}

export default ListItem
