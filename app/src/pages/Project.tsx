import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'

import projects, { Project } from 'content/projects'
import ExternalLink from 'SharedComponents/ExternalLink'
import Header from 'SharedComponents/Header'
import InternalLink from 'SharedComponents/InternalLink'
import MasonryGrid from 'SharedComponents/MasonryGrid'
import Text from 'SharedComponents/Text'
import { SPACING } from 'Theme'
import ProjectImage from './ProjectImage'
import ROUTES from 'SharedComponents/routes'

const MetadataWrapper = styled.div`
  margin-bottom: ${SPACING.MEDIUM}px;
`

const Details = ({
  project: { description, links, title, images, id, lastMeaningfulUpdate }
}: {
  project: Project
}) => {
  const Links = useMemo(
    () =>
      links.map(l => {
        return (
          <li key={l.label + l.src}>
            <ExternalLink href={l.src}>{l.label}</ExternalLink>
          </li>
        )
      }),
    [links]
  )

  const Images = useMemo(
    () =>
      images.map((i, index) => ({
        key: i.src,
        element: (
          <SnapshotWrapper key={i.src}>
            <ProjectImage
              text={i.label}
              key={index}
              src={`${__STATIC__}/projects/${id}/${i.src}`}
            />
          </SnapshotWrapper>
        )
      })),
    [images]
  )
  const Description = useMemo(
    () =>
      description
        .split('\n')
        .map((paragraph, index) => <Text key={index}>{paragraph}</Text>),
    [description]
  )
  return (
    <DetailsWrapper>
      <MetadataWrapper>
        <Header size="large">
          <InternalLink to={ROUTES.CREATIONS.path}>{ROUTES.CREATIONS.title}://</InternalLink> {title}
        </Header>
        <Time>
          {new Date(`${lastMeaningfulUpdate}-05`).toLocaleString('default', {
            month: 'long',
            year: 'numeric'
          })}
        </Time>
        <DescriptionWrapper>{Description}</DescriptionWrapper>
        {Links.length > 0 && <LinksWrapper>{Links}</LinksWrapper>}
      </MetadataWrapper>
      <MasonryGrid elementsWithKeys={Images} />
    </DetailsWrapper>
  )
}

const Project = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

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

  return <Details project={projects[projectIndex]} />
}

const DescriptionWrapper = styled.div`
  margin: ${SPACING.XLARGE}px 0;
`

const LinksWrapper = styled.ul`
  margin: ${SPACING.XLARGE}px 0;
`

const Time = styled.time`
  display: block;
  font-size: 0.8rem;
  margin-top: ${SPACING.SMALL}px;
  margin-bottom: ${SPACING.MEDIUM}px;
`

const SnapshotWrapper = styled.div`
  margin-bottom: ${SPACING.MEDIUM}px;
`

const DetailsWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

export default Project
