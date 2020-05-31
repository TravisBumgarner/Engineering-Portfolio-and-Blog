import file_1 from './1.json'
import file_2 from './2.json'
import file_3 from './3.json'
import file_4 from './4.json'
import file_5 from './5.json'
import file_6 from './6.json'
import file_7 from './7.json'
import file_8 from './8.json'
import file_9 from './9.json'
import file_10 from './10.json'
import file_11 from './11.json'
import file_12 from './12.json'
import file_13 from './13.json'
import file_14 from './14.json'
import file_15 from './15.json'
import file_16 from './16.json'
import file_17 from './17.json'
import file_18 from './18.json'
import file_19 from './19.json'
import file_20 from './20.json'
import file_21 from './21.json'
import file_22 from './22.json'
import file_23 from './23.json'
import file_24 from './24.json'
import file_25 from './25.json'
import file_26 from './26.json'
import file_27 from './27.json'
import file_29 from './29.json'
import file_30 from './30.json'
import file_31 from './31.json'
import file_32 from './32.json'
import file_33 from './33.json'
import file_34 from './34.json'
import file_35 from './35.json'
import file_36 from './36.json'
import file_37 from './37.json'
import file_38 from './38.json'
import file_39 from './39.json'
import file_40 from './40.json'
import file_41 from './41.json'

import skills_json from './skills.json'
import categories_json from './categories.json'

type Organization = {
    id: number,
    name: string
}

type Location = {
    id: number,
    name: string
}

type Image = {
    id: number,
    name: string,
    src: string
}

type Link = {
    id: number,
    name: string,
    src: string
}

type Project = {
    "id": number,
    "name": string,
    "category": number[],
    "organization": Organization[],
    "location": Location[],
    "headline": string,
    "description": string,
    "start_date": string,
    "end_date": string,
    "skill": number[],
    "image": Image[],
    "link": Link[],
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
    file_1,
    file_2,
    file_3,
    file_4,
    file_5,
    file_6,
    file_7,
    file_8,
    file_9,
    file_10,
    file_11,
    file_12,
    file_13,
    file_14,
    file_15,
    file_16,
    file_17,
    file_18,
    file_19,
    file_20,
    file_21,
    file_22,
    file_23,
    file_24,
    file_25,
    file_26,
    file_27,
    file_29,
    file_30,
    file_31,
    file_32,
    file_33,
    file_34,
    file_35,
    file_36,
    file_37,
    file_38,
    file_39,
    file_40,
    file_41
]

const skills: Skills = skills_json
const categories: Categories = categories_json

export { skills, categories, Project, Skills, Categories }
export default projects