import projects from '@/app/_content/projects'
import MasonryGrid from '@/app/_sharedComponents/MasonryGrid'
import MasonryImage from '@/app/_sharedComponents/MasonryImage'
import ROUTES from '@/lib/routes'

const Portfolio = () => {
  const tiles = projects
    .sort((a, b) => (a.lastMeaningfulUpdate > b.lastMeaningfulUpdate ? -1 : 1))
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
              `${process.env.NEXT_PUBLIC_STATIC_PATH}/projects/${id}/${previewImage.src}`
            }
          />
        )
      }
    })

  return <MasonryGrid elementsWithKeys={tiles} />
}

export default Portfolio
