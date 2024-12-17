import BlurHashImageClient from "./BlurHashImage.client"

const BlurHashImage = ({ src }: { src: string }) => {
  return <BlurHashImageClient src={src} />
}

export default BlurHashImage