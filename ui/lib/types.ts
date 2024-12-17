export type BlurHash = {
  blurHash: string
  width: number
  height: number
}

type Image = {
  label: string
  src: string
}

type Link = {
  label: string
  src: string
}

export type TCreation = {
  id: string
  title: string
  description: string
  lastMeaningfulUpdate: string
  images: Image[]
  links: Link[]
  previewImage: Image
}
