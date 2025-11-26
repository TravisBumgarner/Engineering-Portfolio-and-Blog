'use client'

import { FONT_SIZES, FONT_WEIGHTS, SPACING } from '@/lib/styles/consts'
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
  smallTitle
}: {
  src?: string
  link?: string
  title?: string
  description?: string
  date?: string
  priority?: boolean
  type: 'post' | 'creation' | 'snapshot'
  smallTitle?: boolean
}) => {
  const paragraphs = !description
    ? null
    : description
      .split('\n')
      .map((paragraph, index) => <Typography key={index}>{paragraph}</Typography>)

  if (!link) {
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
          '& > div': {
            marginBottom: SPACING.MEDIUM.PX,
            display: 'flex',
            gap: SPACING.SMALL.PX,
            flexDirection: 'column',
          },
          '& h2': {
            fontSize: FONT_SIZES.LARGE,
            fontWeight: FONT_WEIGHTS.BOLD,
            marginTop: 0,
            marginBottom: SPACING.SMALL.PX,
          },
          '& time': {
            display: 'block',
            fontSize: FONT_SIZES.SMALL,
            fontWeight: FONT_WEIGHTS.LIGHT,
          },
        }}
      >
        {title && (smallTitle ? <Typography>{title}</Typography> : <Typography variant="h2">{title}</Typography>)}
        {date && (
          <time>
            {dateLabelLookup[type]}
            {new Date(date + 'T00:00:00Z')
              .toUTCString()
              .split(' ')
              .slice(0, 4)
              .join(' ')}
          </time>
        )}
        {paragraphs && <Typography>{paragraphs}</Typography>}
        {src && priority !== undefined && (
          <BlurHashImage priority={priority} src={src} />
        )}
      </Box>
    )
  }

  return (
    <Link href={link} style={{ textDecoration: 'none' }}>
      <Box
        sx={{
          padding: SPACING.MEDIUM.PX,
          display: 'flex',
          backgroundColor: 'var(--secondary-background)',
          color: 'var(--foreground)',
          flexDirection: 'column',
          textDecoration: 'none',
          marginBottom: SPACING.LARGE.PX,
          '& > div': {
            marginBottom: SPACING.MEDIUM.PX,
            display: 'flex',
            gap: SPACING.SMALL.PX,
            flexDirection: 'column',
          },
          '& h2': {
            fontSize: FONT_SIZES.LARGE,
            fontWeight: FONT_WEIGHTS.BOLD,
            marginTop: 0,
            marginBottom: SPACING.SMALL.PX,
          },
          '& time': {
            display: 'block',
            fontSize: FONT_SIZES.SMALL,
            fontWeight: FONT_WEIGHTS.LIGHT,
          },
        }}
      >
        <div>
          <div>
            {title && (smallTitle ? <Typography>{title}</Typography> : <Typography variant="h2">{title}</Typography>)}
            {date && (
              <time>
                {dateLabelLookup[type]}
                {formatDateByType(date, type)}
              </time>
            )}
          </div>
          {paragraphs}
        </div>
        {src && priority !== undefined && (
          <BlurHashImage priority={priority} src={src} />
        )}
      </Box>
    </Link>
  )
}

export default ListItem
