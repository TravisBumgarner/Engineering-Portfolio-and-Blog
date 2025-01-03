
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
        <StyledText>{text}</StyledText>
        <BlurHashImage src={src} />
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
        <BlurHashImage src={src} />
      </SnapshotWrapper>
    </StyledLink>
  )
}


export default MasonryImage
