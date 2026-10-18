import { ROUTES } from '@common/core'
import { Box, Button, Stack, type SxProps, type Theme, Typography } from '@mui/material'
import React, { useCallback, useRef } from 'react'
import projects from '../content/projects'
import Contact from '../sharedComponents/ContactForm'
import ItemPreview from '../sharedComponents/ItemPreview'
import Link from '../sharedComponents/Link'
import { SPACING, subtleBackground } from '../styles/consts'

const HOW_IT_WORKS = [
  {
    title: '1. 30-minute call',
    body: "You walk me through the idea. I tell you honestly whether I'm the right person for it, and what I think the hard parts are.",
  },
  {
    title: '2. Written scope',
    body: 'Within a few days you get a fixed scope, a timeline, and a price. No open-ended hourly billing, no surprises.',
  },
  {
    title: '3. Something tangible',
    body: 'You end up with a real device you can hold, switch on, and try out. You own all resources.',
  },
]

const TESTIMONIALS = [
  {
    quote:
      'When you have a difficult problem, something you are not sure is even possible, Travis will dive right in and start trying things out. He’ll figure out the possible approaches and eventually get it all working, despite the setbacks and the obstacles out of his control.',
    name: 'Van',
    role: 'Staff Software Engineer',
    href: null as string | null,
  },
  {
    quote:
      'Travis is a builder. I’m impressed with his depth in so many subjects, from electronics to photography to woodworking to software. He’s a learner -- constantly curious and always tackling new subjects.',
    name: 'Matt',
    role: 'Head of Architecture',
    href: null as string | null,
  },
  {
    quote:
      'Travis is the kind of engineer who never backs down from a challenge, cares about craft, and truly wants to build the best possible product. Collaborating with Travis feels like anything is possible because of his strong will to tinker and figure things out.',
    name: 'Ian',
    role: 'Staff Product Designer',
    href: null as string | null,
  },
]


const SELECTED_WORK = [
  {
    key: 'painless-prototyping-second-attempt',
    why: 'A custom keyboard taken from idea to a product people bought: electronics, enclosure, firmware, and the classes that taught people to use it.',
  },
  {
    key: 'dice-of-sending',
    why: 'Bluetooth dice that roll in the physical and digital worlds at once. Firmware, radio, and enclosure design in one object that actually works.',
  },
  {
    key: 'pixels64',
    why: 'Custom KiCad PCB, 3D-printed housing, and an ESP32 running CircuitPython: the full path from schematic to finished device.',
  },
]

const PLACES_YOU_CAN_FIND_ME = [
  { title: 'More Creations', path: ROUTES.CREATIONS.href },
  { title: 'GitHub', path: 'https://github.com/travisBumgarner/' },
  { title: 'LinkedIn', path: 'https://www.linkedin.com/in/travisbumgarner/' },
  { title: 'Resume', path: '/travis_bumgarner_resume.pdf' },
]

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

