import React from 'react'
import styled from 'styled-components'

import ExternalLink from 'SharedComponents/ExternalLink'
import Header from 'SharedComponents/Header'
import InternalLink from 'SharedComponents/InternalLink'
import Text from 'SharedComponents/Text'
import { FOREGROUND_COLOR } from 'Theme'

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

const SidebarWrapper = styled.div``

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <Text size="small">
        I am a lifelong learner, creator, explorer, and tinkerer. This is a
        collection of my experiences.
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
        <ListItem>
          <InternalLink to="/contact">Contact</InternalLink>
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

export default Sidebar
