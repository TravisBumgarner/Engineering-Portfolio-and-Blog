
import BlurHashImage from './BlurHashImage'
import { SnapshotWrapper, StyledLink } from './MasonryImage.client'

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
        <p>{text}</p>
      </SnapshotWrapper>
    )
  }

  return (
    <StyledLink href={link}>
      <SnapshotWrapper $isLink>
        <BlurHashImage src={src} />
        <div>
          <p>{text}</p>
          {date && <time>{date}</time>}
        </div>
      </SnapshotWrapper>
    </StyledLink>
  )
}



export default MasonryImage
