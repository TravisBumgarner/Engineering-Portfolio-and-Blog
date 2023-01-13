
import { useEffect, useState } from 'react'
import styled from 'styled-components'

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
const HomeNavWrapper = styled.nav<{ isHomeNavigationVisible: boolean }>`
    display: flex;
    align-items: end;
    transition: left 1s;
    position: fixed;
    left: ${({ isHomeNavigationVisible }) => isHomeNavigationVisible ? "0" : `-100vw`};
    bottom: 0;
    z-index: 999;
`

const HomeNav = ({ isHomeNavVisible }: { isHomeNavVisible: boolean }) => {
    return (
        <HomeNavWrapper isHomeNavigationVisible={isHomeNavVisible}>
            <List>
                <ListItem><Link to="/blog">Blog</Link></ListItem>
                <ListItem><Link to="/projects">Portfolio</Link></ListItem>
                <ListItem><Link to="https://github.com">Code</Link></ListItem>
            </List>
        </HomeNavWrapper>
    )
}

export default HomeNav
