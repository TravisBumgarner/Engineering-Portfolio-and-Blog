import { MDXProps } from 'mdx/types'
import Post1 from './1.mdx'
import Post2 from './2.mdx'
import Post3 from './3.mdx'
import Post4 from './4.mdx'
import Post5 from './5.mdx'
import Post6 from './6.mdx'
import Post7 from './7.mdx'
import Post8 from './8.mdx'
import Post9 from './9.mdx'
import Post10 from './10.mdx'
import Post11 from './11.mdx'
import Post12 from './12.mdx'
import Post13 from './13.mdx'


type BlogPost = {
    title: string
    date: string
    draft: boolean
    renderer: (props?: MDXProps) => JSX.Element
    description: string
}

const posts: BlogPost[] = [
    {
        "title": "A Collection of Tips to Become a Software Engineer",
        "date": "2019-04-15T20:52:04-04:00",
        "draft": false,
        "renderer": Post1,
        "description": "Over the years I have been on both sides of the interview process. I have learned a wealth of experience, here is my advice.",
    }
]

export default posts
export { BlogPost }