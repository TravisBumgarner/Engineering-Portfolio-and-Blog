import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import projects from 'Projects'
import { Snapshot, Title } from 'SharedComponents'
import { CSSHover } from 'Theme'

const ReadNow = styled.strong`
  ${CSSHover};
`

const Portfolio = () => {
  const tiles = useMemo(() => {
    return projects
      .sort((a, b) => (a.endDate > b.endDate ? -1 : 1))
      .map(({ id, title, previewImage }) => {
        return (
          <Link to={`/project/${id}`}>
            <Snapshot
              src={
                previewImage &&
                `${__STATIC__}/projects/${id}/${previewImage.src}`
              }
            >
              <Title size="medium">
                <ReadNow>{title}</ReadNow>
              </Title>
            </Snapshot>
          </Link>
        )
      })
  }, [])

  return <div>{tiles}</div>
}

export default Portfolio
