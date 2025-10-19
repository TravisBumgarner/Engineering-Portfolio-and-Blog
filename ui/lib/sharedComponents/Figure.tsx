'use client'

import { FONT_SIZES, SPACING } from '@/lib/styles/consts'
import BlurHashImage from './BlurHashImage'

type FigureProps = {
  src: string
  caption: string
}

const Figure = ({ src, caption }: FigureProps) => {
  return (
    <figure
      style={{
        backgroundColor: 'var(--secondary-background)',
        color: 'var(--foreground)',
        padding: SPACING.MEDIUM
      }}
    >
      <BlurHashImage priority={false} src={src} alt={caption} />
      <figcaption
        style={{
          fontSize: FONT_SIZES.SMALL,
          fontWeight: 100,
          marginTop: SPACING.SMALL
        }}
      >
        {caption}
      </figcaption>
    </figure>
  )
}

export default Figure
