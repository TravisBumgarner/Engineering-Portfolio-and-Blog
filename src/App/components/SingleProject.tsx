import React, { useEffect, useMemo, useState } from 'react'
import styled, { css } from 'styled-components'
import { useParams, useNavigate } from 'react-router-dom'
import { FaArrowCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'

import projects, { Project } from 'Content'
import { media, PRIMARY_COLOR, TERTIARY_COLOR } from 'Theme'
import { Text, ExternalLink, Title } from 'SharedComponents'

const DetailsWrapper = styled.div``

const Image = styled.img`
    display: block;
    margin: 20px 0;
    width: 100%;
    box-sizing: border-box;
    align-self: center;
    border: 5px solid white;
`

const SectionWrapper = styled.div`
    width: 100%;
    margin-bottom: 20px;
`

type SectionProps = {
    children: React.ReactNode
    title: string
}

const Section = ({ children, title }: SectionProps) => {
    return (
        <SectionWrapper>
            <Title size="small">{title}</Title>
            {children}
        </SectionWrapper>
    )
}

const Details = ({ project: { description, links, name, images } }: { project: Project }) => {
    const Links = useMemo(() => links.map(l => {
        return (
            <li key={l.name + l.src}>
                <ExternalLink href={l.src}>
                    {l.name}
                </ExternalLink>
            </li>
        )
    }), [links])
    const Images = useMemo(() => images.map((i, index) => <Image key={index} src={__STATIC__ + i.src} />), [images])
    return (
        <DetailsWrapper>
            <Title size='large'>{name}</Title>
            {Links.length > 0 && (
                <Section title="Links">
                    <ul style={{ listStyle: 'disc', marginLeft: '1em' }}>{Links}</ul>
                </Section>
            )}
            <Section title="Description"><Text>{description}</Text></Section>
            {images.length ? <Section title="Photos">{Images}</Section> : null}
        </DetailsWrapper >
    )
}

const SingleProjectWrapper = styled.div`
    justify-content: space-between;
    display: flex;
    align-items: top;

    ${media.desktop} {
        margin: 20px 4vw;
    }
`

const SharedButtonCSS = css`
    fill: ${PRIMARY_COLOR};
    position: fixed;
    top: calc(50vh - 1.5em/2);
    font-size: 1.25em;

    &:hover{
        fill: ${TERTIARY_COLOR};
    }

    ${media.desktop} {
        font-size: 1em;
    }
`

const PrevProject = styled(FaArrowCircleLeft)`
    ${SharedButtonCSS};
    left: 10px;

    ${media.desktop} {
        left: 5px;
    }
    
`

const NextProject = styled(FaArrowAltCircleRight)`
${SharedButtonCSS};
    right: 10px;

    ${media.desktop} {
        left: 5px;
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
            <PrevProject size="2em" onClick={() => navigate(`/project/${projects[previousIndex]['id']}`)} />
            <Details project={projects[projectIndex]} />
            <NextProject onClick={() => navigate(`/project/${projects[nextIndex]['id']}`)} size="2em" />
        </SingleProjectWrapper >
    )
}

export default SingleProject
