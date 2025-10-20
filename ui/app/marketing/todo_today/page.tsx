import { Metadata } from 'next'
import TodoToday from './page.client'

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL('https://travisbumgarner.dev/marketing/todo_today'),
    title: `Todo Today`,
    description: 'The todo List for the easily distracted.',
    openGraph: {
      title: 'Todo Today',
      description: 'The todo List for the easily distracted.'
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
