import React, { useMemo } from 'react'

import projects from 'Projects'
import Snapshot from 'SharedComponents/Snapshot'

const Portfolio = () => {
  const tiles = useMemo(() => {
    return projects
      .sort((a, b) => (a.endDate > b.endDate ? -1 : 1))
      .map(({ id, title, previewImage }) => {
        return (
          <Snapshot
            key={id}
            link={`/project/${id}`}
            text={title}
            src={
              previewImage && `${__STATIC__}/projects/${id}/${previewImage.src}`
            }
          />
        )
      })
  }, [])

  return <div>{tiles}</div>
}

export default Portfolio
