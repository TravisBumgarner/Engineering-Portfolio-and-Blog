import { ROUTES } from '@common/core'
import { Box, Stack, Typography } from '@mui/material'
import projects, { type Project } from '../../content/projects'
import ItemPreview from '../../sharedComponents/ItemPreview'
import Link from '../../sharedComponents/Link'
import { FONT_SIZES, SPACING } from '../../styles/consts'

const CURRENT_WORK: Project[] = [
  {
    title: 'Just Recordings',
    id: 'just-recordings',
    description: 'Screen recording. Nothing more.',
    lastMeaningfulUpdate: '2026-02',
    images: [],
    links: [{ label: 'GitHub', src: 'https://github.com/TravisBumgarner/just-recordings' }],
    previewImage: { label: 'Preview', src: 'preview.png' },
    shortDescription: '',
  },
  {
    title: 'Context Maintainer',
    id: 'context-maintainer',
    description: 'Per-desktop todo lists for macOS.',
    lastMeaningfulUpdate: '2026-02',
    images: [],
    links: [{ label: 'GitHub', src: 'https://github.com/TravisBumgarner/context-maintainer' }],
    previewImage: { label: 'Preview', src: 'preview.png' },
    shortDescription: '',
  },
  {
    title: 'Personal Photo Gallery',
    id: 'personal-photo-gallery',
    description: 'Self hosted mobile photo gallery.',
    lastMeaningfulUpdate: '2026-02',
    images: [],
    links: [{ label: 'GitHub', src: 'https://github.com/TravisBumgarner/photo-gallery' }],
    previewImage: { label: 'Preview', src: 'preview.png' },
    shortDescription: '',
  },
  {
    title: 'Happy Making Podcast',
    id: 'happy-making-podcast',
    description: 'A podcast for hobbying vicariously.',
    lastMeaningfulUpdate: '2024-11',
    images: [],
    links: [
      {
        label: 'Listen',
        src: 'https://happymaking.art/',
      },
    ],
    previewImage: { label: 'Preview', src: 'preview.png' },
    shortDescription: '',
  },
  {
    title: 'Fast Classifieds',
    id: 'fast-classifieds',
    description: 'Automated job searching.',
    lastMeaningfulUpdate: '2024-11',
    images: [],
    links: [{ label: 'Marketing', src: ROUTES.MARKETING_CLASSIFIEDS.href }],
    previewImage: { label: 'Preview', src: 'preview.png' },
    shortDescription: '',
  },
  {
    title: 'Menu Engineering',
    id: 'menu-engineering',
    description: 'Optimize restaurant menus.',
    lastMeaningfulUpdate: '2024-11',
    images: [],
    links: [
      {
        label: 'GitHub',
        src: 'https://github.com/TravisBumgarner/menu-engineering',
      },
    ],
    previewImage: { label: 'Preview', src: 'preview.png' },
    shortDescription: '',
  },
  {
    title: 'Film Tracker',
    id: 'film-tracker',
    description: 'Track your film photography.',
    lastMeaningfulUpdate: '2024-11',
    images: [],
    links: [{ label: 'GitHub', src: 'https://github.com/TravisBumgarner/film-tracker' }],
    previewImage: { label: 'Preview', src: 'preview.png' },
    shortDescription: '',
  },
]

const MiniItemPreview = ({ project }: { project: Project }) => {
  return (
    <Box
      sx={{
        width: { md: 'calc(33.333% - 8px)', xs: 'calc(50% - 8px)' },
        backgroundColor: 'background.paper',
        padding: SPACING.SMALL.PX,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Typography variant="h2" sx={{ fontSize: FONT_SIZES.MEDIUM.PX, margin: 0 }}>
        {project.title}
      </Typography>
      <Typography sx={{ fontSize: FONT_SIZES.SMALL.PX, margin: 0, marginBottom: SPACING.SMALL.PX }}>
        {project.description}
      </Typography>
      <Stack direction="row" spacing={SPACING.TINY.PX}>
        {project.links.map((l) => (
          <Link
            key={l.src}
            target="_blank"
            sx={{ padding: SPACING.TINY.PX, flexGrow: 1 }}
            type="inlineBlock"
            href={l.src}
          >
            {l.label}
          </Link>
        ))}
      </Stack>
    </Box>
  )
}

const CurrentWork = () => {
  return (
    <>
      <Typography variant="h2" sx={{ fontWeight: 500, marginBottom: SPACING.SMALL.PX, fontSize: FONT_SIZES.MEDIUM.PX }}>
        Work In Progress
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: SPACING.SMALL.PX,
          mb: SPACING.LARGE.PX,
        }}
      >
        {CURRENT_WORK.map((project) => {
          return <MiniItemPreview project={project} key={project.id} />
        })}
      </Box>
    </>
  )
}

const Portfolio = () => {
  return (
    <>
      <CurrentWork />
      <Typography variant="h2" sx={{ fontWeight: 500, marginBottom: SPACING.SMALL.PX, fontSize: FONT_SIZES.MEDIUM.PX }}>
        Portfolio
      </Typography>
      {Object.values(projects)
        .sort((a, b) => (a.lastMeaningfulUpdate > b.lastMeaningfulUpdate ? -1 : 1))
        .map(({ id, title, previewImage, lastMeaningfulUpdate, shortDescription }) => {
          return (
            <ItemPreview
              type="creation"
              key={id}
              description={shortDescription}
              link={`${ROUTES.CREATIONS.href}/${id}`}
              title={title}
              date={lastMeaningfulUpdate}
              src={previewImage && `/project-resources/${id}/${previewImage.src}`}
            />
          )
        })}
    </>
  )
}

export default Portfolio
