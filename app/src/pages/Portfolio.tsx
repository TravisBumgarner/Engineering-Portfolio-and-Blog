import React, { useMemo } from 'react'

import projects from 'content/projects'
import MasonryGrid from 'SharedComponents/MasonryGrid'
import MasonryImage from 'SharedComponents/MasonryImage'
import ROUTES from 'SharedComponents/routes'
const Portfolio = () => {
  const tiles = useMemo(() => {
    return projects
      .sort((a, b) =>
        a.lastMeaningfulUpdate > b.lastMeaningfulUpdate ? -1 : 1
      )
      .map(({ id, title, previewImage, lastMeaningfulUpdate }) => {
        return {
          key: id,
          element: (
            <MasonryImage
              key={id}
              link={`${ROUTES.CREATIONS.path}/${id}`}
              text={title}
              date={new Date(`${lastMeaningfulUpdate}-05`).toLocaleString(
                'default',
                { month: 'long', year: 'numeric' }
              )}
              src={
                previewImage &&
                `${__STATIC__}/projects/${id}/${previewImage.src}`
              }
            />
          )
        }
      })
  }, [])

  return <MasonryGrid elementsWithKeys={tiles} />
}

export default Portfolio
