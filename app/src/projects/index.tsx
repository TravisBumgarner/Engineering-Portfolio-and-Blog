import content from './content.json'

type Image = {
  label: string
  src: string
}

type Link = {
  label: string
  src: string
}

type Project = {
  id: string
  title: string
  description: string
  endDate: string
  images: Image[]
  links: Link[]
  previewImage: Image
}

export { Project }
export default content as Project[]
