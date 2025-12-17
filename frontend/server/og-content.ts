// This could be improved upon in the future to patch common/routes but for the moment I'm going to leave it be.

type OGContent = {
  'og:title': string
  'og:description': string
  'og:image': string
}

type DataType = 'marketing' | 'blog' | 'creations'

const OG_CONTENT: Record<DataType, Record<string, OGContent>> = {
  marketing: {
    ideas: {
      'og:title': 'Ideas & Writings by Travis Bumgarner',
      'og:description':
        'Explore a collection of ideas, essays, and writings by Travis Bumgarner on technology, programming, and life.',
      'og:image': 'og-images/ideas-og.png',
    },
  },
  blog: {},
  creations: {},
}

export function getOgContentFromParts(parts: string[]): OGContent | null {
  if (parts.length < 2) return null

  const [section, slug] = parts

  const sectionContent = OG_CONTENT[section as DataType]
  if (!sectionContent) return null

  return sectionContent[slug] ?? null
}
