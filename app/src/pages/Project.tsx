import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'

import projects, { Project } from 'Projects'
import ExternalLink from 'SharedComponents/ExternalLink'
import Header from 'SharedComponents/Header'
import MasonryGrid from 'SharedComponents/MasonryGrid'
import Text from 'SharedComponents/Text'
import { CSSHover, PRIMARY_COLOR, SPACING } from 'Theme'
import ProjectImage from './ProjectImage'

const LinkLi = styled.li`
  display: block;
  text-decoration: underline;

  a {
    color: ${PRIMARY_COLOR};
    ${CSSHover};
  }
`

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
          <LinkLi key={l.label + l.src}>
            <ExternalLink href={l.src}>{l.label}</ExternalLink>
          </LinkLi>
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
    <div>
      <MetadataWrapper>
        <Header size="large">{title}</Header>
        <time>
          {new Date(`${lastMeaningfulUpdate}-01`).toLocaleString('default', {
            month: 'long',
            year: 'numeric'
          })}
        </time>
        {Description}
        {Links.length > 0 && <ul>{Links}</ul>}
      </MetadataWrapper>
      <MasonryGrid elementsWithKeys={Images} />
    </div>
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

const SnapshotWrapper = styled.div`
  margin: ${SPACING.LARGE}px 0;
`

export default Project
