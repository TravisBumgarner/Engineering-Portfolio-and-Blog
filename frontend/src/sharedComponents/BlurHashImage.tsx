import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import { useInView } from 'framer-motion'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import blurhashes from '../content/blurhashes/index.json'
import { PALETTE, SPACING } from '../styles/consts'
import type { BlurHash } from '../types'
import { blurHashToDataURL } from '../utilities/blurhashDataURL'

const getBlurHash = (src: string) => {
  const result = blurhashes[src as keyof typeof blurhashes] as BlurHash

  if (!result) {
    // biome-ignore lint/suspicious/noConsole: Fine for now.
    console.error('missing blurhash', src)
    return {
      blurHash: '',
      width: 0,
      height: 0,
    }
  }

  return result
}

interface Props {
  src: string
  alt?: string
  loadingStartCallback?: () => void
  loadingEndCallback?: (src: string) => void
  maxDimensions?: { maxWidth?: string; maxHeight?: string }
  maxHeight?: number
  useBorder?: boolean
}

const BlurHashImage = ({
  src,
  alt,
  loadingStartCallback,
  loadingEndCallback,
  maxDimensions,
  maxHeight,
  useBorder = true,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const theme = useTheme()
  const { width, height, blurHash } = getBlurHash(src)
  const aspectRatio = width / height

  const isInView = useInView(containerRef, {
    margin: '0px 0px 100px 0px',
    once: true,
  })

  const [imageLoaded, setImageLoaded] = useState(false)
  const blurDataURL = useMemo(() => blurHashToDataURL(blurHash), [blurHash])

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true)
    loadingEndCallback?.(src)
  }, [loadingEndCallback, src])

  useEffect(() => {
    if (isInView) {
      loadingStartCallback?.()
    }
  }, [isInView, loadingStartCallback])

  // Check if image is very tall (aspect ratio < 0.6 means height is significantly larger than width)
  const isVeryTall = aspectRatio < 0.6
  const objectPosition = isVeryTall ? 'top' : 'center'
  const backgroundPosition = isVeryTall ? 'top' : 'center'

  return (
    <Box
      ref={containerRef}
      sx={{
        width: '100%',
        aspectRatio: aspectRatio.toString(),
        position: 'relative',
        overflow: 'hidden',

        maxHeight: maxHeight ? `${maxHeight}vh` : '90vh',
        ...maxDimensions,
        // Show blur hash as background
        backgroundImage: blurDataURL ? `url(${blurDataURL})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: backgroundPosition,
        backgroundRepeat: 'no-repeat',
      }}
    >
      {isInView && (
        <Box
          component="img"
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={handleImageLoad}
          sx={{
            backgroundColor: useBorder ? 'white' : 'transparent',
            border: useBorder
              ? `4px solid ${theme.palette.mode === 'light' ? PALETTE.grayscale[700] : PALETTE.grayscale[200]}`
              : 'none',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: objectPosition,
            padding: useBorder ? SPACING.SMALL.PX : 0,
            opacity: imageLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}
        />
      )}
    </Box>
  )
}

export default BlurHashImage
