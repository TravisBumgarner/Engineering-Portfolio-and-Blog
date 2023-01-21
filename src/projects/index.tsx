import content from './content.json'

type Image = {
    label: string,
    src: string
}

type Link = {
    label: string,
    src: string
}

type Project = {
    "id": string,
    "title": string,
    "description": string,
    "endDate": string,
    "images": Image[],
    "links": Link[],
    "previewImage": Image
}

const projects: Project[] = [...content]


export { Project }
export default projects