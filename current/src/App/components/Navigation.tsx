
import React from 'react'
import styled from 'styled-components'

import { media } from 'Theme'
import { ExternalLink } from 'SharedComponents'

const List = styled.div`
    display: flex;
    align-items: center;
`

const Item = styled.div`
    margin-right: 10px;

`

const NavigationWrapper = styled.div`
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
        href: 'https://travisbumgarner.com',
        content: 'Blog'
    },
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

const ExternalLinks = EXTERNAL_LINKS.map(l => (
    <Item key={l.href}>
        <ExternalLink href={l.href}>{l.content}</ExternalLink>
    </Item>
))

const Navigation = () => {
    return (
        <NavigationWrapper>
            <List>{ExternalLinks}</List>
        </NavigationWrapper>
    )
}

export default Navigation