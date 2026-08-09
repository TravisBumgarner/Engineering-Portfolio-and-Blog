import { ROUTES } from '@common/core'
import { Box, Button, Stack, type SxProps, type Theme, Typography } from '@mui/material'
import React, { useCallback, useRef } from 'react'
import projects from '../content/projects'
import BlurHashImage from '../sharedComponents/BlurHashImage'
import Contact from '../sharedComponents/ContactForm'
import ItemPreview from '../sharedComponents/ItemPreview'
import Link from '../sharedComponents/Link'
import { SPACING, subtleBackground } from '../styles/consts'

/**
 * TODO(travis): still a placeholder. With no email address on the page, this is
 * the only way to reach out that isn't the form. Set it before shipping over /work.
 * Set to null to hide the "book a call" CTA entirely.
 */
const CALL_LINK: string | null = null // e.g. 'https://cal.com/travisbumgarner/intro'

const HOW_IT_WORKS = [
  {
    title: '1. A 30 minute call',
    body: "You walk me through the idea. I tell you honestly whether I'm the right person for it, and what I think the hard parts are.",
  },
  {
    title: '2. A written scope',
    body: 'Within a few days you get a fixed scope, a timeline, and a price. No open-ended hourly billing, no surprises.',
  },
  {
    title: '3. Something you can use',
    body: 'You end up with a real device you can hold, switch on, and try out. You own all resources.',
  },
]

/**
 * Attribution matters more than volume here. First-name-only quotes read as
 * unverifiable, which undersells genuinely strong references.
 * TODO(travis): add company + a link to the LinkedIn recommendation for each.
 */
const TESTIMONIALS = [
  {
    quote:
      'When you have a difficult problem, something you are not sure is even possible, Travis will dive right in and start trying things out. He’ll figure out the possible approaches and eventually get it all working, despite the setbacks and the obstacles out of his control.',
    name: 'Van',
    role: 'Staff Software Engineer',
    company: 'TODO',
    href: null as string | null,
  },
  {
    quote:
      'Travis is a builder. I’m impressed with his depth in so many subjects, from electronics to photography to woodworking to software. He’s a learner -- constantly curious and always tackling new subjects.',
    name: 'Matt',
    role: 'Head of Architecture',
    company: 'TODO',
    href: null as string | null,
  },
  {
    quote:
      'Travis is the kind of engineer who never backs down from a challenge, cares about craft, and truly wants to build the best possible product. Collaborating with Travis feels like anything is possible because of his strong will to tinker and figure things out.',
    name: 'Ian',
    role: 'Staff Product Designer',
    company: 'TODO',
    href: null as string | null,
  },
  // Daniel's (CTO) quote from /work is a full-time-hire reference ("an incredible
  // asset to any engineering team") which fights this page's contract framing.
  // Reframe it around delivery or leave it on a full-time-focused page.
]

/**
 * Three, not nine, and all hardware. The old page put nine image-heavy cards
 * between the hero CTA and the form, and the web apps pulled against the pitch.
 * They still live on /creations.
 * Other hardware candidates: camera-from-scratch, strangerer-things.
 */
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

/**
 * Breadth, where SELECTED_WORK is depth. These never got a write-up, so they're
 * thumbnails with a label and nothing to click through to.
 * TODO(travis): confirm the labels. Images live in /snapshot-resources.
 */
