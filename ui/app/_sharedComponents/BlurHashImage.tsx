import blurhashes from '@/content/blurhashes/index.json'
import { blurHashToDataURL } from '@/lib/blurhashDataURL'
import { BlurHash } from '@/lib/types'
import Image from 'next/image'

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
  alt,
  grayscale
}: {
  src: string
  priority: boolean
  alt?: string
  grayscale?: boolean
}) => {
  const { width, height, blurHash } = getBlurHash(src)
  const blurDataURL = blurHashToDataURL(blurHash)

  return (
    <Image
      placeholder="blur"
      blurDataURL={blurDataURL}
      priority={priority}
      src={src}
      alt={alt || ''}
      quality={70}
      width={width}
      height={height}
      sizes="(max-width: 750px) 100vw, 100vw"
      style={{
        maxHeight: '80vh',
        objectFit: 'cover',
        objectPosition: 'top',
        display: 'block',
        width: '100%',
        height: 'auto',
        filter: grayscale ? 'grayscale(100%)' : 'none'
      }}
    />
  )
}

export default BlurHashImage