const WorkWithMe = () => {
  const letsChatRef = useRef<HTMLDivElement | null>(null)

  const handleClick = useCallback(() => {
    const target = letsChatRef.current
    if (!target) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' })

    const firstField = target.querySelector<HTMLInputElement | HTMLTextAreaElement>('input, textarea')
    firstField?.focus({ preventScroll: true })
  }, [])

  return (
    <>
      <Typography variant="h1" component="h1" gutterBottom sx={{ mt: SPACING.MEDIUM.PX }}>
        I turn early-stage ideas
        <br />
        into working hardware & software.
      </Typography>
      <Typography>
        Custom electronics, firmware, and enclosures, plus the app that talks to them. I work fast, learn fast, and hand
        you a connected device you can put in front of users, investors, or a factory.
      </Typography>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={SPACING.SMALL.PX} sx={{ mb: SPACING.MEDIUM.PX }}>
        <Button onClick={handleClick} fullWidth variant="contained" size="large">
          Start a project
        </Button>
      </Stack>

      <Typography variant="h2" sx={sectionHeadingSX}>
        What I Do
      </Typography>
      <Typography>
        You have an idea for a physical product. I make one that works. A real object
        you can hold, switch on, and hand to someone else. I handle the whole thing, from the circuit inside
        to the case around it to the app on your phone, so nothing falls through the gap between vendors.
      </Typography>
      <Typography>
        In practice that means schematic and PCB design in KiCad, embedded firmware on ESP32 and Arduino, BLE and Wi-Fi,
        enclosures in CAD and off the 3D printer, and the companion app or dashboard. A degree in mechanical engineering
        sits behind the hardware and ten years of professional software experience behind the code. Every project below
        was researched, designed, and engineered by me.
      </Typography>

      <Typography variant="h2" sx={sectionHeadingSX}>
        How This Works
      </Typography>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={SPACING.MEDIUM.PX} alignItems="stretch">
        {HOW_IT_WORKS.map(({ title, body }) => (
          <Box key={title} sx={howItWorksCardSX}>
            <Typography variant="h3" sx={{ mt: 0 }}>
              {title}
            </Typography>
            <Typography sx={{ mt: 0 }}>{body}</Typography>
          </Box>
        ))}
      </Stack>

      <Typography variant="h2" sx={sectionHeadingSX}>
        Selected Work
      </Typography>
      {SELECTED_WORK.map(({ key, why }) => {
        const { id, title, previewImage, shortDescription } = projects[key]
        return (
          <ItemPreview
            type="creation"
            key={id}
            titleComponent="h3"
            description={`${shortDescription}\n${why}`}
            link={`${ROUTES.CREATIONS.href}/${id}`}
            title={title}
            src={`/project-resources/${id}/${previewImage.src}`}
          />
        )
      })}
      <Link width="100%" type="inlineBlock" href={ROUTES.CREATIONS.href}>
        See all projects
      </Link>

      <Typography variant="h2" sx={sectionHeadingSX}>
        What People Say
      </Typography>
      <Stack direction="column" spacing={SPACING.MEDIUM.PX}>
        {TESTIMONIALS.map(({ quote, name, role, href }) => (
          <Box key={name} component="figure" sx={{ m: 0 }}>
            <Typography component="blockquote" sx={quoteSX}>
              {quote}
            </Typography>
            <Typography component="figcaption" variant="body1" sx={{ textAlign: 'right', mt: 0 }}>
              {href ? (
                <Link type="inline" href={href} target="_blank">
                  {name}
                </Link>
              ) : (
                name
              )}
              , {role}
            </Typography>
          </Box>
        ))}
      </Stack>

      <Typography variant="h2" sx={sectionHeadingSX}>
        More About Me
      </Typography>
      <Typography>Here are a few more places to learn about me: {formatLinks(PLACES_YOU_CAN_FIND_ME)}.</Typography>
      <Box ref={letsChatRef} sx={{ mt: SPACING.HUGE.PX }}>
        <Typography variant="h2" gutterBottom sx={{ mt: 0 }}>
          Start a Project
        </Typography>
        <Typography sx={{ mt: 0 }}>
          Tell me what you&apos;re trying to build and where you&apos;re stuck. I read every message and reply within
          two business days.
        </Typography>
        <Contact subject="Project inquiry" requireEmail />
        <Box sx={{ height: SPACING.HUGE.PX }} />
      </Box>
    </>
  )
}

const sectionHeadingSX: SxProps = {
  mt: SPACING.HUGE.PX,
}

const howItWorksCardSX: SxProps<Theme> = {
  flex: 1,
  minWidth: 0,
  padding: SPACING.MEDIUM.PX,
  backgroundColor: ({ palette }) => subtleBackground(palette.mode, 'slightly'),
}

const quoteSX: SxProps = {
  fontStyle: 'italic',
  margin: 0,
  marginBottom: SPACING.SMALL.PX,
}

export default WorkWithMe
