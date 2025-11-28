'use client'

import { Box, Stack, Typography } from '@mui/material'
import type { Project } from '@/content/projects'
import Figure from '@/lib/sharedComponents/Figure'
import Link from '@/lib/sharedComponents/Link'
import { SPACING } from '@/lib/styles/consts'
import Youtube from '@/lib/sharedComponents/YouTube'

export type Params = Promise<{ id: string }>

const Creation = ({ project }: { project: Project }) => {
  const Images = project.images.map((i) => ({
    key: i.src,
    element: (
      <Box key={i.src}>
        <Figure caption={i.label} key={i.src} src={`/project-resources/${project.id}/${i.src}`} />
      </Box>
    ),
  }))

  const Videos = project.videos?.map(embedId => <Youtube embedId={embedId} />)

  const Description = project.description
    .split('\n')
    .map((paragraph) => <Typography key={paragraph}>{paragraph}</Typography>)

  if (project.toolsAndTechnologies) {
    Description.push(<Typography key="toolsAndTechnologies">{project.toolsAndTechnologies}</Typography>)
  }

  return (
    <Box>
      <Typography variant="h2">{project.title}</Typography>
      <time>
        Last Update:{' '}
        {new Date(`${project.lastMeaningfulUpdate}-05`).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        })}
      </time>
      {Description}
      <Stack direction="row" gap={SPACING.SMALL.PX} flexWrap="wrap">
        {project.links.map((l) => (
          <Link type="inlineBlock" key={l.label + l.src} target="_blank" href={l.src}>
            {l.label}
          </Link>
        ))}
      </Stack>
      {project.videos && Videos}
      {Images.map((i) => i.element)}
    </Box >
  )
}
export default Creation
