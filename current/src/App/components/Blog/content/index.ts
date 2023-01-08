import post1 from './a-collection-of-tips-to-become-a-software-engineer.md'

type BlogPost = {
    title: string
    date: string
    draft: boolean
    content: string
    description: string
}

const posts: BlogPost[] = [
    {
        "title": "A Collection of Tips to Become a Software Engineer",
        "date": "2019-04-15T20:52:04-04:00",
        "draft": false,
        "content": post1,
        "description": "Over the years I have been on both sides of the interview process. I have learned a wealth of experience, here is my advice.",
    }
]

export default posts
export { BlogPost }