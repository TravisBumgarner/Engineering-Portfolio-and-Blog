import {
  CANDLELIGHT_DESCRIPTION,
  CANDLELIGHT_IMAGE,
  CANDLELIGHT_TITLE,
  IDEAS_DESCRIPTION,
  IDEAS_IMAGE,
  IDEAS_TITLE,
  posts,
  projects,
  ROUTES,
  SITE_OG_IMAGE,
  TODO_DESCRIPTION,
  TODO_IMAGE,
  TODO_TITLE,
  WORK_WITH_ME_DESCRIPTION,
  WORK_WITH_ME_OG_TITLE,
  WORK_WITH_ME_PAGE_TITLE,
} from '@common/core'

type OGContent = {
  'og:title': string
  'og:description': string
  'og:image': string
  /** Document <title>, when it should differ from the social share title. */
  title?: string
}

type DataType = 'marketing' | 'blog' | 'creations'

const OG_CONTENT: Record<DataType, Record<string, OGContent>> = {
  marketing: {
    ideas: {
      'og:title': IDEAS_TITLE,
      'og:description': IDEAS_DESCRIPTION,
      'og:image': IDEAS_IMAGE,
    },
    candlelight: {
      'og:title': CANDLELIGHT_TITLE,
      'og:description': CANDLELIGHT_DESCRIPTION,
      'og:image': CANDLELIGHT_IMAGE,
    },
    todo: {
      'og:title': TODO_TITLE,
      'og:description': TODO_DESCRIPTION,
      'og:image': TODO_IMAGE,
    },
  },
  blog: {
    ...Object.entries(posts).reduce(
      (acc, [slug, post]) => {
        acc[slug] = {
          'og:title': post.title,
          'og:description': post.description,
          'og:image': `/post-resources/${slug}/${post.preview_image}`,
        }
        return acc
      },
      {} as Record<string, OGContent>,
    ),
  },
  creations: {
    ...Object.entries(projects).reduce(
      (acc, [slug, project]) => {
        acc[slug] = {
          'og:title': project.title,
          'og:description': project.description,
          'og:image': `/project-resources/${slug}/${project.previewImage?.src ?? ''}`,
        }
        return acc
      },
      {} as Record<string, OGContent>,
    ),
  },
}

/**
 * Top-level pages, keyed by their single path segment. Without this, every
 * one-segment route fell through to the generic site-wide OG tags.
 */
const PAGE_OG_CONTENT: Record<string, OGContent> = {
  [stripLeadingSlash(ROUTES.WORK_WITH_ME.href)]: {
    title: WORK_WITH_ME_PAGE_TITLE,
    'og:title': WORK_WITH_ME_OG_TITLE,
    'og:description': WORK_WITH_ME_DESCRIPTION,
    'og:image': SITE_OG_IMAGE,
  },
}

function stripLeadingSlash(href: string) {
  return href.replace(/^\//, '')
}

export function getOgContentFromParts(parts: string[]): OGContent | null {
  if (parts.length === 1) {
    return PAGE_OG_CONTENT[parts[0]] ?? null
  }

  if (parts.length < 2) return null

  const [section, slug] = parts

  const sectionContent = OG_CONTENT[section as DataType]
  if (!sectionContent) return null

  return sectionContent[slug] ?? null
}
