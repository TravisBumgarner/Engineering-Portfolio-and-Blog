import {
  FONT_SIZES,
  FONT_WEIGHTS,
  LIST_SIZING,
  SPACING,
  THEME
} from '@/lib/theme'
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
          <BlurHashImage priority={priority} src={src} />
        )}
      </StyledListItem>
    )
  }

  return (
    <Link href={link} style={{ textDecoration: 'none' }}>
      <StyledListItem>
        <div>
          {title && <h2>{title}</h2>}
          {date && <time>{date}</time>}
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
  ${LIST_SIZING}
  display: flex;
  background-color: ${THEME.SECONDARY_BACKGROUND_COLOR};
  color: ${THEME.FOREGROUND_COLOR};
  flex-direction: column;
  text-decoration: none;
  margin-bottom: ${SPACING.LARGE};
  padding: ${SPACING.MEDIUM};

  div {
    margin-bottom: ${SPACING.MEDIUM};
  }

  h2 {
    font-size: ${FONT_SIZES.LARGE};
    font-weight: ${FONT_WEIGHTS.BOLD};
    margin-top: 0;
  }

  time {
    display: block;
    font-size: ${FONT_SIZES.SMALL};
    font-weight: ${FONT_WEIGHTS.LIGHT};
  }
`

export default ListItem
