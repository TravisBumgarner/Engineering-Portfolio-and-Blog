
import styled from 'styled-components'

import { media } from 'Theme'
import { ExternalLink, InternalLink } from 'SharedComponents'
import { Link } from 'react-router-dom'

const List = styled.ul`
    display: flex;
    align-items: center;
`

const Item = styled.li`
    margin-right: 10px;

`

const NavigationWrapper = styled.div`
    justify-content: space-between;
    box-sizing: border-box;
    display: flex;
    margin: 1.5rem 0;
    font-size: 1rem;
    font-weight: 400;
    border-top: 1px solid #979797;
    border-bottom: 1px solid #979797;
    padding: 1rem 0;

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
    <Item key={l.href}>
        <ExternalLink href={l.href}>{l.content}</ExternalLink>
    </Item>
))

const InternalLinks = INTERNAL_LINKS.map(l => (
    <Item key={l.to}>
        <InternalLink to={l.to}>{l.content}</InternalLink>
    </Item>
))

const Navigation = () => {
    return (
        <NavigationWrapper>
            <List>{InternalLinks}</List>
            <List>{ExternalLinks}</List>
        </NavigationWrapper>
    )
}

export default Navigation