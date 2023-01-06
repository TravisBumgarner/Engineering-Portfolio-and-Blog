import file_53 from './2d-plotter-the-final-attempts.json'
import file_11 from './automated-film-scanner.json'
import file_21 from './development-class.json'
import file_55 from './diy-keyboard.json'
import file_54 from './engineering-portfolio-v4-2.json'
import file_38 from './i-make-things-blog.json'
import file_22 from './intro-to-arduino-workshop.json'
import file_37 from './okemo-mountain-puzzle.json'
import file_13 from './painless-prototyping.json'
import file_14 from './pan-tilt-camera-rig.json'
import file_40 from './photography-portfolio-v2-0.json'
import file_39 from './search-engine.json'
import file_23 from './security-system.json'
import file_42 from './smart-display.json'
import file_48 from './stitch-it-image-to-css-converter.json'
import file_41 from './strangerer-things-lights.json'
import file_15 from './timelapse-camera.json'
import file_49 from './twitch-stream.json'
import file_57 from './youtube-channel.json'
/* Last file is file_57. This system is bad, I Know. */


import skills_json from './skills.json'
import categories_json from './categories.json'

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
    "categories": number[],
    "organizations": string[],
    "locations": string[],
    "headline": string,
    "description": string,
    "start_date": string,
    "end_date": string,
    "skills": number[],
    "images": Image[],
    "links": Link[],
    "preview_img": Image
}

type Skills = {
    [key: string]: {
        id: number,
        name: string,
        category: string
    }
}

type Categories = {
    [key: string]: {
        id: number,
        name: string,
    }
}

const projects: Project[] = [
    file_11,
    file_13,
    file_14,
    file_15,
    file_21,
    file_22,
    file_23,
    file_37,
    file_38,
    file_39,
    file_40,
    file_41,
    file_42,
    file_48,
    file_49,
    file_53,
    file_54,
    file_55,
    file_57
]

const allSkills: Skills = skills_json
const allCategories: Categories = categories_json

export { allSkills, allCategories, Project, Skills, Categories }
export default projects