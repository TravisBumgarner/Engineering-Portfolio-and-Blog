import content from './content.json'

type Image = {
    name: string,
    src: string
}

type Link = {
    name: string,
    src: string
}

type Project = {
    "id": string,
    "name": string,
    "description": string,
    "end_date": string,
    "images": Image[],
    "links": Link[],
    "preview_img": Image
}

const projects: Project[] = [...content]


export { Project }
export default projects