import type { Metadata } from 'next'
import { TODO_DESCRIPTION, TODO_TITLE } from '../classifieds/_consts'
import TodoToday from './page.client'

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL('https://travisbumgarner.dev/marketing/todo_today'),
    title: TODO_TITLE,
    description: TODO_DESCRIPTION,
    openGraph: {
      title: TODO_TITLE,
      description: TODO_DESCRIPTION,
      // images: [
      //   {
      //     url: 'https://travisbumgarner.dev/marketing-resources/todo_today/og_image.png',
      //     width: 1200,
      //     height: 630,
      //     alt: 'Todo Today'
      //   }
      // ]
    },
  }
}

export default TodoToday
