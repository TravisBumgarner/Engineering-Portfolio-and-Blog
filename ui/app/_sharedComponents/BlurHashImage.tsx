import blurhashes from '@/content/blurhashes/index.json'
import { blurHashToDataURL } from '@/lib/blurhashDataURL'
import { BlurHash } from '@/lib/types'
import Image from 'next/image'

const scaleToMaxWidth = ({originalWidth, originalHeight, maxWidth}: {originalWidth: number, originalHeight: number, maxWidth: number}) => {
  const scale = maxWidth / originalWidth
  return {
    scaledWidth: originalWidth * scale,
    scaledHeight: originalHeight * scale
  }
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

const BlurHashImage = ({ src, priority, maxWidth }: { src: string, priority: boolean, maxWidth?: number }) => {
  let { width: originalWidth, height: originalHeight, blurHash } = getBlurHash(src)
  const blurDataURL = blurHashToDataURL(blurHash)

  let width = originalWidth
  let height = originalHeight

  if (maxWidth && maxWidth < originalWidth) {
    const {scaledWidth, scaledHeight} = scaleToMaxWidth({ originalWidth, originalHeight, maxWidth })
    width = scaledWidth
    height = scaledHeight
  }

  return (
    <Image
      placeholder="blur"
      blurDataURL={blurDataURL}
      priority={priority}
      // Loading lazy is ignored if priority is true
      {...(priority ? {} : {loading: 'lazy'})}
      src={`${process.env.NEXT_PUBLIC_STATIC_PATH}${src}`}
      alt={src}
      quality={70}
      width={width}
      height={0}
      style={{
        display: 'block',
        width: '100%',
        height: 'auto'
      }}
    />
  )
}

export default BlurHashImage
