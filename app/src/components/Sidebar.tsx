import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

import ExternalLink from 'SharedComponents/ExternalLink'
import Header from 'SharedComponents/Header'
import InternalLink from 'SharedComponents/InternalLink'
import Text from 'SharedComponents/Text'
import { CSSHover, media } from 'Theme'

const List = styled.ul`
  margin: 1rem 0;
`

const ListItem = styled.li<{ isActive?: boolean }>`
  > a {
    display: inline-block;
    font-weight: 700;
    font-style: italic;
    font-size: 1rem;
    text-decoration: underline;
    ${({ isActive }) => (isActive ? 'font-weight: 900;' : 'font-weight: 100;')}

    ${CSSHover}
  }
`

const SidebarWrapper = styled.div`
  ${media.tablet} {
    > :first-child {
      display: none;
    }
  }
`

const Sidebar = () => {
  const { pathname } = useLocation()

  const inBlog = useMemo(
    () => pathname.includes('/blog') || pathname.includes('/post'),
    [pathname]
  )
  const inArtifacts = useMemo(
    () => pathname.includes('/artifacts') || pathname.includes('/artifact'),
    [pathname]
  )
  const inSnapshots = useMemo(() => pathname === '/', [pathname])

  return (
    <SidebarWrapper>
      <Text size="small">
        These are a collection of my experiences learning, creating, and
        exploring.
      </Text>
      <Text size="small">
        They're not always polished or completed, but they've shaped who I am
        today and I am excited to share them!
      </Text>
      <Header size="small">Here</Header>
      <List>
        <ListItem isActive={inSnapshots}>
          <InternalLink to="/">Snapshots</InternalLink>
        </ListItem>
        <ListItem isActive={inArtifacts}>
          <InternalLink to="/artifacts">Artifacts</InternalLink>
        </ListItem>
        <ListItem isActive={inBlog}>
          <InternalLink to="/blog">Blog Posts</InternalLink>
        </ListItem>
      </List>
      <Header size="small">There</Header>
      <List>
        <ListItem>
          <InternalLink to="/contact">Contact</InternalLink>
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

export default Sidebar
