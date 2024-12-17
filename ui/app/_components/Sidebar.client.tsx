'use client'

import Link from '@/app/_sharedComponents/Link'
import ROUTES from '@/lib/routes'
import { FOREGROUND_COLOR, PRIMARY_COLOR } from '@/lib/theme'
import { usePathname } from 'next/navigation'
import styled, { css } from 'styled-components'

const List = styled.ul`
  margin: 1rem 0;
  padding: 0;
`

const ListItem = styled.li<{ $active?: boolean }>`
  > a {
    transition: color 0.3s;
    display: inline-block;
    text-decoration: none;
    color: ${FOREGROUND_COLOR};
  }

  ${({ $active }) => $active && css`
    > a {
      color: ${PRIMARY_COLOR};
      font-weight: 400;
    }
  `}
`

const SidebarWrapper = styled.div``

const SidebarClient = () => {
  const pathname = usePathname()

  const isActive = (route: string, exact?: boolean) => {
    if (exact) {
      return pathname === route
    }
    return pathname.includes(route)
  }

  const isSnapshotsActive = isActive(ROUTES.SNAPSHOTS.path, true)
  const isCreationsActive = isActive(ROUTES.CREATIONS.path)
  const isBlogActive = isActive(ROUTES.BLOG.path)
  const isContactActive = isActive(ROUTES.CONTACT.path)

  return (
    <SidebarWrapper>
      <p>
        I am a lifelong learner, creator, explorer, and tinkerer. This is a
        collection of my experiences.
      </p>
      <h3>Here</h3>
      <List>
        <ListItem $active={isSnapshotsActive}>
          <Link to={ROUTES.SNAPSHOTS.path}>
            {ROUTES.SNAPSHOTS.title}
          </Link>
        </ListItem>
        <ListItem $active={isCreationsActive}>
          <Link to={ROUTES.CREATIONS.path}>
            {ROUTES.CREATIONS.title}
          </Link>
        </ListItem>
        <ListItem $active={isBlogActive}>
          <Link to={ROUTES.BLOG.path}>{ROUTES.BLOG.title}</Link>
        </ListItem>
        <ListItem $active={isContactActive}  >
          <Link to={ROUTES.CONTACT.path}>
            {ROUTES.CONTACT.title}
          </Link>
        </ListItem>
      </List>
      <h3>Elsewhere</h3>
      <List>
        <ListItem>
          <Link target="_blank" to="https://storage.googleapis.com/eng42-asdsad/public/travis_bumgarner_2024_12_05_resume.pdf">
            Resume
          </Link>
        </ListItem>
        <ListItem>
          <Link target="_blank" to="https://www.linkedin.com/in/travisbumgarner/">
            LinkedIn
          </Link>
        </ListItem>
        <ListItem>
          <Link target="_blank" to="https://github.com/travisBumgarner/">
            Github
          </Link>
        </ListItem>
        <ListItem>
          <Link target="_blank" to="https://travisbumgarner.photography">
            Photography
          </Link>
        </ListItem>
      </List>
    </SidebarWrapper>
  )
}

export default SidebarClient
