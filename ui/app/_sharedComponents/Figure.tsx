
import BlurHashImage from './BlurHashImage'
import { FigureWrapper } from './Figure.client'

type FigureProps = {
  src: string
  caption: string
}

const Figure = ({ src, caption }: FigureProps) => {
  return (
    <FigureWrapper>
      <BlurHashImage priority={false} maxWidthPercent='100' src={`/post-resources/${src}`} alt={caption} />
      <figcaption>{caption}</figcaption>
    </FigureWrapper>
  )
}

export default Figure
