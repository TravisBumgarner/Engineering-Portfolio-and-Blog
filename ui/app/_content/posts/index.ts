import { BlogPost } from '@/lib/types'

// src/posts/postMappings.ts
export const postMappings = {
  Post1: () => import('./1.mdx'),
  Post2: () => import('./2.mdx'),
  Post3: () => import('./3.mdx'),
  Post4: () => import('./4.mdx'),
  Post5: () => import('./5.mdx'),
  Post6: () => import('./6.mdx'),
  Post7: () => import('./7.mdx'),
  Post8: () => import('./8.mdx'),
  Post9: () => import('./9.mdx'),
  Post10: () => import('./10.mdx'),
  Post11: () => import('./11.mdx'),
  Post12: () => import('./12.mdx'),
  Post13: () => import('./13.mdx'),
  Post14: () => import('./14.mdx'),
  Post15: () => import('./15.mdx')
}

const posts: Record<string, BlogPost> = {
  'a-collection-of-tips-to-become-a-software-engineer': {
    postMapping: 'Post1',
    title: 'A Collection of Tips to Become a Software Engineer',
    date: '2019-04-15',
    draft: false,
    description:
      'Over the years I have been on both sides of the interview process. I have learned a wealth of experience, here is my advice.',
    preview_image: 'preview_image.jpg'
  },
  'code-to-production': {
    postMapping: 'Post2',
    title: 'Software Engineers Rush to Write Bad Code',
    date: '2021-04-18',
    draft: false,
    description:
      'Engineers are pushed to write code quickly and the quality suffers because of it. How can you move quickly while maintaining a high level of quality?',
    preview_image: 'preview_image.jpg'
  },
  'combining-hobbies': {
    postMapping: 'Post3',
    title: 'Combining Hobbies: Programming, Electronics & Photography',
    date: '2016-04-04',
    draft: false,
    preview_image: 'preview_image.jpg',
    description:
      'This is an exploration into learning more about photography by building a camera.'
  },
  'failing-at-kickstarter': {
    postMapping: 'Post4',
    title: 'What I learned from Failing with Kickstarter',
    date: '2016-09-18',
    draft: false,
    description:
      'In 2016, I set out to launch my first product on Kickstarter. I failed, did some research, tried again and succeeded. These are my observations.',
    preview_image: 'preview_image.jpg'
  },
  'finish-what-you-start': {
    postMapping: 'Post5',
    title: 'Finish What You Start',
    date: '2018-11-23',
    draft: false,
    description:
      "I love starting hobby projects. However, I seem to hate finishing them. Let's figure out how to finish things.",
    preview_image: 'preview_image.jpg'
  },
  'how-to-build-a-circuit-board': {
    postMapping: 'Post6',
    title: 'How to Build a Circuit Board',
    date: '2016-11-17',
    draft: false,
    description:
      'One Day I decided to learn how to make circuit boards. Several months later, my first PCB arried in the mail. This is how I got there.',
    preview_image: 'preview_image.jpg'
  },
  'how-to-make-a-photo-stitching-website': {
    postMapping: 'Post7',
    title: 'How to Make a Photo Stitching Website & Avoid Burnout',
    date: '2020-03-13',
    draft: false,
    description:
      'Engineers love to start side projects and never finish them. This leads to burnout. Why not build fun things instead? How about a tool to develop virtual cross stitches!',
    preview_image: 'preview_image.jpg'
  },
  'learning-to-learn': {
    postMapping: 'Post8',
    title: 'Learning to Learn: Develop Skills to Master Anything',
    date: '2018-12-28',
    draft: false,
    description:
      'In the pursuit of learning about electronics and other subjects, I have developed a set of skills that have enabled me to learn new subjects more quickly and thoroughly and with less frustration. ',
    preview_image: 'preview_image.jpg'
  },
  'on-failing': {
    postMapping: 'Post9',
    title: 'What it Means to Fail',
    date: '2016-10-16',
    draft: false,
    description:
      'I marked my service in the Peace Corps as a failure. After much reflection on that summarization, I realized there is more than one way to look at failure.',
    preview_image: 'preview_image.jpg'
  },
  'storytelling-in-presentation': {
    postMapping: 'Post10',
    title: 'Storytelling in Presentation',
    date: '2021-12-29',
    draft: false,
    description:
      "Ever wanted to improve your ability to convey what's in your head to your audience? This talk is for you!",
    preview_image: 'preview_image.jpg'
  },
  'talking-technical-with-non-technical-talkers': {
    postMapping: 'Post11',
    title: 'Talking Technical With Non Technical Talkers',
    date: '2020-11-20',
    draft: false,
    description:
      "This is my first technical talk! I wanted to share with the world what I've learned working with folks from different backgrounds and disciplines.",
    preview_image: 'preview_image.jpg'
  },
  'teach-anyone-anything': {
    postMapping: 'Post12',
    title: "Sharing What You've Learned with Others",
    date: '2019-01-23',
    draft: false,
    description:
      "I have learned a lot along the way and I'll share those lessons learned here.",
    preview_image: 'cinnova.jpg'
  },
  'time-management-and-productivity': {
    postMapping: 'Post13',
    title: 'Time Management & Productivity',
    date: '2016-10-27',
    draft: false,
    description:
      'I have gotten very good at managing my time over the years, here is how I do it.',
    preview_image: 'preview_image.jpg'
  },
  'virtual-team-building-event': {
    postMapping: 'Post14',
    title: 'How to organize a virtual team building event',
    date: '2022-02-15',
    draft: false,
    description:
      'So you want to organize a virtual team outing? We put together a quick guide to help with research, planning, and the actual event.',
    preview_image: 'preview.png'
  },
  'what-we-lost-when-we-went-remote': {
    postMapping: 'Post15',
    title: 'What we Lost When We Went Remote',
    date: '2023-03-13',
    draft: false,
    description:
      'These are my observations as the world went remote and team dynamics went online.',
    preview_image: 'preview.jpg'
  }
}

export default posts
