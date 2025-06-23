'use client'

import React from 'react'
import { FONT_SIZES, FONT_WEIGHTS, SPACING } from '@/lib/styles/consts'
import { SHARED_SPACING } from '@/lib/styles/theme'
import styled from 'styled-components'
import Contact from './components/Contact'
import projects from '@/content/projects'
import ROUTES from '@/lib/routes'
import Link from 'next/link'
import BlurHashImage from '../_sharedComponents/BlurHashImage'

const ListItem = ({
  src,
  link,
  title,
  description
}: {
  src: string
  link: string
  title: string
  description?: string
}) => {
  const paragraphs = !description
    ? null
    : description
        .split('\n')
        .map((paragraph, index) => <p key={index}>{paragraph}</p>)

  return (
    <Link href={link} style={{ textDecoration: 'none' }}>
      <StyledListItem>
        <h2>{title}</h2>
        {paragraphs}
        <BlurHashImage priority={false} src={src} />
      </StyledListItem>
    </Link>
  )
}

const StyledListItem = styled.div`
  ${SHARED_SPACING}
  display: flex;
  background-color: var(--secondary-background);
  color: var(--foreground);
  flex-direction: column;
  text-decoration: none;
  margin-bottom: ${SPACING.LARGE};

  > div {
    margin-bottom: ${SPACING.MEDIUM};
    display: flex;
    gap: ${SPACING.SMALL};
    flex-direction: column;
  }

  h2 {
    font-size: ${FONT_SIZES.SMALL};
    font-weight: ${FONT_WEIGHTS.BOLD};
    margin-top: 0;
    margin-bottom: ${SPACING.SMALL};
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
    title: 'Portfolio',
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

const WorkWithMe = () => {
  return (
    <div id="work">
      <h2>
        If You Can Dream It,
        <br />I Can Prototype It.
      </h2>
      <p>
        I excel in exploring unknown problem spaces, overcoming technical
        obstacles, and delivering working prototypes.
      </p>
      <p>
        I have spent my career diving deep into learning new programming
        techologies and building with them. A few highlights are listed below.
      </p>
      <p>
        Are you looking to validate an idea quickly? Do you want to turn your
        dream into a working prototype?
      </p>
      <a href="#lets-chat">Let's Chat</a>

      <h2>Testimonials</h2>
      <blockquote>
        When you have a difficult problem, something you are not sure is even
        possible, Travis will dive right and start trying things out. He'll
        figure out the possible approaches and eventually get it all working,
        despite the setbacks and the obstacles out of his control.
        <span className="author">Van, Staff Software Engineer</span>
      </blockquote>

      <h2>Capabilities</h2>
      <p>
        These are a small collection of personal projects that highlight my
        capabilities
      </p>
      <p>
        Here are a collectin of places if you'd like even more information -{' '}
        {PLACES_YOU_CAN_FIND_ME.map(({ title, path }, idx) => (
          <React.Fragment key={title}>
            <a target="_blank" href={path}>
              {title}
            </a>
            {idx < PLACES_YOU_CAN_FIND_ME.length - 1 && ', '}
          </React.Fragment>
        ))}
      </p>

      <h3>Web and App Development</h3>

      {WEB_AND_APP_PROJECTS.map((key, index) => {
        const { id, title, previewImage, lastMeaningfulUpdate, description } =
          projects[key]
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

      <h3>Hardware</h3>
      <p>
        In addition to developing software, I have a formal education in
        Mechanical Engineering, a startup in electronics, and many projects
        combining hardware and code.
      </p>
      {ADDITIONAL.map((key, index) => {
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

      <h2 id="lets-chat">Let's Chat</h2>
      <Contact />
    </div>
  )
}

const Section = styled.div`
  ${SHARED_SPACING}
  display: flex;
  background-color: var(--secondary-background);
  color: var(--foreground);
  flex-direction: column;
  text-decoration: none;
  margin-bottom: ${SPACING.LARGE};
`

export default WorkWithMe
