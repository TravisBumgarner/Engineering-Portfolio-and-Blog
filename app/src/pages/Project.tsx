import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'

import projects, { Project } from 'Projects'
import ExternalLink from 'SharedComponents/ExternalLink'
import Header from 'SharedComponents/Header'
import Snapshot from 'SharedComponents/Snapshot'
import Text from 'SharedComponents/Text'
import { CSSHover, PRIMARY_COLOR } from 'Theme'

const LinkLi = styled.li`
  display: block;
  text-decoration: underline;

  a {
    color: ${PRIMARY_COLOR};
    ${CSSHover};
  }
`

const MetadataWrapper = styled.div`
  margin-bottom: 3rem;
`

const Details = ({
  project: { description, links, title, images, id }
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
      images.map((i, index) => (
        <Snapshot
          text={i.label}
          key={index}
          src={`${__STATIC__}/projects/${id}/${i.src}`}
        ></Snapshot>
      )),
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
        {Links.length > 0 && (
          <>
            <Header size="medium">Links</Header>
            <ul>{Links}</ul>
          </>
        )}
        <Header size="medium">Details</Header>
        {Description}
      </MetadataWrapper>
      <div>{images.length ? Images : null}</div>
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

export default Project
