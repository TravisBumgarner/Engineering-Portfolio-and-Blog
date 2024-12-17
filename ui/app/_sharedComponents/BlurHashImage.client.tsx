'use client'

import blurhashes from '@/content/blurhashes/index.json'
import useBlurhash from '@/lib/hooks/useBlurHash'
import { BlurHash } from '@/lib/types'
import { useInView } from 'framer-motion'
import { useCallback, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'


interface Props {
  src: string
}

const getBlurHash = (src: string) => {
  // This works because __STATIC__ always includes a public in the url.
  // const relativePath = src.split('/public')[1]

  const result = blurhashes[src as keyof typeof blurhashes] as BlurHash

  if (!result) {
    // Shame me for this code!
    console.error('missing blurhash', src)
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

const StyledImage = styled.img<{
  $blurUrl: string | null
  $width: number
  $height: number
}>`
  width: 100%;
  aspect-ratio: ${props => props.$width / props.$height};
  display: block;

  ${props =>
    props.$blurUrl &&
    `
      background-image: url(${props.$blurUrl});
      background-size: contain;
      background-repeat-no-repeat;
  `}
`

export default BlurHashImage
