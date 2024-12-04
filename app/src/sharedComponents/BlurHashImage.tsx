import { useInView } from 'framer-motion'
import React, { useCallback, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'
import { blurHashLookup } from '../blurHashLookup'
import useBlurhash from '../hooks/useBlurHash'

interface Props {
  src: string
}

const getBlurHash = (src: string) => {
  // This works because __STATIC__ always includes a public in the url.
  const relativePath = src.split('/public')[1]

  const result = blurHashLookup[relativePath as keyof typeof blurHashLookup]

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

const StyledImage = styled.img<{
  $blurUrl: string | null
  $width: number
  $height: number
}>`
  width: 100%;
  aspect-ratio: ${props => props.$width / props.$height};
  display: block;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  ${props =>
    props.$blurUrl &&
    `
      background-image: url(${props.$blurUrl});
      background-size: contain;
      background-repeat-no-repeat;
  `}
`

export default BlurHashImage
