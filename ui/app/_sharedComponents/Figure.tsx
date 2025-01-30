'use client'

import { FONT_SIZES, SPACING, THEME } from '@/lib/theme'
import BlurHashImage from './BlurHashImage'

type FigureProps = {
  src: string
  caption: string
}

const Figure = ({ src, caption }: FigureProps) => {
  return (
    <figure
      style={{
        backgroundColor: THEME.SECONDARY_BACKGROUND_COLOR,
        color: THEME.FOREGROUND_COLOR,
        padding: SPACING.MEDIUM
      }}
    >
      <BlurHashImage priority={false} src={src} alt={caption} />
      <figcaption style={{fontSize: FONT_SIZES.SMALL, fontWeight: 100, marginTop: SPACING.SMALL}}>{caption}</figcaption>
    </figure>
  )
}

export default Figure
