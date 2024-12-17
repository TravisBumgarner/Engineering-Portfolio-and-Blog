
import { FigureWrapper } from './Figure.client'

type FigureProps = {
  src: string
  caption: string
}

const Figure = ({ src, caption }: FigureProps) => {
  return (
    <FigureWrapper>
      <img src={`${process.env.NEXT_PUBLIC_STATIC_PATH}/posts/${src}`} alt={caption} />
      <figcaption>{caption}</figcaption>
    </FigureWrapper>
  )
}

export default Figure
