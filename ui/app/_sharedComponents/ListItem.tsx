import { MAX_LIST_WIDTH } from '@/lib/consts'
import { FONT_SIZES, FONT_WEIGHTS, SPACING, THEME } from '@/lib/theme'
import Link from 'next/link'
import styled from 'styled-components'
import BlurHashImage from './BlurHashImage'

const ListItem = ({
  src,
  link,
  title,
  description,
  date,
  priority
}: {
  src?: string
  link?: string
  title?: string
  description?: string
  date?: string
  priority?: boolean
}) => {
  if (!link) {
    return (
      <StyledListItem>
        {title && <h2>{title}</h2>}
        {date && <time>{date}</time>}
        {description && <p>{description}</p>}
        {src && priority !== undefined && (
          <BlurHashImage priority={priority} src={src} grayscale />
        )}
      </StyledListItem>
    )
  }

  return (
    <Link href={link} style={{ textDecoration: 'none' }}>
      <StyledListItem>
        {title && <h2>{title}</h2>}
        {date && <time>{date}</time>}
        {description && <p>{description}</p>}
        {src && priority !== undefined && (
          <BlurHashImage priority={priority} src={src} grayscale />
        )}
      </StyledListItem>
    </Link>
  )
}

const StyledListItem = styled.div`
  width: ${MAX_LIST_WIDTH};
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  background-color: ${THEME.SECONDARY_BACKGROUND_COLOR};
  color: ${THEME.FOREGROUND_COLOR};
  flex-direction: column;
  text-decoration: none;
  margin-bottom: ${SPACING.LARGE};
  padding: ${SPACING.MEDIUM};
  gap: ${SPACING.MEDIUM};

  h2 {
    font-size: ${FONT_SIZES.MEDIUM};
    font-weight: ${FONT_WEIGHTS.REGULAR};
    margin-top: 0;
  }

  time {
    display: block;
    font-size: ${FONT_SIZES.XSMALL};
    font-weight: ${FONT_WEIGHTS.LIGHT};
  }
`

export default ListItem
