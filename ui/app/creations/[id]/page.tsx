import projects from '@/content/projects'
import { Metadata } from 'next'
import { Params } from './page.client'
import CreationClient from './page.client'


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

  return <CreationClient project={project} />
}
export default Creation
