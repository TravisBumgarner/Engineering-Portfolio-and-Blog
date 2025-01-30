
import BlurHashImage from './BlurHashImage'

type FigureProps = {
  src: string
  caption: string
}

const Figure = ({ src, caption }: FigureProps) => {
  return (
    <div>
      <BlurHashImage priority={false} src={src} alt={caption} />
      <figcaption>{caption}</figcaption>
    </div>
  )
}

export default Figure
