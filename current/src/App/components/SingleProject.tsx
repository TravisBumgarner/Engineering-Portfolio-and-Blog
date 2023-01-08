import { useMemo, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams, useNavigate } from 'react-router-dom'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'

import projects, { Project } from 'Content'
import { media, PRIMARY_COLOR, TERTIARY_COLOR } from 'Theme'
import { Text, ExternalLink, Title } from 'SharedComponents'

const Image = styled.img`
    display: block;
    margin: 20px 0;
    width: 100%;
    box-sizing: border-box;
    align-self: center;
`

const SectionWrapper = styled.div`
    width: 100%;
    margin-bottom: 20px;
`

type SectionProps = {
    children: React.ReactNode
    title: string
}

const LinkLi = styled.li`
    display: inline-block;
    margin-right: 2rem;
    font-weight: 900;
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
    const Images = useMemo(() => images.map((i, index) => <Image key={index} src={__STATIC__ + i.src} />), [images])
    return (
        <div>
            <Title size='medium'>{name}</Title>
            {Links.length > 0 && (
                <ul style={{ listStyle: 'disc', marginLeft: '0em' }}>{Links}</ul>
            )}
            <Text>{description}</Text>
            {images.length ? Images : null}
        </div >
    )
}

const SingleProjectWrapper = styled.div`
`

const ButtonWrapper = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: white;
    width: 100%;
    display: flex;
    padding: 0.5rem;
    justify-content: center;

    svg {
        fill: ${PRIMARY_COLOR};
        top: calc(50vh - 1.5em/2);
        font-size: 1.25em;
        cursor: pointer;

        &:hover{
            fill: ${TERTIARY_COLOR};
        }

        &:first-child{
            margin-right: 1rem;
        }

        ${media.desktop} {
            font-size: 1em;
        }
    }
`

const SingleProject = () => {
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate();

    const [projectIndex, setProjectIndex] = useState<number>(0)

    const previousIndex = useMemo(() => projectIndex > 0 ? projectIndex - 1 : projects.length - 1, [projectIndex])
    const nextIndex = useMemo(() => projectIndex < projects.length - 1 ? projectIndex + 1 : 0, [projectIndex])

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
        <SingleProjectWrapper>
            <Details project={projects[projectIndex]} />
            <ButtonWrapper>
                <FaArrowCircleLeft size="2em" onClick={() => navigate(`/project/${projects[previousIndex]['id']}`)} />
                <FaArrowCircleRight onClick={() => navigate(`/project/${projects[nextIndex]['id']}`)} size="2em" />
            </ButtonWrapper>
        </SingleProjectWrapper >
    )
}

export default SingleProject