const OTHER_PROTOTYPES = [
  { src: '/snapshot-resources/12-Screenshot 2025-11-07 at 3.55.50 PM.jpg', label: 'Bluetooth dice, early enclosure' },
  { src: '/snapshot-resources/snapshot-14.jpg', label: 'Camera built from scratch' },
  { src: '/snapshot-resources/snapshot-22.jpg', label: 'Button board, v1.0 and v1.1' },
  { src: '/snapshot-resources/snapshot-43.jpg', label: 'Handheld game board, bring-up' },
  { src: '/snapshot-resources/snapshot-69.jpg', label: 'Raspberry Pi dashboard' },
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

const WorkWithMeV2 = () => {
  const letsChatRef = useRef<HTMLDivElement | null>(null)

  // The old CTA scrolled but left focus behind, so keyboard and screen reader
  // users got nothing at all. Move focus, and don't animate for people who
  // asked us not to.
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
      {/*
        NOTE: the site-wide h1 lives in SiteTitle.tsx and renders a *randomized*
        filename (travis_bumgarner_proto_v2.tsx). On the page you most want
        indexed, that's the heading Google reads. Long term, SiteTitle should
        render `component="p"` (or only be an h1 on the home page) so this one wins.
      */}
      <Typography variant="h1" component="h1" gutterBottom sx={{ mt: SPACING.MEDIUM.PX }}>
        I turn early-stage ideas
        <br />
        into working hardware.
      </Typography>
      <Typography>
        Custom electronics, firmware, and enclosures, plus the app that talks to them. I work fast, learn fast, and hand
        you a connected device you can put in front of users, investors, or a factory.
      </Typography>

      {/*
        A form is not the only way people want to reach out. With no email address
        on the page, CALL_LINK is the only non-form channel, so it's worth setting up.
      */}
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={SPACING.SMALL.PX} sx={{ mb: SPACING.MEDIUM.PX }}>
        <Button onClick={handleClick} fullWidth variant="contained" size="large">
          Start a project
        </Button>
        {CALL_LINK && (
          <Button href={CALL_LINK} target="_blank" rel="noreferrer" fullWidth variant="outlined" size="large">
            Book a 30 min call
          </Button>
        )}
      </Stack>

      {/* Moved above the testimonials. Praise means nothing before I know what you do. */}
      <Typography variant="h2" sx={sectionHeadingSX}>
        What I Do
      </Typography>
      {/*
        First paragraph is deliberately jargon-free. It has to land with a founder
        or a product person who doesn't know a PCB from a breadboard. The specifics
        come second, for the engineer they forward the page to.
      */}
      <Typography>
        You have an idea for a physical product. I make one that works. Not a rendering, not a slide deck. A real object
        you can hold, switch on, and hand to someone else. One person handles the whole thing, from the circuit inside
        to the case around it to the app on your phone, so nothing falls through the gap between vendors.
      </Typography>
      <Typography>
        In practice that means schematic and PCB design in KiCad, embedded firmware on ESP32 and Arduino, BLE and Wi-Fi,
        enclosures in CAD and off the 3D printer, and the companion app or dashboard. A degree in Mechanical Engineering
        sits behind the hardware and ten years of professional software experience behind the code. Every project below
        was researched, designed, and engineered by me.
      </Typography>

      <Typography variant="h2" sx={sectionHeadingSX}>
        How This Works
      </Typography>
      {/* Side by side on desktop so the three steps read as one short process, stacked on small screens. */}
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
      {/*
        Stays under the Selected Work heading rather than getting its own h2. The
        three above are the argument; this is the evidence that they aren't all of it.

        Square crops on a fixed grid so this reads as inventory, not as a photo
        gallery. Deliberately not clickable: none of these have a page to go to,
        and a link that goes nowhere is worse than no link.
      */}
      <Typography>And a few that never got a write-up:</Typography>
      <Box sx={prototypeGridSX}>
        {OTHER_PROTOTYPES.map(({ src, label }) => (
          <Box key={src}>
            <BlurHashImage src={src} alt={label} aspectRatio={1} useBorder={false} />
            <Typography variant="body2" sx={{ mt: SPACING.TINY.PX }}>
              {label}
            </Typography>
          </Box>
        ))}
      </Box>
      <Link type="inlineBlock" href={ROUTES.CREATIONS.href}>
        See all projects
      </Link>

      <Typography variant="h2" sx={sectionHeadingSX}>
        What People Say
      </Typography>
      <Stack direction="column" spacing={SPACING.MEDIUM.PX}>
        {TESTIMONIALS.map(({ quote, name, role, company, href }) => (
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
              {company ? `, ${company}` : ''}
            </Typography>
          </Box>
        ))}
      </Stack>

      <Typography variant="h2" sx={sectionHeadingSX}>
        More About Me
      </Typography>
      <Typography>Here are a few more places to learn about me: {formatLinks(PLACES_YOU_CAN_FIND_ME)}.</Typography>
      {/*
        The "Exhibit 1-5" block from /work (Silly Apps, Project Graveyard, Pointless
        Projects) is deliberately gone. It's charming on the portfolio page and it
        argues against you on the page where someone decides whether to pay you.
      */}

      <Box ref={letsChatRef} sx={{ mt: SPACING.HUGE.PX }}>
        {/* The Box owns the section gap here, so the heading doesn't add a second one. */}
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

// The theme's h2 top margin collapses against the previous paragraph's bottom
// margin, so every section ran together at 20px. This page is long enough that
// the sections need to read as separate beats.
const sectionHeadingSX: SxProps = {
  mt: SPACING.HUGE.PX,
}

const prototypeGridSX: SxProps = {
  display: 'grid',
  gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(5, 1fr)' },
  gap: SPACING.SMALL.PX,
  mb: SPACING.MEDIUM.PX,
}

const howItWorksCardSX: SxProps<Theme> = {
  flex: 1,
  // Without this, a long body in one card widens it and squeezes the others.
  minWidth: 0,
  padding: SPACING.MEDIUM.PX,
  backgroundColor: ({ palette }) => subtleBackground(palette.mode, 'slightly'),
}

const quoteSX: SxProps = {
  fontStyle: 'italic',
  margin: 0,
  marginBottom: SPACING.SMALL.PX,
}

export default WorkWithMeV2
