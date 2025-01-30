'use client'

import projects from '@/content/projects'
import ROUTES from '@/lib/routes'
import ListItem from '../_sharedComponents/ListItem'

const Portfolio = () => {
  return (
    <>
      {Object.values(projects)
        .sort((a, b) =>
          a.lastMeaningfulUpdate > b.lastMeaningfulUpdate ? -1 : 1
        )
        .map(({ id, title, previewImage, lastMeaningfulUpdate, description }, index) => {
          return (
            <ListItem
              priority={index === 0}
              key={id}
              link={`${ROUTES.CREATIONS.path}/${id}`}
              title={title}
              date={`Last Updated ${new Date(
                `${lastMeaningfulUpdate}-05`
              ).toLocaleString('default', {
                month: 'long',
                year: 'numeric'
              })}`}
              src={
                previewImage && `/project-resources/${id}/${previewImage.src}`
              }
            />
          )
        })}
    </>
  )
}

export default Portfolio
