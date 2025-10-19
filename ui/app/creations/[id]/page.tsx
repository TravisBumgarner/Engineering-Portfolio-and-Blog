import ContentStyler from '@/lib/sharedComponents/ContentStyler'
import Figure from '@/lib/sharedComponents/Figure'
import projects from '@/content/projects'
import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type Params = Promise<{ id: string }>

export async function generateMetadata({
  params
}: {
  params: Params
}): Promise<Metadata> {
  const { id } = await params
  const project = projects[id]

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found'
    }
  }

  return {
    metadataBase: new URL('https://travisbumgarner.dev'),
    title: `${project.title} - Travis Bumgarner`,
    description:
      `${project.description.slice(0, 150)}...` ||
      'A project by Travis Bumgarner',
    openGraph: {
      images: [`/project-resources/${id}/${project.previewImage.src}`]
    }
  }
}

const Creation = async ({ params }: { params: Params }) => {
  const { id } = await params
  const project = projects[id]
  if (!project) {
    return notFound()
  }

  const Links = project.links.map(l => {
    return (
      <li
        key={l.label + l.src}
        style={{
          backgroundColor: 'var(--bright-background)',
          margin: 0
        }}
      >
        <Link
          key={l.label + l.src}
          style={{
            textDecoration: 'none',
            padding: '10px 20px',
            display: 'block',
            color: 'var(--foreground)'
          }}
          target="_blank"
          href={l.src}
        >
          {l.label}
        </Link>
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

  if (project.toolsAndTechnologies) {
    Description.push(
      <p key="toolsAndTechnologies">{project.toolsAndTechnologies}</p>
    )
  }

  return (
    <ContentStyler>
      <h2>{project.title}</h2>
      <time>
        Last Update:{' '}
        {new Date(`${project.lastMeaningfulUpdate}-05`).toLocaleString(
          'default',
          {
            month: 'long',
            year: 'numeric'
          }
        )}
      </time>
      {Description}
      {Links.length > 0 && (
        <ul
          style={{
            listStyleType: 'none',
            display: 'flex',
            margin: '20px 0',
            gap: '20px'
          }}
        >
          {Links}
        </ul>
      )}
      {Images.map(i => i.element)}
    </ContentStyler>
  )
}

export default Creation
