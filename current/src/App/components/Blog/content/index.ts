import { MDXProps } from 'mdx/types'
// import Post1 from './1.mdx'
import Post2 from './2.mdx'
// import Post3 from './3.mdx'
// import Post4 from './4.mdx'
// import Post5 from './5.mdx'
// import Post6 from './6.mdx'
// import Post7 from './7.mdx'
// import Post8 from './8.mdx'
// import Post9 from './9.mdx'
// import Post10 from './10.mdx'
// import Post11 from './11.mdx'
// import Post12 from './12.mdx'
// import Post13 from './13.mdx'

type BlogPost = {
    title: string
    date: string
    draft: boolean
    renderer: (props?: MDXProps) => JSX.Element
    description: string
    preview_image: string
}

const posts: BlogPost[] = [
    // {
    //     renderer: Post1,
    //     title: "A Collection of Tips to Become a Software Engineer",
    //     date: "2019-04-15T20:52:04-04:00",
    //     draft: false,
    //     description: "Over the years I have been on both sides of the interview process. I have learned a wealth of experience, here is my advice.",
    //     preview_image: "/image/a-collection-of-tips-to-become-a-software-engineer/preview_image.jpg"
    // },
    {
        renderer: Post2,
        title: "Software Engineers Rush to Write Bad Code",
        date: "2022-04-18T13:52:11+02:00",
        draft: false,
        description: "Engineers are pushed to write code quickly and the quality suffers because of it. How can you move quickly while maintaining a high level of quality?",
        preview_image: "/image/code-to-production/preview_image.jpg"
    },
    // {
    //     "renderer": Post3,
    //     title: "Combining Hobbies: Programming, Electronics & Photography",
    //     date: "2016-04-04T09:00:00-00:00",
    //     draft: false,
    //     preview_image: "/image/combining-hobbies/preview_image.jpg",
    //     description: "This is an exploration into learning more about photography by building a camera."
    // },
    // {
    //     renderer: Post4,
    //     title: "What I learned from Failing with Kickstarter",
    //     date: "2019-03-25T11:19:53-05:00",
    //     draft: false,
    //     description: "In 2016, I set out to launch my first product on Kickstarter. I failed, did some research, tried again and succeeded. These are my observations.",
    //     preview_image: "/image/failing-at-kickstarter/preview_image.jpg"
    // },
    // {
    //     "renderer": Post5,
    //     title: "Finish What You Start",
    //     date: "2018-11-23T17:39:21-07:00",
    //     draft: false,
    //     description: "I love starting hobby projects. However, I seem to hate finishing them. Let's figure out how to finish things.",
    //     preview_image: "/image/finish-what-you-start/preview_image.jpg"
    // },
    // {
    //     renderer: Post6,
    //     title: "How to Build a Circuit Board",
    //     date: "2019-04-12T12:05:19-05:00",
    //     draft: false,
    //     description: "One Day I decided to learn how to make circuit boards. Several months later, my first PCB arried in the mail. This is how I got there.",
    //     preview_image: "/image/how-to-build-a-circuit-board/preview_image.jpg"
    // },
    // {
    //     renderer: Post7,
    //     title: "How to Make a Photo Stitching Website & Avoid Burnout",
    //     date: "2020-03-13T16:00:01-04:00",
    //     draft: false,
    //     description: "Engineers love to start side projects and never finish them. This leads to burnout. Why not build fun things instead? How about a tool to develop virtual cross stitches!",
    //     preview_image: "/image/how-to-make-a-photo-stitching-website/preview_image.jpg"
    // },
    // {
    //     "renderer": Post8,
    //     title: "Learning to Learn: Develop Skills to Master Anything",
    //     date: "2018-12-28T17:28:02-05:00",
    //     draft: false,
    //     description: "In the pursuit of learning about electronics and other subjects, I have developed a set of skills that have enabled me to learn new subjects more quickly and thoroughly and with less frustration. ",
    //     preview_image: "/image/learning-to-learn/preview_image.jpg"
    // },
    // {
    //     "renderer": Post9,
    //     title: "What it Means to Fail",
    //     date: "2019-03-19T11:32:39-05:00",
    //     draft: false,
    //     description: "I marked my service in the Peace Corps as a failure. After much reflection on that summarization, I realized there is more than one way to look at failure.",
    //     preview_image: "/image/on-failing/preview_image.jpg"
    // },
    // {
    //     "renderer": Post10,
    //     title: "Storytelling in Presentation",
    //     date: "2021-12-29T17:55:50-07:00",
    //     draft: false,
    //     description: "Ever wanted to improve your ability to convey what's in your head to your audience? This talk is for you!",
    //     preview_image: "/image/storytelling-in-presentation/preview_image.jpg"
    // },
    // {
    //     renderer: Post11,
    //     title: "Talking Technical With Non Technical Talkers",
    //     date: "2020-11-20T17:46:24-07:00",
    //     draft: false,
    //     description: "This is my first technical talk! I wanted to share with the world what I've learned working with folks from different backgrounds and disciplines.",
    //     preview_image: "/image/talking-technical-with-non-technical-talkers/preview_image.jpg"
    // },
    // {
    //     renderer: Post12,
    //     title: "Sharing What You've Learned with Others",
    //     date: "2019-01-23T16:12:11-05:00",
    //     draft: false,
    //     description: "I have learned a lot along the way and I'll share those lessons learned here.",
    //     preview_image: "/image/teach-anyone-anything/cinnova.jpg"
    // },
    // {
    //     renderer: Post13,
    //     title: "Time Management & Productivity",
    //     date: "2019-03-04T11:48:40-05:00",
    //     draft: false,
    //     description: "I have gotten very good at managing my time over the years, here is how I do it.",
    //     preview_image: "/image/time-management-and-productivity/preview_image.jpg"
    // },



]

export default posts
export { BlogPost }