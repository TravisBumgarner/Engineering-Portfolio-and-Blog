'use client'

import { Box, Stack, Typography } from '@mui/material'
import projects from '../../content/projects'
import Figure from '../../sharedComponents/Figure'
import Link from '../../sharedComponents/Link'
import { SPACING } from '../../styles/consts'
import Youtube from '../../sharedComponents/YouTube'
import { useParams } from 'react-router-dom'

const Creation = () => {
    const { id } = useParams()
    const project = projects[id || '']

    const Images = project.images.map((i) => ({
        key: i.src,
        element: (
            <Box key={i.src}>
                <Figure caption={i.label} key={i.src} src={`/project-resources/${project.id}/${i.src}`} />
            </Box>
        ),
    }))

    const Videos = project.videos?.map(embedId => <Youtube key={embedId} embedId={embedId} />)

    const Description = [
        ...(project.toolsAndTechnologies ? [<Typography key="toolsAndTechnologies">Tools & Tech: {project.toolsAndTechnologies}</Typography>] : []),
        ...(project.description
            .split('\n')
            .map((paragraph) => <Typography key={paragraph}>{paragraph}</Typography>))
    ]

    return (
        <Box>
            <Typography variant="h2">{project.title}</Typography>
            <time>
                Last Updated {' '}
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
