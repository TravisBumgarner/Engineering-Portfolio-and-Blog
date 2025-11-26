'use client'

import React, { useRef } from 'react'
import { FONT_SIZES, FONT_WEIGHTS, SPACING } from '@/lib/styles/consts'
import { SHARED_SPACING } from '@/lib/styles/theme'
import styled from 'styled-components'
import Contact from '../../lib/sharedComponents/ContactForm'
import projects from '@/content/projects'
import ROUTES from '@/lib/routes'
import Link from 'next/link'
import BlurHashImage from '../../lib/sharedComponents/BlurHashImage'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

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
    <Link href={link} target="_blank" style={{ textDecoration: 'none' }}>
      <StyledListItem>
        <div>
          <Typography variant="h2">{title}</Typography>
          {paragraphs}
        </div>
        <BlurHashImage priority={false} src={src} />
        <LearnMore>Learn More</LearnMore>
      </StyledListItem>
    </Link>
  )
}

const LearnMore = styled.span`
  cursor: pointer;
  font-size: ${FONT_SIZES.MEDIUM};
  background-color: var(--primary-background);
  color: var(--foreground);
  border: 0;
  margin-top: ${SPACING.MEDIUM};
  padding: ${SPACING.SMALL};
  text-align: center;
  font-weight: 900;

  &:hover {
    color: var(--primary);
  }

  &:disabled {
    color: var(--foreground-disabled);
    cursor: not-allowed;
  }
`

const StyledListItem = styled.div`
  ${SHARED_SPACING}
  display: flex;
  background-color: var(--secondary-background);
  color: var(--foreground);
  flex-direction: column;
  text-decoration: none;
  margin-bottom: ${SPACING.XLARGE};
  margin-top: ${SPACING.XLARGE};

  > div {
    margin-bottom: ${SPACING.MEDIUM};
    display: flex;
    flex-direction: column;

    > h2 {
      font-size: ${FONT_SIZES.XLARGE};
      font-weight: ${FONT_WEIGHTS.BOLD};
      margin-top: 0;
      margin-bottom: ${SPACING.SMALL};
    }
  }
`

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
    <Box>
      <Typography variant='h2'>
        I turn early-stage ideas
        <br />
        into working prototypes.
      </Typography>
      <Typography>
        I work fast, learn fast, and deliver.
        <br />
        Software, hardware, design - whatever the idea needs.
      </Typography>

      <Button onClick={handleClick} fullWidth variant='contained'>Reach Out</Button>

      <Typography variant='h2'>Testimonials</Typography>
      <blockquote>
        When you have a difficult problem, something you are not sure is even
        possible, Travis will dive right in and start trying things out.
        He&apos;ll figure out the possible approaches and eventually get it all
        working, despite the setbacks and the obstacles out of his control.
        <span className="author">Van, Staff Software Engineer</span>
      </blockquote>

      <blockquote>
        Travis is a builder. I&apos;m impressed with his depth in so many
        subjects, from electronics to photography to woodworking to software.
        He&apos;s a learner -- constantly curious and always tackling new
        subjects.
        <span className="author">Matt, Head of Architecture</span>
      </blockquote>

      <blockquote>
        Travis is an incredible full-stack engineer. He can take large complex
        projects and break them down into tractable pieces and work with a team
        to get the project done. He has excellent product intuition, balanced
        with a healthy sense of what makes engineering teams efficient.
        He&apos;s also a huge catalyst to build a strong culture around
        collaboration and strong teamwork. An incredible asset to any
        engineering team!
        <span className="author">Daniel, CTO</span>
      </blockquote>

      <blockquote>
        Travis is the kind of engineer who never backs down from a challenge,
        cares about craft, and truly wants to build the best possible product.
        Collaborating with Travis feels like anything is possible because of his
        strong will to tinker and figure things out.
        <span className="author">Ian, Staff Product Designer</span>
      </blockquote>

      <Typography variant="h2">What I Do</Typography>
      <Typography>
        I build across the stack: full-stack apps, embedded systems, hardware
        interfaces, and design. I&apos;ve built MVPs, production apps, and
        personal experiments. All of the projects below have been fully managed,
        researched, designed, and engineered by myself. Historically, I&apos;ve
        consulted with stealth-mode startups, so I&apos;m unable to share that
        work here.
      </Typography>

      <Typography variant="h3">Web + App Projects</Typography>
      <Typography>
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

      <Typography variant="h3">Hardware Projects</Typography>
      <Typography>
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

      <Typography variant="h2">More About Me</Typography>
      <Typography>
        Here are a few more places to learn about me -{' '}
        {formatLinks(PLACES_YOU_CAN_FIND_ME)}.
      </Typography>

      <Typography>
        The projects listed above barely scratch the surface of my depth and
        breadth of experience. I invite you to check out some of the following
        exhibits -
      </Typography>
      <ul>
        {EXHIBITS.map(({ path, title }) => (
          <li key={title}>
            <a href={path} rel="noopener noreferrer" target="_blank">
              {title}
            </a>
          </li>
        ))}
      </ul>

      <Box ref={letsChatRef}>
        <Typography variant="h2">Let&apos;s Chat</Typography>
        <Typography>Have an idea you want to turn into a working prototype?</Typography>
        <Contact />
        <div style={{ height: SPACING.XLARGE }} />
      </Box>
    </Box>
  )
}

export default WorkWithMe
