'use client'

import { ROUTES } from '@common/core'
import { List, ListItem, Stack, type SxProps } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import React, { useRef } from 'react'
import projects from '../content/projects'
import Contact from '../sharedComponents/ContactForm'
import ItemPreview from '../sharedComponents/ItemPreview'
import Link from '../sharedComponents/Link'
import { SPACING } from '../styles/consts'

function formatLinks(list: { title: string; path: string }[]) {
  return list.map(({ title, path }, i) => {
    const sep = i === list.length - 2 ? ' and ' : i < list.length - 1 ? ', ' : ''
    return (
      <React.Fragment key={title}>
        <Link type="inline" target="_blank" href={path}>
          {title}
        </Link>
        {sep}
      </React.Fragment>
    )
  })
}

const WEB_AND_APP_PROJECTS = ['photo-palettes', 'seis-colores', 'ideas-down', 'five-pixels', 'photography-portfolio']

const ADDITIONAL = ['painless-prototyping-second-attempt', 'pixels64', 'strangerer-things', 'camera-from-scratch']

const PLACES_YOU_CAN_FIND_ME = [
  {
    title: 'More Creations',
    path: '/creations',
  },
  {
    title: 'GitHub',
    path: 'https://github.com/travisBumgarner/',
  },
  {
    title: 'LinkedIn',
    path: 'https://www.linkedin.com/in/travisbumgarner/',
  },
  {
    title: 'Resume',
    path: '/travis_bumgarner_resume.pdf',
  },
]

const EXHIBITS = [
  {
    title: 'Exhibit 1: Silly Apps',
    path: 'https://github.com/TravisBumgarner/Silly-Apps',
  },
  {
    title: 'Exhibit 2: Project Graveyard',
    path: 'https://github.com/TravisBumgarner/Project-Graveyard',
  },
  {
    title: 'Exhibit 3: Proof of Concepts',
    path: 'https://github.com/TravisBumgarner/Proof-of-Concepts',
  },
  {
    title: 'Exhibit 4: Learning Explorations',
    path: 'https://github.com/TravisBumgarner/Learning-Explorations/tree/master/archives',
  },
  {
    title: 'Exhibit 5: Pointless Projects',
    path: 'https://github.com/TravisBumgarner/pointless-projects',
  },
]

const WorkWithMe = () => {
  const letsChatRef = useRef<HTMLDivElement | null>(null)

  const handleClick = () => {
    letsChatRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Typography variant="h2" gutterBottom>
        I turn early-stage ideas
        <br />
        into working prototypes.
      </Typography>
      <Typography>
        I work fast, learn fast, and deliver.
        <br />
        Software, hardware, design - whatever the idea needs.
      </Typography>

      <Button onClick={handleClick} fullWidth variant="contained" size="large">
        Reach Out
      </Button>

      <Typography variant="h2">Testimonials</Typography>
      <Stack direction="column" spacing={SPACING.MEDIUM.PX}>
        <Box>
          <Typography sx={quoteSX}>
            When you have a difficult problem, something you are not sure is even possible, Travis will dive right in
            and start trying things out. He&apos;ll figure out the possible approaches and eventually get it all
            working, despite the setbacks and the obstacles out of his control.
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'right' }}>
            Van, Staff Software Engineer
          </Typography>
        </Box>

        <Box>
          <Typography sx={quoteSX}>
            Travis is a builder. I&apos;m impressed with his depth in so many subjects, from electronics to photography
            to woodworking to software. He&apos;s a learner -- constantly curious and always tackling new subjects.
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'right' }}>
            Matt, Head of Architecture
          </Typography>
        </Box>

        <Box>
          <Typography sx={quoteSX}>
            Travis is an incredible full-stack engineer. He can take large complex projects and break them down into
            tractable pieces and work with a team to get the project done. He has excellent product intuition, balanced
            with a healthy sense of what makes engineering teams efficient. He&apos;s also a huge catalyst to build a
            strong culture around collaboration and strong teamwork. An incredible asset to any engineering team!
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'right' }}>
            Daniel, CTO
          </Typography>
        </Box>

        <Box>
          <Typography sx={quoteSX}>
            Travis is the kind of engineer who never backs down from a challenge, cares about craft, and truly wants to
            build the best possible product. Collaborating with Travis feels like anything is possible because of his
            strong will to tinker and figure things out.
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'right' }}>
            Ian, Staff Product Designer
          </Typography>
        </Box>
      </Stack>

      <Typography variant="h2">What I Do</Typography>
      <Typography>
        I build across the stack: full-stack apps, embedded systems, hardware interfaces, and design. I&apos;ve built
        MVPs, production apps, and personal experiments. All of the projects below have been fully managed, researched,
        designed, and engineered by myself. Historically, I&apos;ve consulted with stealth-mode startups, so I&apos;m
        unable to share that work here.
      </Typography>

      <Typography variant="h3">Web + App Projects</Typography>
      <Typography>
        I am self taught and have over ten years of professional experience building applications.
      </Typography>
      {WEB_AND_APP_PROJECTS.map((key) => {
        const { id, title, previewImage, description } = projects[key]
        return (
          <ItemPreview
            type="creation"
            key={id}
            description={description}
            link={`${ROUTES.CREATIONS.href}/${id}`}
            title={title}
            src={`/project-resources/${id}/${previewImage.src}`}
          />
        )
      })}

      <Typography variant="h3">Hardware Projects</Typography>
      <Typography>
        I have a degree in Mechanical Engineering and a collection of related side projects. Many of these projects
        blend hardware and software.
      </Typography>
      {ADDITIONAL.map((key) => {
        const { id, title, previewImage, description } = projects[key]
        return (
          <ItemPreview
            type="creation"
            key={id}
            description={description}
            link={`${ROUTES.CREATIONS.href}/${id}`}
            title={title}
            src={`/project-resources/${id}/${previewImage.src}`}
          />
        )
      })}

      <Typography variant="h2">More About Me</Typography>
      <Typography sx={{ mb: 2 }}>
        Here are a few more places to learn about me - {formatLinks(PLACES_YOU_CAN_FIND_ME)}.
      </Typography>

      <Typography sx={{ mb: 2 }}>
        The projects listed above barely scratch the surface of my depth and breadth of experience. I invite you to
        check out some of the following exhibits -
      </Typography>
      <List>
        {EXHIBITS.map(({ path, title }) => (
          <ListItem key={title}>
            <Link type="inline" href={path} target="_blank">
              {title}
            </Link>
          </ListItem>
        ))}
      </List>

      <Box ref={letsChatRef} sx={{ mt: 4 }}>
        <Typography variant="h2" gutterBottom>
          Let&apos;s Chat
        </Typography>
        <Typography>Have an idea you want to turn into a working prototype?</Typography>
        <Contact />
        <Box sx={{ height: 64 }} />
      </Box>
    </>
  )
}

const quoteSX: SxProps = {
  fontStyle: 'italic',
  marginBottom: SPACING.SMALL.PX,
}

export default WorkWithMe
