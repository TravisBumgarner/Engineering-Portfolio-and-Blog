
import { BACKGROUND_COLOR, FOREGROUND_COLOR, SPACING } from '@/lib/theme'
import styled from 'styled-components'
import BlurHashImage from './BlurHashImage'

const ListItem = ({
  src,
  link,
  text,
  date,
  priority,
}: {
  src: string
  link?: string
  text?: string
  date?: string
  priority: boolean
}) => {
  return (
    <a href={link}>
      <SnapshotWrapper $isLink>
        <div>
          <StyledText>{text}</StyledText>
          {date && <time>{date}</time>}
        </div>
        <BlurHashImage priority={priority} src={src} />
      </SnapshotWrapper>
    </a>
  )
}

export const StyledText = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 700;
`

export const SnapshotWrapper = styled.div<{ $isLink?: boolean }>`
  box-sizing: border-box;
  background-color: ${FOREGROUND_COLOR};
  border: 5px solid ${FOREGROUND_COLOR};

  > img {
    height: auto;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    max-height: 60vh;
    object-fit: cover;
    object-position: top;
  }

  div {
    color: ${BACKGROUND_COLOR};
    padding: ${SPACING.MEDIUM}px;
  }

  time {
    font-size: 0.8em;
    color: color-mix(in srgb, ${BACKGROUND_COLOR} 80%, transparent);
  }
`


export default ListItem
