
import { useMemo } from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'

import { CSSHover, } from 'Theme'
import { Title, ExternalLink, InternalLink, Text } from 'SharedComponents'

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
    ${({ isActive }) => isActive ? 'font-weight: 900;' : 'font-weight: 100;'}

    ${CSSHover}
  }
`

const SidebarWrapper = styled.div`
`

const Sidebar = () => {
  const { pathname } = useLocation()

  const inBlog = useMemo(() => pathname.includes('/blog') || pathname.includes('/post'), [pathname])
  const inPortfolio = useMemo(() => pathname.includes('/portfolio') || pathname.includes('/project'), [pathname])
  const inSnapshots = useMemo(() => pathname === '/', [pathname])

  return (
    <SidebarWrapper>
      <Text size="small">These are artifacts of my experiences learning, creating, and exploring.<br />They're not always polished or completed, but they've shaped who I am today.</Text>
      <Title size="small">Here</Title>
      <List>
        <ListItem isActive={inSnapshots}><InternalLink to="/">Snapshots</InternalLink></ListItem>
        <ListItem isActive={inBlog}><InternalLink to="/blog">Blog</InternalLink></ListItem>
        <ListItem isActive={inPortfolio}><InternalLink to="/portfolio">Portfolio</InternalLink></ListItem>
      </List>
      <Title size="small">There</Title>
      <List>
        <ListItem><ExternalLink href="https://www.linkedin.com/in/travisbumgarner/">Colab</ExternalLink></ListItem>
        <ListItem><ExternalLink href="https://github.com/travisBumgarner/">Github</ExternalLink></ListItem>
        <ListItem><ExternalLink href="https://travisbumgarner.photography">Photography</ExternalLink></ListItem>
      </List>
    </SidebarWrapper>
  )
}

export default Sidebar
