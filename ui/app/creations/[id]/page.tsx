import projects from '@/app/_content/projects'
import BlurHashImage from '@/app/_sharedComponents/BlurHashImage'
import Header from '@/app/_sharedComponents/Header'
import Link from '@/app/_sharedComponents/Link'
import MasonryGrid from '@/app/_sharedComponents/MasonryGrid'
import Text from '@/app/_sharedComponents/Text'
import ROUTES from '@/lib/routes'
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
      <BlurHashImage src={src} />
      <p>{text}</p>
    </SnapshotWrapper>
  )
}

const Creation = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  const projectIndex = projects.findIndex(project => project.id == id)
  const project = projects[projectIndex]

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
          src={`${process.env.NEXT_PUBLIC_STATIC_PATH}/projects/${id}/${i.src}`}
        />
      </SnapshotWrapper>
    )
  }))

  const Description = project.description
    .split('\n')
    .map((paragraph, index) => <Text key={index}>{paragraph}</Text>)

  return (
    <DetailsWrapper>
      <MetadataWrapper>
        <Header size="large">
          <Link to={ROUTES.CREATIONS.path}>
            {ROUTES.CREATIONS.title}://
          </Link>{' '}
          {project.title}
        </Header>
        <Time>
          {new Date(`${project.lastMeaningfulUpdate}-05`).toLocaleString(
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
      <MasonryGrid elementsWithKeys={Images} />
    </DetailsWrapper>
  )
}

export default Creation
