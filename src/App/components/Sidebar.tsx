
import { useEffect, useState, useMemo } from 'react'
import styled, { css } from 'styled-components'
import { Link as ReactRouterDomLink, useLocation } from 'react-router-dom'

import { CSSHover, PRIMARY_COLOR, } from 'Theme'
import { Title, Text, ExternalLink, InternalLink } from 'SharedComponents'

const makeNewSiteTitle = () => {
  const VALID_FILE_SUFFIX = ["prototype", "test", "sample", "mockup", "demo", "final", "draft",];
  const VALID_FILE_TYPES = ["cpp", "css", "dxf", "html", "json", "js", "pde", "psd", "py", "scss", "sketch", "sldprt", "sh", "dng", "tsx", "nef", "jpeg", "tiff", "pdf", "nef"];
  const VALID_FILE_BASE = ["tb"]

  const RANDOM_FILE_TYPE = VALID_FILE_TYPES[Math.floor(Math.random() * VALID_FILE_TYPES.length)];
  const RANDOM_FILE_SUFIX = VALID_FILE_SUFFIX[Math.floor(Math.random() * VALID_FILE_SUFFIX.length)];
  const RANDOM_FILE_BASE = VALID_FILE_BASE[Math.floor(Math.random() * VALID_FILE_BASE.length)];

  return `${RANDOM_FILE_BASE}_${RANDOM_FILE_SUFIX}.${RANDOM_FILE_TYPE}`;
};

const StyledLink = styled(ReactRouterDomLink)`
    text-decoration: none;
    color: ${PRIMARY_COLOR};

    ${CSSHover};
`

const HeaderWrapper = styled.div`
`

const Header = () => {
  const [length, setLength] = useState(0)
  const title = useMemo(makeNewSiteTitle, [])
  useEffect(() => {
    const intervalId = setInterval(() => {
      setLength(prev => {
        if (prev + 1 === title.length) {
          clearInterval(intervalId)
        }
        return prev + 1
      })
    }, 50)
  }, [])

  return (
    <HeaderWrapper>
      <Title size="large">
        <StyledLink to="/">{title.slice(0, length)}</StyledLink>
      </Title>
      <Text size="small">These are artifacts of my experiences learning, creating, and exploring. They're not always polished or completed, but they've shaped who I am today.</Text>
    </HeaderWrapper>
  )
}

const List = styled.ul`
  margin: 1rem 0;
`

const ListItem = styled.li`
  > a {
    display: inline-block;
    font-weight: 700;
    font-style: italic;
    font-size: 1.5rem;
    color: black;
    text-decoration: underline;

    ${CSSHover}
  }
`

const SidebarLinkCSS = css`

`

const SidebarInternalLink = styled(InternalLink)`
  ${SidebarLinkCSS};
`
const SidebarWrapper = styled.div`
`

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <Header />
      <List>
        <ListItem><SidebarInternalLink to="/">Snapshots</SidebarInternalLink></ListItem>
        <ListItem><SidebarInternalLink to="/blog">Blog</SidebarInternalLink></ListItem>
        <ListItem><SidebarInternalLink to="/portfolio">Portfolio</SidebarInternalLink></ListItem>
      </List>
      <List>
        <ListItem><ExternalLink href="https://www.linkedin.com/in/travisbumgarner/">Colab</ExternalLink></ListItem>
        <ListItem><ExternalLink href="https://github.com/travisBumgarner/">Github</ExternalLink></ListItem>
        <ListItem><ExternalLink href="https://travisbumgarner.photography">Photography</ExternalLink></ListItem>
      </List>
    </SidebarWrapper>
  )
}

export default Sidebar
