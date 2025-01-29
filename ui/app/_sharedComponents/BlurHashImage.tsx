import blurhashes from '@/content/blurhashes/index.json'
import { blurHashToDataURL } from '@/lib/blurhashDataURL'
import { BlurHash } from '@/lib/types'
import Image from 'next/image'
import { useMemo } from 'react'

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
  loadMode,
  maxWidthPercent,
  alt
}: {
  src: string
  loadMode: 'preload' | 'lazy' | 'normal'
  maxWidthPercent: '33' | '50' | '100'
  alt?: string,
}) => {
  const { width, height, blurHash } = getBlurHash(src)
  const blurDataURL = blurHashToDataURL(blurHash)

  const sizes = useMemo(() => {
    if (maxWidthPercent === '33') {
      return '(max-width: 750px) 100vw, 33vw'
    }
    if (maxWidthPercent === '50') {
      return '(max-width: 750px) 100vw, 50vw'
    }
    return '(max-width: 750px) 100vw, 100vw'
  }, [maxWidthPercent])

  const loadObject = useMemo(() => {
    // NextJS docs mention not mixing eager and lazy.
    if (loadMode === 'preload') {
      return { priority: true } as const
    }
    if (loadMode === 'lazy') {
      return { loading: 'lazy' } as const
    }
    return {} as const
  }, [loadMode])
  return (
    <Image
      placeholder="blur"
      blurDataURL={blurDataURL}
      {...loadObject}
      src={src}
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
