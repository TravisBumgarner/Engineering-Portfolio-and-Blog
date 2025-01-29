import blurhashes from '@/content/blurhashes/index.json'
import { blurHashToDataURL } from '@/lib/blurhashDataURL'
import { BlurHash } from '@/lib/types'
import Image from 'next/image'
import { useMemo } from 'react'

// const scaleToMaxWidth = ({originalWidth, originalHeight, maxWidth}: {originalWidth: number, originalHeight: number, maxWidth: number}) => {
//   const scale = maxWidth / originalWidth
//   return {
//     scaledWidth: originalWidth * scale,
//     scaledHeight: originalHeight * scale
//   }
// }

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

const BlurHashImage = ({ src, priority, maxWidthPercent, alt }: { src: string, priority: boolean, maxWidthPercent: '33' | '50' | '100', alt?: string }) => {
  const { width, height, blurHash } = getBlurHash(src)
  const blurDataURL = blurHashToDataURL(blurHash)

  const sizes = useMemo(() => {
    if(maxWidthPercent === '33') {
      return '(max-width: 750px) 100vw, 33vw'
    }
    if(maxWidthPercent === '50') {
      return '(max-width: 750px) 100vw, 50vw'
    }
    return '(max-width: 750px) 100vw, 100vw'
  }, [maxWidthPercent])

  return (
    <Image
      placeholder="blur"
      blurDataURL={blurDataURL}
      priority={priority}
      // Loading lazy is ignored if priority is true
      // {...(priority ? {} : {loading: 'lazy'})}
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
