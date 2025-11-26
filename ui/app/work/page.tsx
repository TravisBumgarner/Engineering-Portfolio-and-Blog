'use client'

import React, { useRef } from 'react'
import Contact from '../../lib/sharedComponents/ContactForm'
import projects from '@/content/projects'
import ROUTES from '@/lib/routes'
import Link from 'next/link'
import BlurHashImage from '../../lib/sharedComponents/BlurHashImage'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { List, Card, CardContent, CardMedia, CardActions } from '@mui/material'

function formatLinks(list: { title: string; path: string }[]) {
  return list.map(({ title, path }, i) => {
    const sep =
      i === list.length - 2 ? ' and ' : i < list.length - 1 ? ', ' : ''
    return (
      <React.Fragment key={title}>
        <a target="_blank" href={path}>
          {title}
        </a>
        {sep}
      </React.Fragment>
    )
  })
}

const ListItem = ({
  src,
  link,
  title,
  description
}: {
  src: string
  link: string
  title: string
  description: string
}) => {
  const paragraphs = description
    .split('\n')
    .map((paragraph, index) => <Typography key={index}>{paragraph}</Typography>)

  return (
    <Card sx={{ mb: 3, transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-2px)' } }}>
      <Link href={link} target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            {title}
          </Typography>
          <Box sx={{ mb: 2 }}>
            {paragraphs}
          </Box>
        </CardContent>
        {src && (
          <CardMedia sx={{ height: 200, mx: 2, borderRadius: 1 }}>
            <BlurHashImage priority={false} src={src} />
          </CardMedia>
        )}
        <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
          <Button
            variant="contained"
            size="small"
            sx={{
              fontWeight: 900,
              '&:hover': {
                transform: 'scale(1.05)'
              }
            }}
          >
            Learn More
          </Button>
        </CardActions>
      </Link>
    </Card>
  )
}


const WEB_AND_APP_PROJECTS = [
  'seis-colores',
  'ideas-down',
  'five-pixels',
  'photography-portfolio'
]

const ADDITIONAL = [
  'painless-prototyping-second-attempt',
  'pixels64',
  'strangerer-things',
  'camera-from-scratch'
]

const PLACES_YOU_CAN_FIND_ME = [
  {
    title: 'More Creations',
    path: '/creations'
  },
  {
    title: 'GitHub',
    path: 'https://github.com/travisBumgarner/'
  },
  {
    title: 'LinkedIn',
    path: 'https://www.linkedin.com/in/travisbumgarner/'
  },
  {
    title: 'Resume',
    path: '/travis_bumgarner_resume.pdf'
  }
]

const EXHIBITS = [
  {
    title: 'Exhibit 1: Silly Apps',
    path: 'https://github.com/TravisBumgarner/Silly-Apps'
  },
  {
    title: 'Exhibit 2: Project Graveyard',
    path: 'https://github.com/TravisBumgarner/Project-Graveyard'
  },
  {
    title: 'Exhibit 3: Proof of Concepts',
    path: 'https://github.com/TravisBumgarner/Proof-of-Concepts'
  },
  {
    title: 'Exhibit 4: Learning Explorations',
    path: 'https://github.com/TravisBumgarner/Learning-Explorations/tree/master/archives'
  },
  {
    title: 'Exhibit 5: Pointless Projects',
    path: 'https://github.com/TravisBumgarner/pointless-projects'
  }
]

const WorkWithMe = () => {
  const letsChatRef = useRef<HTMLDivElement | null>(null)

  const handleClick = () => {
    letsChatRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
      <Typography variant='h2' gutterBottom>
        I turn early-stage ideas
        <br />
        into working prototypes.
      </Typography>
      <Typography sx={{ mb: 3 }}>
        I work fast, learn fast, and deliver.
        <br />
        Software, hardware, design - whatever the idea needs.
      </Typography>

      <Button onClick={handleClick} fullWidth variant='contained' size="large" sx={{ mb: 4 }}>Reach Out</Button>

      <Typography variant='h2' gutterBottom sx={{ mt: 4 }}>Testimonials</Typography>
      <Box sx={{ mb: 4 }}>
        <Box sx={{ mb: 3, p: 2, }}>
          <Typography sx={{ fontStyle: 'italic', mb: 1 }}>
            When you have a difficult problem, something you are not sure is even
            possible, Travis will dive right in and start trying things out.
            He&apos;ll figure out the possible approaches and eventually get it all
            working, despite the setbacks and the obstacles out of his control.
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 'bold', textAlign: 'right' }}>Van, Staff Software Engineer</Typography>
        </Box>

        <Box sx={{ mb: 3, p: 2, }}>
          <Typography sx={{ fontStyle: 'italic', mb: 1 }}>
            Travis is a builder. I&apos;m impressed with his depth in so many
            subjects, from electronics to photography to woodworking to software.
            He&apos;s a learner -- constantly curious and always tackling new
            subjects.
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 'bold', textAlign: 'right' }}>Matt, Head of Architecture</Typography>
        </Box>

        <Box sx={{ mb: 3, p: 2, }}>
          <Typography sx={{ fontStyle: 'italic', mb: 1 }}>
            Travis is an incredible full-stack engineer. He can take large complex
            projects and break them down into tractable pieces and work with a team
            to get the project done. He has excellent product intuition, balanced
            with a healthy sense of what makes engineering teams efficient.
            He&apos;s also a huge catalyst to build a strong culture around
            collaboration and strong teamwork. An incredible asset to any
            engineering team!
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 'bold', textAlign: 'right' }}>Daniel, CTO</Typography>
        </Box>

        <Box sx={{ mb: 3, p: 2, }}>
          <Typography sx={{ fontStyle: 'italic', mb: 1 }}>
            Travis is the kind of engineer who never backs down from a challenge,
            cares about craft, and truly wants to build the best possible product.
            Collaborating with Travis feels like anything is possible because of his
            strong will to tinker and figure things out.
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 'bold', textAlign: 'right' }}>Ian, Staff Product Designer</Typography>
        </Box>
      </Box>

      <Typography variant="h2" gutterBottom sx={{ mt: 4 }}>What I Do</Typography>
      <Typography sx={{ mb: 3 }}>
        I build across the stack: full-stack apps, embedded systems, hardware
        interfaces, and design. I&apos;ve built MVPs, production apps, and
        personal experiments. All of the projects below have been fully managed,
        researched, designed, and engineered by myself. Historically, I&apos;ve
        consulted with stealth-mode startups, so I&apos;m unable to share that
        work here.
      </Typography>

      <Typography variant="h3" gutterBottom sx={{ mt: 4 }}>Web + App Projects</Typography>
      <Typography sx={{ mb: 3 }}>
        I am self taught and have over ten years of professional experience
        building applications.
      </Typography>
      {WEB_AND_APP_PROJECTS.map(key => {
        const { id, title, previewImage, description } = projects[key]
        return (
          <ListItem
            key={id}
            description={description}
            link={`${ROUTES.CREATIONS.path}/${id}`}
            title={title}
            src={previewImage && `/project-resources/${id}/${previewImage.src}`}
          />
        )
      })}

      <Typography variant="h3" gutterBottom sx={{ mt: 4 }}>Hardware Projects</Typography>
      <Typography sx={{ mb: 3 }}>
        I have a degree in Mechanical Engineering and a collection of related
        side projects. Many of these projects blend hardware and software.
      </Typography>
      {ADDITIONAL.map(key => {
        const { id, title, previewImage, description } = projects[key]
        return (
          <ListItem
            key={id}
            description={description}
            link={`${ROUTES.CREATIONS.path}/${id}`}
            title={title}
            src={previewImage && `/project-resources/${id}/${previewImage.src}`}
          />
        )
      })}

      <Typography variant="h2" gutterBottom sx={{ mt: 4 }}>More About Me</Typography>
      <Typography sx={{ mb: 2 }}>
        Here are a few more places to learn about me -{' '}
        {formatLinks(PLACES_YOU_CAN_FIND_ME)}.
      </Typography>

      <Typography sx={{ mb: 2 }}>
        The projects listed above barely scratch the surface of my depth and
        breadth of experience. I invite you to check out some of the following
        exhibits -
      </Typography>
      <List sx={{ mb: 3 }}>
        {EXHIBITS.map(({ path, title }) => (
          <Box key={title} component="li" sx={{ mb: 1 }}>
            <Typography>
              <Link href={path} target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button variant="text" sx={{ textTransform: 'none', justifyContent: 'flex-start' }}>
                  {title}
                </Button>
              </Link>
            </Typography>
          </Box>
        ))}
      </List>

      <Box ref={letsChatRef} sx={{ mt: 4 }}>
        <Typography variant="h2" gutterBottom>Let&apos;s Chat</Typography>
        <Typography sx={{ mb: 3 }}>Have an idea you want to turn into a working prototype?</Typography>
        <Contact />
        <Box sx={{ height: 64 }} />
      </Box>
    </Box>
  )
}

export default WorkWithMe
