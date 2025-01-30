import BlurHashImage from '@/app/_sharedComponents/BlurHashImage'
import Link from '@/app/_sharedComponents/Link'
import projects from '@/content/projects'
import ROUTES from '@/lib/routes'
import { Metadata } from 'next'
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
      <BlurHashImage priority={true} src={src} />
      <p>{text}</p>
    </SnapshotWrapper>
  )
}

type Params = Promise<{ id: string }>

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { id } = await params
  const project = projects[id]
  
  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found'
    }
  }

  return {
    metadataBase: new URL("https://travisbumgarner.dev"),
    title: `${project.title} - Travis Bumgarner`,
    description: `${project.description.slice(0, 150)}...` || 'A project by Travis Bumgarner',
    openGraph: {
      images: [`/project-resources/${id}/${project.previewImage.src}`]
    }
  }
}

const Creation = async ({ params }: { params: Params }) => {
  const { id } = await params
  const project = projects[id]
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
          src={`/project-resources/${id}/${i.src}`}
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
      {Images.map(i => i.element)}
    </DetailsWrapper>
  )
}

export default Creation
