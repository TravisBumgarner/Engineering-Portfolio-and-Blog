import blurhashes from '@/content/blurhashes/index.json'
import { BlurHash } from '@/lib/types'
import BlurHashImageClient from "./BlurHashImage.client"

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

const BlurHashImage = ({ src }: { src: string }) => {
const {width, height, blurHash} = getBlurHash(src)
  return <BlurHashImageClient src={src} width={width} height={height} blurHash={blurHash} />
}

export default BlurHashImage