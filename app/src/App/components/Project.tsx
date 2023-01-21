import { useMemo, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams, useNavigate } from 'react-router-dom'

import projects, { Project } from 'Projects'
import { Text, ExternalLink, Title, Snapshot } from 'SharedComponents'
import { TERTIARY_COLOR, CSSHover } from 'Theme'

const LinkLi = styled.li`
    display: block;
    text-decoration: underline;

    a {
        color: ${TERTIARY_COLOR};
        ${CSSHover};
    }
`

const SnapshotsWrapper = styled.div`
    /* width: 40%; */
`

const DetailsWrapper = styled.div`
    /* display: flex;
    flex-direction: row;
    justify-content: space-between; */
`

const MetadataWrapper = styled.div`
    /* width: 60%; */
    /* padding-right: 1rem; */
`

const NoScrollWrapper = styled.div`
    position: sticky;
    top: 1rem;
`

const Details = ({ project: { description, links, title, images, id } }: { project: Project }) => {
    const Links = useMemo(() => links.map(l => {
        return (
            <LinkLi key={l.label + l.src}>
                <ExternalLink href={l.src}>
                    {l.label}
                </ExternalLink>
            </LinkLi>
        )
    }), [links])

    const Images = useMemo(() => images.map((i, index) => <Snapshot key={index} src={`${__STATIC__}/projects/${id}/${i.src}`}><span>{i.label}</span></Snapshot>), [images])
    const Description = useMemo(() => description.split('\n').map((paragraph, index) => <Text key={index}>{paragraph}</Text>), [description])
    return (
        <DetailsWrapper>
            <MetadataWrapper>
                <NoScrollWrapper>
                    <Title size='large'>{title}</Title>
                    {Links.length > 0 && (
                        <>
                            <Title size='medium'>Links</Title>
                            <ul>{Links}</ul>
                        </>
                    )}
                    <Title size='medium'>Details</Title>
                    {Description}
                </NoScrollWrapper>
            </MetadataWrapper>
            <SnapshotsWrapper>
                {images.length ? Images : null}
            </SnapshotsWrapper>
        </DetailsWrapper >
    )
}


const Project = () => {
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate();

    const [projectIndex, setProjectIndex] = useState<number>(0)

    useEffect(() => {
        const projectIndex = projects.findIndex(project => project.id == id)
        if (projectIndex === -1) {
            navigate('/notfound')
        } else {
            setProjectIndex(projectIndex)
        }
    }, [id])

    if (projectIndex === undefined) return null

    return (
        <Details project={projects[projectIndex]} />
    )
}

export default Project
