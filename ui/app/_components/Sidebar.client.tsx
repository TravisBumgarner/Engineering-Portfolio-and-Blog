'use client'

import ExternalLink from '@/app/_sharedComponents/ExternalLink'
import Header from '@/app/_sharedComponents/Header'
import InternalLink from '@/app/_sharedComponents/InternalLink'
import Text from '@/app/_sharedComponents/Text'
import ROUTES from '@/lib/routes'
import { FOREGROUND_COLOR, PRIMARY_COLOR } from '@/lib/theme'
import { usePathname } from 'next/navigation'
import styled, { css } from 'styled-components'

const List = styled.ul`
  margin: 1rem 0;
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
      <Text>
        I am a lifelong learner, creator, explorer, and tinkerer. This is a
        collection of my experiences.
      </Text>
      <Header size="small">Here</Header>
      <List>
        <ListItem $active={isSnapshotsActive}>
          <InternalLink to={ROUTES.SNAPSHOTS.path}>
            {ROUTES.SNAPSHOTS.title}
          </InternalLink>
        </ListItem>
        <ListItem $active={isCreationsActive}>
          <InternalLink to={ROUTES.CREATIONS.path}>
            {ROUTES.CREATIONS.title}
          </InternalLink>
        </ListItem>
        <ListItem $active={isBlogActive}>
          <InternalLink to={ROUTES.BLOG.path}>{ROUTES.BLOG.title}</InternalLink>
        </ListItem>
        <ListItem $active={isContactActive}  >
          <InternalLink to={ROUTES.CONTACT.path}>
            {ROUTES.CONTACT.title}
          </InternalLink>
        </ListItem>
      </List>
      <Header size="small">Elsewhere</Header>
      <List>
        <ListItem>
          <ExternalLink href="https://storage.googleapis.com/eng42-asdsad/public/travis_bumgarner_2024_12_05_resume.pdf">
            Resume
          </ExternalLink>
        </ListItem>
        <ListItem>
          <ExternalLink href="https://www.linkedin.com/in/travisbumgarner/">
            LinkedIn
          </ExternalLink>
        </ListItem>
        <ListItem>
          <ExternalLink href="https://github.com/travisBumgarner/">
            Github
          </ExternalLink>
        </ListItem>
        <ListItem>
          <ExternalLink href="https://travisbumgarner.photography">
            Photography
          </ExternalLink>
        </ListItem>
      </List>
    </SidebarWrapper>
  )
}

export default SidebarClient
