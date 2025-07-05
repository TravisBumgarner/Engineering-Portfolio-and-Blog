import blurhashes from '@/content/blurhashes/index.json'
import { SPACING } from '@/lib/styles/consts'
import { blurHashToDataURL } from '@/lib/utilities/blurhashDataURL'
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
  alt
}: {
  src: string
  priority: boolean
  alt?: string
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
        border: `8px solid var(--foreground)`,
        maxHeight: '85vh', // Not sure why this was 70vh. Changed it.
        objectFit: 'cover',
        objectPosition: 'top center',
        display: 'block',
        width: '100%',
        height: 'auto',
        padding: 0,
        // Background for transparent images.
        backgroundColor: '#eee',
        boxSizing: 'border-box'
      }}
    />
  )
}

export default BlurHashImage
