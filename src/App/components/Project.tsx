import { useMemo, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams, useNavigate } from 'react-router-dom'

import projects, { Project } from 'Projects'
import { Text, ExternalLink, Title, Snapshot } from 'SharedComponents'

const LinkLi = styled.li`
    display: inline-block;
    margin-right: 2rem;
    font-weight: 900;
`

const SnapshotsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 50vw;
    margin-left: 36vw;
    > * {
        width: 100%;
    }
`

const DetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    transition: left 1s;
    position: fixed;
    /* left: 0; */
    padding: 1rem;
    /* bottom: 0; */
`

const Details = ({ project: { description, links, name, images } }: { project: Project }) => {
    const Links = useMemo(() => links.map(l => {
        return (
            <LinkLi key={l.name + l.src}>
                <ExternalLink href={l.src}>
                    {l.name}
                </ExternalLink>
            </LinkLi>
        )
    }), [links])

    const Images = useMemo(() => images.map((i, index) => <Snapshot key={index} src={__STATIC__ + 'projects/' + i.src} />), [images])
    return (
        <div>
            <DetailsWrapper>
                <Title size='medium'>{name}</Title>
                {Links.length > 0 && (
                    <ul style={{ listStyle: 'disc', marginLeft: '0em' }}>{Links}</ul>
                )}
                <Text>{description}</Text>
            </DetailsWrapper>
            <SnapshotsWrapper>
                {images.length ? Images : null}
            </SnapshotsWrapper>
        </div >
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
