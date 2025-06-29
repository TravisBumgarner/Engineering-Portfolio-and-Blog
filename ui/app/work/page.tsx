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
  description: string
}) => {
  const paragraphs = description
    .split('\n')
    .map((paragraph, index) => <p key={index}>{paragraph}</p>)

  return (
    <Link href={link} style={{ textDecoration: 'none' }}>
      <StyledListItem>
        <div>
          <h2>{title}</h2>
          {paragraphs}
        </div>
        <BlurHashImage priority={false} src={src} />
        <button style={{ backgroundColor: 'var(--primary-background)' }}>
          Learn More
        </button>
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

const CTAButton = styled.a`
  padding: ${SPACING.SMALL};
  width: 100%;
  background-color: var(--bright-background);
  color: white !important;
  text-decoration: none;
  margin-bottom: ${SPACING.LARGE};
  font-weight: 900 !important;
  font-size: 24px;
  display: block;
  text-align: center;
`

const WorkWithMe = () => {
  return (
    <div id="work" style={{ marginBottom: SPACING.XLARGE }}>
      <h2>
        I turn early-stage ideas
        <br />
        into working prototypes.
      </h2>
      <p>
        I work fast, learn fast, and deliver.
        <br />
        Software, hardware, design — whatever the idea needs.
      </p>

      <CTAButton href="#lets-chat">Reach Out</CTAButton>

      <h2>Testimonials</h2>
      <blockquote>
        When you have a difficult problem, something you are not sure is even
        possible, Travis will dive right in and start trying things out. He'll
        figure out the possible approaches and eventually get it all working,
        despite the setbacks and the obstacles out of his control.
        <span className="author">Van, Staff Software Engineer</span>
      </blockquote>

      <blockquote>
        Travis is a builder. I’m impressed with his depth in so many subjects,
        from electronics to photography to woodworking to software. He’s a
        learner -- constantly curious and always tackling new subjects. And a
        teacher, too — he shares his knowledge openly.
        <span className="author">Matt, Head of Architecture</span>
      </blockquote>

      <blockquote>
        Travis is an incredible full-stack engineer. He can take large complex
        projects and break them down into tractable pieces and work with a team
        to get the project done. He has excellent product intuition, balanced
        with a healthy sense of what makes engineering teams efficient. He's
        also a huge catalyst to build a strong culture around collaboration and
        strong teamwork. An incredible asset to any engineering team!
        <span className="author">Daniel, CTO</span>
      </blockquote>

      <blockquote>
        Travis is the kind of engineer who never backs down from a challenge,
        cares about craft, and truly wants to build the best possible product.
        Collaborating with Travis feels like anything is possible because of his
        strong will to tinker and figure things out.
        <span className="author">Ian, Staff Product Designer</span>
      </blockquote>

      <h2>What I Do</h2>
      <p>
        I build across the stack: full-stack apps, embedded systems, hardware
        interfaces, and design. I’ve built MVPs, production apps, and personal
        experiments. All of the projects below have been fully managed,
        researched, designed, and engineered by myself.
      </p>

      <h3>Web + App Projects</h3>
      <p>
        I am self taught and have over ten years of professional experience
        building applications.
      </p>
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

      <h3>Hardware Projects</h3>
      <p>
        I also have a degree in Mechanical Engineering and a collection of
        related side projects. Many of my projects blend hardware and software.
      </p>
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

      <h2>More About Me</h2>
      <p>
        Here are a few more places to learn about my work —{' '}
        {PLACES_YOU_CAN_FIND_ME.map(({ title, path }, idx) => (
          <React.Fragment key={title}>
            <a target="_blank" href={path}>
              {title}
            </a>
            {idx < PLACES_YOU_CAN_FIND_ME.length - 2 && ', '}
            {idx === PLACES_YOU_CAN_FIND_ME.length - 2 && ', and '}
          </React.Fragment>
        ))}
        .
      </p>

      <h2 id="lets-chat">Let's Chat</h2>
      <p>
        Have an idea you want to explore? Want to move from vision to prototype?
      </p>
      <Contact />
    </div>
  )
}

export default WorkWithMe
