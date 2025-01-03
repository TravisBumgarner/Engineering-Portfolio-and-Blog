
import BlurHashImage from './BlurHashImage'
import { SnapshotWrapper, StyledLink, StyledText } from './MasonryImage.client'

const MasonryImage = ({
  src,
  link,
  text,
  date,
  priority
}: {
  src: string
  link?: string
  text?: string
  date?: string
  priority: boolean
}) => {
  if (!link) {
    return (
      <SnapshotWrapper>
        <StyledText>{text}</StyledText>
        <BlurHashImage priority={priority} src={src} />
      </SnapshotWrapper>
    )
  }

  return (
    <StyledLink href={link}>
      <SnapshotWrapper $isLink>
        <div>
          <StyledText>{text}</StyledText>
          {date && <time>{date}</time>}
        </div>
        <BlurHashImage priority={priority} src={src} />
      </SnapshotWrapper>
    </StyledLink>
  )
}


export default MasonryImage
