'use client'

import { FONT_SIZES, FONT_WEIGHTS, SHARED_SPACING, SPACING } from '@/lib/theme'
import Link from 'next/link'
import styled from 'styled-components'
import BlurHashImage from './BlurHashImage'

const ListItem = ({
  src,
  link,
  title,
  description,
  date,
  priority,
  type
}: {
  src?: string
  link?: string
  title?: string
  description?: string
  date?: string
  priority?: boolean
  type: 'post' | 'creation'
}) => {
  if (!link) {
    return (
      <StyledListItem>
        {title && <h2>{title}</h2>}
        <time>
          {type === 'post' ? 'Posted ' : 'Last Updated '}
          {new Date(date + 'T00:00:00Z')
            .toUTCString()
            .split(' ')
            .slice(0, 4)
            .join(' ')}
        </time>
        {description && <p>{description}</p>}
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
            {title && <h2>{title}</h2>}
            <time>
              {type === 'post' ? 'Posted ' : 'Last Updated '}
              {new Date(date + 'T00:00:00Z')
                .toUTCString()
                .split(' ')
                .slice(0, 4)
                .join(' ')}
            </time>
          </div>
          {description && <p>{description}</p>}
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
