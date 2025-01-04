
import BlurHashImage from './BlurHashImage'
import { SnapshotWrapper, StyledLink, StyledText } from './MasonryImage.client'

const MasonryImage = ({
  src,
  link,
  text,
  date,
  priority,
  totalColumns,
}: {
  src: string
  link?: string
  text?: string
  date?: string
  priority: boolean
  totalColumns: number
}) => {
  if (!link) {
    return (
      <SnapshotWrapper>
        <StyledText>{text}</StyledText>
        <BlurHashImage maxWidthPercent={totalColumns === 1 ? '100' : '50'} priority={priority} src={src} />
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
        <BlurHashImage maxWidthPercent={totalColumns === 1 ? '100' : '50'} priority={priority} src={src} />
      </SnapshotWrapper>
    </StyledLink>
  )
}


export default MasonryImage
