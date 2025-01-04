'use client'

import MasonryGrid from '@/app/_sharedComponents/MasonryGrid'
import MasonryImage from '@/app/_sharedComponents/MasonryImage'
import projects from '@/content/projects'
import useTotalColumns from '@/lib/hooks/useTotalColumns'
import ROUTES from '@/lib/routes'

const Portfolio = () => {
  const totalColumns = useTotalColumns()

  const tiles = projects
    .sort((a, b) => (a.lastMeaningfulUpdate > b.lastMeaningfulUpdate ? -1 : 1))
    .map(({ id, title, previewImage, lastMeaningfulUpdate }, index) => {
      return {
        key: id,
        element: (
          <MasonryImage
            totalColumns={totalColumns}
            // Prioritize the first two projects
            priority={index <= 1}
            key={id}
            link={`${ROUTES.CREATIONS.path}/${id}`}
            text={title}
            date={`Last Update: ${new Date(`${lastMeaningfulUpdate}-05`).toLocaleString(
              'default',
              { month: 'long', year: 'numeric' }
            )}`}
            src={
              previewImage && `/projects/${id}/${previewImage.src}`
            }
          />
        )
      }
    })

  return <MasonryGrid elementsWithKeys={tiles} totalColumns={totalColumns} />
}

export default Portfolio
