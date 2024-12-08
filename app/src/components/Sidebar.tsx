import React from 'react'
import styled from 'styled-components'

import ExternalLink from 'SharedComponents/ExternalLink'
import Header from 'SharedComponents/Header'
import InternalLink from 'SharedComponents/InternalLink'
import Text from 'SharedComponents/Text'
import { FOREGROUND_COLOR, media } from 'Theme'

const List = styled.ul`
  margin: 1rem 0;
`

const ListItem = styled.li`
  > a {
    display: inline-block;
    text-decoration: none;
    color: ${FOREGROUND_COLOR};
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
        <ListItem>
          <InternalLink to="/">Snapshots</InternalLink>
        </ListItem>
        <ListItem>
          <InternalLink to="/artifacts">Artifacts</InternalLink>
        </ListItem>
        <ListItem>
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
