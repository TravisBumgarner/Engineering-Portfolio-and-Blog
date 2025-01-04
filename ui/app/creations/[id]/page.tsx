import BlurHashImage from '@/app/_sharedComponents/BlurHashImage'
import Link from '@/app/_sharedComponents/Link'
import MasonryGrid from '@/app/_sharedComponents/MasonryGrid'
import projects from '@/content/projects'
import ROUTES from '@/lib/routes'
import { notFound } from 'next/navigation'
import {
  DescriptionWrapper,
  DetailsWrapper,
  LinksWrapper,
  MetadataWrapper,
  SnapshotWrapper,
  Time
} from './_page.client'

const ProjectImage = ({
  src,
  text
}: {
  src: string
  link?: string
  text?: string
}) => {
  return (
    <SnapshotWrapper>
      <BlurHashImage priority={true} maxWidthPercent="100" src={src} />
      <p>{text}</p>
    </SnapshotWrapper>
  )
}

const Creation = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  const projectIndex = projects.findIndex(project => project.id == id)
  const project = projects[projectIndex]
  if(!project){
    return notFound()
  }

  const Links = project.links.map(l => {
    return (
      <li key={l.label + l.src}>
        <Link target="_blank" to={l.src}>{l.label}</Link>
      </li>
    )
  })

  const Images = project.images.map((i, index) => ({
    key: i.src,
    element: (
      <SnapshotWrapper key={i.src}>
        <ProjectImage
          text={i.label}
          key={index}
          src={`/projects/${id}/${i.src}`}
        />
      </SnapshotWrapper>
    )
  }))

  const Description = project.description
    .split('\n')
    .map((paragraph, index) => <p key={index}>{paragraph}</p>)

  return (
    <DetailsWrapper>
      <MetadataWrapper>
        <h1>
          <Link to={ROUTES.CREATIONS.path}>
            {ROUTES.CREATIONS.title}://
          </Link>{' '}
          {project.title}
        </h1>
        <Time>
          Last Update: {new Date(`${project.lastMeaningfulUpdate}-05`).toLocaleString(
            'default',
            {
              month: 'long',
              year: 'numeric'
            }
          )}
        </Time>
        <DescriptionWrapper>{Description}</DescriptionWrapper>
        {Links.length > 0 && <LinksWrapper>{Links}</LinksWrapper>}
      </MetadataWrapper>
      <MasonryGrid elementsWithKeys={Images} totalColumns={1} />
    </DetailsWrapper>
  )
}

export default Creation
