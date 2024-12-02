import { useInView } from 'framer-motion'
import { useCallback, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'
import { blurHashLookup } from '../blurHashLookup'
import { useBlurhash } from '../hooks/useBlurHash'

interface Props {
  src: string
}

// NOTE -
// This is like 95% of the way there but there's still some weird loading with extra white space.
// Something is off with my understanding here.

const getBlurHash = (src: string) => {
  // This works because __STATIC__ always includes a public in the url.
  const relativePath = src.split('/public')[1]

  const result = blurHashLookup[relativePath as keyof typeof blurHashLookup]

  if (!result) {
    // Shame me for this code!
    throw new Error('missing blurhash')
  }

  return result
}

const BlurHashImage = ({ src }: Props) => {
  //   const [isVisible, setIsVisible] = useState(false);

  const imgRef = useRef<HTMLImageElement>(null)
  const [imgLoaded, setImgLoaded] = useState(false)
  const startLoadingBlurHash = useInView(imgRef, {
    margin: '0px 0px 3000px 0px'
  })

  const startLoadingImage = useInView(imgRef, {
    margin: '0px 0px 500px 0px'
  })
  console.log('startLoadingImage', startLoadingImage)

  const { width, height, blurHash } = useMemo(() => {
    return getBlurHash(src)
  }, [src])

  const blurUrl = useBlurhash(
    !imgLoaded && startLoadingBlurHash ? blurHash : null,
    width,
    height
  )

  const handleOnLoad = useCallback(() => {
    setImgLoaded(true)
  }, [])

  return (
    <StyledImage
      width={width}
      height={height}
      $blurUrl={blurUrl}
      ref={imgRef}
      // Fixes brief flickering of a broken image if using '' here.
      {...(startLoadingImage || imgLoaded ? { src } : {})}
      // src={src}
      // Above is lazy loading so don't use this.
      // loading="lazy"
      onLoad={handleOnLoad}
      onError={error => {
        console.log('error loading image', error)
      }}
    />
  )
}

const StyledImage = styled.img<{
  $blurUrl: string | null
}>`
  width: 100%;
  height: 100%;
  background-size: cover;
  object-fit: cover;
  background-repeat: no-repeat;
  background-color: #f0f0f0; /* Fallback color */
  background-image: url(${props => props.$blurUrl});
`

// ${(props) =>
//     props.$useSquareImage
//       ? `
//       object-fit: cover;
//       width: 100%;
//       aspect-ratio: 1 / 1; /* This maintains a 1:1 aspect ratio */
//     `
//       : `
//     `}

export default BlurHashImage
