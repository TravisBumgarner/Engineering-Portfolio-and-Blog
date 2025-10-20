import { Metadata } from 'next'
import TodoToday from './page.client'

const TITLE = 'Todo Today'
const DESCRIPTION = 'The todo List for the easily distracted.'

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL('https://travisbumgarner.dev/marketing/todo_today'),
    title: TITLE,
    description: DESCRIPTION,
    openGraph: {
      title: TITLE,
      description: DESCRIPTION
      // images: [
      //   {
      //     url: 'https://travisbumgarner.dev/marketing-resources/todo_today/og_image.png',
      //     width: 1200,
      //     height: 630,
      //     alt: 'Todo Today'
      //   }
      // ]
    }
  }
}

export default TodoToday
