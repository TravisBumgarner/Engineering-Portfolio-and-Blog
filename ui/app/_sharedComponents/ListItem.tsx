import { FONT_SIZES, SPACING, THEME } from '@/lib/theme'
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
  link: string
  title: string
  description?: string
  date: string
  priority: boolean
}) => {
  return (
    <StyledListItem href={link}>
      <h2>{title}</h2>
      <time>{date}</time>
      {description && <p>{description}</p>}
      {src && <BlurHashImage priority={priority} src={src} grayscale />}
    </StyledListItem>
  )
}

const StyledListItem = styled.a`
  display: block;
  background-color: ${THEME.SECONDARY_BACKGROUND_COLOR};
  color: ${THEME.FOREGROUND_COLOR};
  text-decoration: none;
  margin-bottom: ${SPACING.XXLARGE};
  padding: ${SPACING.MEDIUM};

  > * {
    margin-bottom: ${SPACING.MEDIUM};
  }

  h2 {
    font-size: ${FONT_SIZES.MEDIUM};
    font-weight: 400;
    margin-top: 0;
  }

  time {
    display: block;
    font-size: ${FONT_SIZES.XSMALL};
    font-weight: 100;
  }
`

export default ListItem
