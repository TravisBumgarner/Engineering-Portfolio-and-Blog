import Figure from '@/app/_sharedComponents/Figure'
import Link from '@/app/_sharedComponents/Link'
import projects from '@/content/projects'
import ROUTES from '@/lib/routes'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

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
      <div key={i.src}>
        <Figure
          caption={i.label}
          key={index}
          src={`/project-resources/${id}/${i.src}`}
        />
      </div>
    )
  }))

  const Description = project.description
    .split('\n')
    .map((paragraph, index) => <p key={index}>{paragraph}</p>)

  return (
    <div id="creation">
        <h1>
          <Link to={ROUTES.CREATIONS.path}>
            {ROUTES.CREATIONS.title}://
          </Link>{' '}
          {project.title}
        </h1>
        <time>
          Last Update: {new Date(`${project.lastMeaningfulUpdate}-05`).toLocaleString(
            'default',
            {
              month: 'long',
              year: 'numeric'
            }
          )}
        </time>
        {Description}
        {Links.length > 0 && <ul>{Links}</ul>}
        {Images.map(i => i.element)}
    </div>
  )
}

export default Creation
