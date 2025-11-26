'use client'

import projects from '@/content/projects'
import ROUTES from '@/lib/routes'
import ListItem from '../../lib/sharedComponents/ItemPreview'

const Portfolio = () => {
  return (
    <>
      {/* Todo - add Photo Palettes to projects, and set new highlights */}
      {Object.values(projects)
        .sort((a, b) =>
          a.lastMeaningfulUpdate > b.lastMeaningfulUpdate ? -1 : 1
        )
        .map(
          (
            { id, title, previewImage, lastMeaningfulUpdate, description },
            index
          ) => {
            return (
              <ListItem
                type="creation"
                priority={index === 0}
                key={id}
                description={description}
                link={`${ROUTES.CREATIONS.href}/${id}`}
                title={title}
                date={lastMeaningfulUpdate}
                src={
                  previewImage && `/project-resources/${id}/${previewImage.src}`
                }
              />
            )
          }
        )}
    </>
  )
}

export default Portfolio
