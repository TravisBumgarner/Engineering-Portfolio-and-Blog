
import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { media } from 'Theme'
import { ExternalLink, InternalLink } from 'SharedComponents'
import { Link as ReactRouterDomLink, useLocation } from 'react-router-dom'

const List = styled.ul`
  margin: 1rem;
`

const ListItem = styled.li`
`

const Link = styled(ReactRouterDomLink)`
  display: inline-block;
  font-weight: 700;
  font-style: italic;
  font-size: 3rem;
  color: black;
  transition: all 0.75s;
  border: solid white 0.25rem;
  margin: 0;
  background-color: white;
  text-decoration: underline;

  &:hover {
    background-color: #3e8eff;
    color: white;
    border-color: #3e8eff;
  }
`
const NavigationHomeWrapper = styled.nav<{ isHomeNavigationVisible: boolean }>`
    display: flex;
    align-items: end;
    transition: left 1s;
    position: fixed;
    left: ${({ isHomeNavigationVisible }) => isHomeNavigationVisible ? "0" : `-100vw`};
    bottom: 0;
    z-index: 999;
`

const NavigationHome = () => {
    const [isHomeNavigationVisible, setIsHomeNavigationVisible] = useState(false)
    const { pathname } = useLocation()

    useEffect(() => {
        console.log(pathname, pathname === '/')
        setIsHomeNavigationVisible(pathname === '/')
    }, [pathname])

    return (
        <NavigationHomeWrapper isHomeNavigationVisible={isHomeNavigationVisible}>
            <List>
                <ListItem><Link to="/blog">Blog</Link></ListItem>
                <ListItem><Link to="/projects">Portfolio</Link></ListItem>
                <ListItem><Link to="https://github.com">Code</Link></ListItem>
            </List>
        </NavigationHomeWrapper>
    )
}


const NavigationBaseWrapper = styled.div`
    justify-content: space-between;
    box-sizing: border-box;
    display: flex;
    margin: 1.5rem 0;
    font-size: 1rem;
    font-weight: 400;
    border-top: 1px solid #979797;
    border-bottom: 1px solid #979797;
    padding: 1rem 0;

    ul {
        display: flex;
        align-items: center;

        li {
            margin-right: 10px;
        }
    }

`

const EXTERNAL_LINKS = [
    {
        href: 'https://www.linkedin.com/in/travisbumgarner/',
        content: 'Connect'
    },
    {
        href: 'https://github.com/travisBumgarner/',
        content: 'GitHub'
    },
    {
        href: 'https://travisbumgarner.photography',
        content: 'Photography'
    }
]

const INTERNAL_LINKS = [
    {
        to: '/',
        content: 'Home'
    },
    {
        to: '/blog',
        content: 'Blog'
    },
    {
        to: '/projects',
        content: 'Projects'
    },
]


const ExternalLinks = EXTERNAL_LINKS.map(l => (
    <li key={l.href}>
        <ExternalLink href={l.href}>{l.content}</ExternalLink>
    </li>
))

const InternalLinks = INTERNAL_LINKS.map(l => (
    <li key={l.to}>
        <InternalLink to={l.to}>{l.content}</InternalLink>
    </li>
))

const NavigationBase = () => {
    return (
        <NavigationBaseWrapper>
            <List>{InternalLinks}</List>
            <List>{ExternalLinks}</List>
        </NavigationBaseWrapper>
    )
}

const Navigation = () => {

}

export {
    NavigationBase,
    NavigationHome
}