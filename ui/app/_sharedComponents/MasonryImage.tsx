
import BlurHashImage from './BlurHashImage'
import { SnapshotWrapper, StyledLink, StyledText } from './MasonryImage.client'

const MasonryImage = ({
  src,
  link,
  text,
  date
}: {
  src: string
  link?: string
  text?: string
  date?: string
}) => {
  
  if (!link) {
    return (
      <SnapshotWrapper>
        <BlurHashImage src={src} />
        <StyledText>{text}</StyledText>
      </SnapshotWrapper>
    )
  }

  return (
    <StyledLink href={link}>
      <SnapshotWrapper $isLink>
        <BlurHashImage src={src} />
        <div>
          <StyledText>{text}</StyledText>
          {date && <time>{date}</time>}
        </div>
      </SnapshotWrapper>
    </StyledLink>
  )
}


export default MasonryImage
