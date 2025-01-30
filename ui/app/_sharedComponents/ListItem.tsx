
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
`

export const SnapshotWrapper = styled.div<{ $isLink?: boolean }>`
  > img {
    height: auto;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    max-height: 60vh;
    object-fit: cover;
    object-position: top;
  }
`


export default ListItem
