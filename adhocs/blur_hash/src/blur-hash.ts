import { encode } from 'blurhash'
import { createCanvas, Image, loadImage } from 'canvas'

const loadImageNode = async (src: string): Promise<Image> => {
  return loadImage(src)
}

const getImageData = (image: Image) => {
  const canvas = createCanvas(image.width, image.height)
  const context = canvas.getContext('2d')
  context.drawImage(image, 0, 0)
  return context.getImageData(0, 0, image.width, image.height)
}

export const encodeImageToBlurHash = async (
  filePath: string
): Promise<{ blurHash: string; width: number; height: number }> => {
  const image = await loadImageNode(filePath)

  const imageData = getImageData(image)
  return {
    blurHash: encode(imageData.data, imageData.width, imageData.height, 4, 4),
    width: image.width,
    height: image.height
  }
}
