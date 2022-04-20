import React from 'react'
import styled from 'styled-components'
import { useParams, useNavigate } from 'react-router-dom'
import {
    FaArrowCircleRight,
    FaArrowCircleLeft,
    FaArrowAltCircleRight
} from 'react-icons/fa'

import { media, PRIMARY_COLOR, TERTIARY_COLOR } from 'Theme'
import { allSkills, Project } from 'Content'
import { Text, ExternalLink, Title } from 'SharedComponents'

const DetailsWrapper = styled.div``

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

const Content = styled.div`
    flex-grow: 1;

    ${media.tablet} {
        margin: 0 20px;
    }
`

const SubContent = styled.div`
    display: flex;
    justify-content: space-between;

    & > div {
        width: 32%;
    }
    ${media.tablet} {
        flex-direction: column;
        & div {
            width: 100%;
        }
    }
`

const Sidebar = styled.div`
    width: 38%;
    min-width: 400px;
    margin-right: 20px;

    ${media.desktop}{
        width: 30%;
        min-width: 200px;
    }

    ${media.tablet} {
        display: none;
    }
`

const Image = styled.img`
    display: block;
    margin: 20px 0;
    width: 100%;
    box-sizing: border-box;
    align-self: center;
    border: 5px solid white;
`

const SidebarImage = styled.img`
    height: auto;
    width: 100%;
    border: 5px solid white;
    box-sizing: border-box;
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

type DetailsProps = {
    project: Project
}

const Details = ({
    project: {
        description,
        locations,
        organizations,
        skills,
        links,
        preview_img,
        name,
        start_date,
        end_date,
        images
    }
}: DetailsProps) => {
    const Description = description.split('\n').map((d, idx) => <Text key={idx}>{d}</Text>)
    const Locations = locations.join(', ')
    const Organizations = organizations.join(', ')
    const Skills = skills
        .map(s => allSkills[s].name)
        .sort()
        .join(', ')
    const Links = links.map(l => {
        return (
            <li key={l.name + l.src}>
                <ExternalLink href={l.src}>
                    {l.name}
                </ExternalLink>
            </li>
        )
    })
    const Images = images.map((i, index) => <Image key={index} src={__MEDIA__ + i.src} />)
    return (
        <DetailsWrapper>
            <Row>
                <Sidebar>
                    <SidebarImage src={__MEDIA__ + preview_img.src} />
                </Sidebar>

                <Content>
                    <Title size="medium">{name}</Title>
                    {!!Links.length && (
                        <Section title="Links">
                            <ul style={{ listStyle: 'disc', marginLeft: '1em' }}>{Links}</ul>
                        </Section>
                    )}
                    <Section title="Description">{Description}</Section>

                    <Section title="Skills">
                        <Text>{Skills}</Text>
                    </Section>

                    {images.length ? <Section title="Photos">{Images}</Section> : null}

                    <SubContent>
                        <Section title="When">
                            <Text>
                                {' '}
                                {`${start_date.slice(0, -3)} to ${end_date === 'Ongoing' ? 'Ongoing' : end_date.slice(0, -3)
                                    }`}
                            </Text>
                        </Section>
                        <Section title="Where">
                            <Text>{Locations}</Text>
                        </Section>
                        <Section title="Who">
                            <Text>{Organizations}</Text>
                        </Section>
                    </SubContent>
                </Content>
            </Row>
        </DetailsWrapper>
    )
}

type SingleProjectProps = {
    projects: Project[]
}

const SingleProjectWrapper = styled.div`
    justify-content: space-between;
    display: flex;
    align-items: top;

    ${media.desktop} {
        margin: 20px 4vw;
    }
`

const ChangeProjectButtonWrapper = styled.div`
    margin: 2em;
    border: 0;
    cursor: pointer;
    position: relative;
    top: 30vh;

    ${media.desktop} {
        display: none;
    }
`

const PrevProject = styled(FaArrowCircleLeft)`
    fill: ${PRIMARY_COLOR};
    position: fixed;
    top: calc(50vh - 1.5em/2);
    left: 10px;
    font-size: 1.25em;

    &:hover{
        fill: ${TERTIARY_COLOR};
    }

    ${media.desktop} {
        font-size: 1em;
        left: 5px;
    }
`

const NextProject = styled(FaArrowAltCircleRight)`
    fill: ${PRIMARY_COLOR};
    position: fixed;
    top: calc(50vh - 1.5em/2);
    right: 10px;
    font-size: 1.25em;

    &:hover{
        fill: ${TERTIARY_COLOR};
    }

    ${media.desktop} {
        font-size: 1em;
        right: 5px;
    }
`

const SingleProject = ({
    projects
}: SingleProjectProps) => {
    if (!Object.keys(projects).length) {
        return null
    }
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate();

    const projectId = projects.findIndex(project => project.id == id)
    const previousId = projectId > 0 ? projectId - 1 : projects.length - 1
    const nextId = projectId < projects.length - 1 ? projectId + 1 : 0

    return (
        <>
            <SingleProjectWrapper>
                <PrevProject size="2em" onClick={() => navigate(`/project/${projects[previousId]['id']}`)} />
                <Details project={projects[projectId]} />

                <NextProject onClick={() => navigate(`/project/${projects[nextId]['id']}`)} size="2em" />
            </SingleProjectWrapper >
        </>
    )
}

export default SingleProject
