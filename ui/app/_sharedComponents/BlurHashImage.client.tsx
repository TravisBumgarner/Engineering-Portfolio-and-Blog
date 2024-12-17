'use client'

import useBlurhash from '@/lib/hooks/useBlurHash'
import { useInView } from 'framer-motion'
import { useCallback, useRef, useState } from 'react'
import styled from 'styled-components'


interface Props {
  src: string
  width: number
  height: number
  blurHash: string
}

const BlurHashImage = ({ src, width, height, blurHash }: Props) => {
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
