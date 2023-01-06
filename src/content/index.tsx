import file_53 from './2d-plotter-explorations.json'
import file_11 from './automated-film-scanner.json'
import file_54 from './engineering-portfolio.json'
import file_22 from './intro-to-arduino-workshop.json'
import file_37 from './laser-cut-puzzle.json'
import file_13 from './painless-prototyping.json'
import file_14 from './pan-tilt-camera-rig.json'
import file_40 from './photography-portfolio.json'
import file_23 from './security-system.json'
import file_42 from './smart-display.json'
import file_41 from './strangerer-things-lights.json'
import file_15 from './timelapse-camera.json'
import file_49 from './twitch-stream.json'
import file_57 from './youtube-channel.json'
/* Last file is file_57. This system is bad, I Know. */



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

const projects: Project[] = [
    file_11,
    file_13,
    file_14,
    file_15,
    file_22,
    file_23,
    file_37,
    file_40,
    file_41,
    file_42,
    file_49,
    file_53,
    file_54,
    file_57
]


export { Project }
export default projects