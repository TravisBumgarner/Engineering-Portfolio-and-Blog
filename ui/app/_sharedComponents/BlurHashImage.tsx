import blurhashes from '@/app/_content/blurhashes/index.json'
import useBlurhash from '@/app/_hooks/useBlurHash'
import { BlurHash } from '@/lib/types'
import { useInView } from 'motion/react'
import { useCallback, useMemo, useRef, useState } from 'react'
import { StyledImage } from './BlurHashImage.client'

interface Props {
  src: string
}

const getBlurHash = (src: string) => {
  // This works because __STATIC__ always includes a public in the url.
  const relativePath = src.split('/public')[1]

  const result = blurhashes[relativePath as keyof typeof blurhashes] as BlurHash

  if (!result) {
    // Shame me for this code!
    console.error('missing blurhash', relativePath)
    return {
      blurHash: '',
      width: 0,
      height: 0
    }
  }

  return result
}

const BlurHashImage = ({ src }: Props) => {
  const imgRef = useRef<HTMLImageElement>(null)
  const [imgLoaded, setImgLoaded] = useState(false)
  const startLoadingBlurHash = useInView(imgRef, {
    margin: '0px 0px 500px 0px',
    once: true
  })

  const startLoadingImage = useInView(imgRef, {
    margin: '0px 0px 100px 0px',
    once: true
  })

  const { width, height, blurHash } = useMemo(() => {
    return getBlurHash(src)
  }, [src])

  const blurUrl = useBlurhash(
    !imgLoaded && startLoadingBlurHash ? blurHash : null,
    // Large sizes will kill performance.
    32,
    Math.round(32 * (height / width))
  )

  const handleOnLoad = useCallback(() => {
    setImgLoaded(true)
  }, [])

  return (
    <StyledImage
      $width={width}
      $height={height}
      $blurUrl={blurUrl}
      ref={imgRef}
      {...(startLoadingImage || imgLoaded ? { src } : {})}
      loading={startLoadingImage ? 'eager' : 'lazy'}
      onLoad={handleOnLoad}
    />
  )
}



export default BlurHashImage
