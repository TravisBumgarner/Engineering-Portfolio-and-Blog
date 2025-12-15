'use client'

import projects, { type Project } from '../../content/projects'
import ROUTES from '../../routes'
import Link from '../../sharedComponents/Link'
import { FONT_SIZES, SPACING } from '../../styles/consts'
import { Box, Stack, Typography } from '@mui/material'
import ItemPreview from '../../sharedComponents/ItemPreview'

const CURRENT_WORK: Project[] = [
    {
        title: "Happy Making Podcast",
        id: 'happy-making-podcast',
        description: "A podcast for hobbying vicariously.",
        lastMeaningfulUpdate: '2024-11',
        images: [],
        links: [{
            label: "Listen", src: "https://happymaking.art/"
        }],
        previewImage: { label: 'Preview', src: 'preview.png' },
        shortDescription: "",
    },
    {
        title: 'Fast Classifieds',
        id: 'fast-classifieds',
        description: "Automated job searching",
        lastMeaningfulUpdate: '2024-11',
        images: [],
        links: [{ label: "Marketing", src: '/marketing/classifieds' }, { label: "GitHub", src: "https://github.com/TravisBumgarner/fast-classifieds" }],
        previewImage: { label: 'Preview', src: 'preview.png' },
        shortDescription: "",
    },
    {
        title: "Menu Engineering",
        id: 'menu-engineering',
        description: "Optimize restaurant menus.",
        lastMeaningfulUpdate: '2024-11',
        images: [],
        links: [{
            label: "GitHub", src: "https://github.com/TravisBumgarner/menu-engineering"
        }],
        previewImage: { label: 'Preview', src: 'preview.png' },
        shortDescription: "",
    }
]

const MiniItemPreview = ({ project }: { project: Project }) => {
    return (
        <Box sx={{ width: '33%', backgroundColor: 'background.paper', padding: SPACING.SMALL.PX }}>
            <Typography variant="h2" sx={{ fontSize: FONT_SIZES.MEDIUM.PX, margin: 0 }}>{project.title}</Typography>
            <Typography sx={{ fontSize: FONT_SIZES.SMALL.PX, margin: 0, marginBottom: SPACING.SMALL.PX }}>{project.description}</Typography>
            <Stack direction="row" spacing={SPACING.TINY.PX}>{project.links.map(l => (<Link key={l.src} target="_blank" sx={{ padding: SPACING.TINY.PX, flexGrow: 1 }} type="inlineBlock" href={l.src}>{l.label}</Link>))}</Stack>
        </Box>
    )
}

const CurrentWork = () => {
    return (
        <>
            <Typography variant="h2" sx={{ fontWeight: 500, marginBottom: SPACING.SMALL.PX, fontSize: FONT_SIZES.MEDIUM.PX }}>Work In Progress</Typography >
            <Stack spacing={SPACING.SMALL.PX} mb={SPACING.LARGE.PX} direction="row">
                {CURRENT_WORK.map((project) => {
                    return (
                        <MiniItemPreview project={project} key={project.id} />
                    )
                })}
            </Stack >
        </>
    )
}

const Portfolio = () => {
    return (
        <>
            <CurrentWork />
            <Typography variant="h2" sx={{ fontWeight: 500, marginBottom: SPACING.SMALL.PX, fontSize: FONT_SIZES.MEDIUM.PX }}>Portfolio</Typography >
            {Object.values(projects)
                .sort((a, b) => (a.lastMeaningfulUpdate > b.lastMeaningfulUpdate ? -1 : 1))
                .map(({ id, title, previewImage, lastMeaningfulUpdate, shortDescription }, index) => {
                    return (
                        <ItemPreview
                            type="creation"
                            priority={index === 0}
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
