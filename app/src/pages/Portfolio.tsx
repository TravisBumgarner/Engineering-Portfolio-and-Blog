import React, { useMemo } from 'react'

import projects from 'Projects'
import Snapshot from 'SharedComponents/Snapshot'
import MasonryGrid from 'SharedComponents/MasonryGrid'

const Portfolio = () => {
  const tiles = useMemo(() => {
    return projects
      .sort((a, b) => (a.lastMeaningfulUpdate > b.lastMeaningfulUpdate ? -1 : 1))
      .map(({ id, title, previewImage }) => {
        return {
          key: id,
          element: (
          <Snapshot
            key={id}
            link={`/project/${id}`}
            text={title}
            src={
              previewImage && `${__STATIC__}/projects/${id}/${previewImage.src}`
            }
          />
          )
        }
      })
  }, [])

  return <MasonryGrid elementsWithKeys={tiles} />
}

export default Portfolio
