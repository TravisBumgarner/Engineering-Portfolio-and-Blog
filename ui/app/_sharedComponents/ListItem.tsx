'use client'

import { FONT_SIZES, FONT_WEIGHTS, SPACING } from '@/lib/styles/consts'
import { SHARED_SPACING } from '@/lib/styles/theme'
import Link from 'next/link'
import styled from 'styled-components'
import BlurHashImage from './BlurHashImage'

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
        .map((paragraph, index) => <p key={index}>{paragraph}</p>)

  if (!link) {
    return (
      <StyledListItem>
        {title && (smallTitle ? <p>{title}</p> : <h2>{title}</h2>)}
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
        {paragraphs && <p>{paragraphs}</p>}
        {src && priority !== undefined && (
          <BlurHashImage priority={priority} src={src} />
        )}
      </StyledListItem>
    )
  }

  return (
    <Link href={link} style={{ textDecoration: 'none' }}>
      <StyledListItem>
        <div>
          <div>
            {title && (smallTitle ? <p>{title}</p> : <h2>{title}</h2>)}
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
      </StyledListItem>
    </Link>
  )
}

const StyledListItem = styled.div`
  ${SHARED_SPACING}
  display: flex;
  background-color: var(--secondary-background);
  color: var(--foreground);
  flex-direction: column;
  text-decoration: none;
  margin-bottom: ${SPACING.LARGE};

  > div {
    margin-bottom: ${SPACING.MEDIUM};
    display: flex;
    gap: ${SPACING.SMALL};
    flex-direction: column;
  }

  h2 {
    font-size: ${FONT_SIZES.LARGE};
    font-weight: ${FONT_WEIGHTS.BOLD};
    margin-top: 0;
    margin-bottom: ${SPACING.SMALL};
  }

  time {
    display: block;
    font-size: ${FONT_SIZES.SMALL};
    font-weight: ${FONT_WEIGHTS.LIGHT};
  }
`

export default ListItem
