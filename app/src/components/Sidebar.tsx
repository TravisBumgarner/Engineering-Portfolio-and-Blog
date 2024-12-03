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
    color: black;
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
  const inPortfolio = useMemo(
    () => pathname.includes('/portfolio') || pathname.includes('/project'),
    [pathname]
  )
  const inSnapshots = useMemo(() => pathname === '/', [pathname])

  return (
    <SidebarWrapper>
      <Text size="small">
        These are artifacts of my experiences learning, creating, and exploring.
        <br />
        They're not always polished or completed, but they've shaped who I am
        today.
      </Text>
      <Header size="small">Here</Header>
      <List>
        <ListItem isActive={inSnapshots}>
          <InternalLink to="/">Snapshots</InternalLink>
        </ListItem>
        <ListItem isActive={inBlog}>
          <InternalLink to="/blog">Blog</InternalLink>
        </ListItem>
        <ListItem isActive={inPortfolio}>
          <InternalLink to="/portfolio">Portfolio</InternalLink>
        </ListItem>
      </List>
      <Header size="small">There</Header>
      <List>
        <ListItem>
          <ExternalLink href="https://www.linkedin.com/in/travisbumgarner/">
            Colab
          </ExternalLink>
        </ListItem>
        <ListItem>
          <ExternalLink href="https://github.com/travisBumgarner/">
            Github
          </ExternalLink>
        </ListItem>
        <ListItem>
          <ExternalLink href="https://sillysideprojects.com">
            Silly Side Projects
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
