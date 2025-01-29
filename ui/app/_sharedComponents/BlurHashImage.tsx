import blurhashes from '@/content/blurhashes/index.json'
import { blurHashToDataURL } from '@/lib/blurhashDataURL'
import { BlurHash } from '@/lib/types'
import { useInView } from 'motion/react'
import Image from 'next/image'
import { useMemo, useRef } from 'react'

const getBlurHash = (src: string) => {
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

const BlurHashImage = ({
  src,
  priority,
  maxWidthPercent,
  alt
}: {
  src: string
  priority: boolean
  maxWidthPercent: '33' | '50' | '100'
  alt?: string
}) => {
  const { width, height, blurHash } = getBlurHash(src)
  const blurDataURL = blurHashToDataURL(blurHash)
  const imgRef = useRef<HTMLImageElement>(null)

  const startLoadingImage = useInView(imgRef, {
    margin: '0px 0px 100px 0px',
    once: true
  })

  const sizes = useMemo(() => {
    if (maxWidthPercent === '33') {
      return '(max-width: 750px) 100vw, 33vw'
    }
    if (maxWidthPercent === '50') {
      return '(max-width: 750px) 100vw, 50vw'
    }
    return '(max-width: 750px) 100vw, 100vw'
  }, [maxWidthPercent])

  return (
    <Image
      ref={imgRef}
      blurDataURL={blurDataURL}
      priority={priority}
      src={src || ''}
      alt={alt || ''}
      quality={70}
      width={width}
      height={height}
      sizes={sizes}
      style={{
        display: 'block',
        width: '100%',
        height: 'auto'
      }}
    />
  )
}

export default BlurHashImage
