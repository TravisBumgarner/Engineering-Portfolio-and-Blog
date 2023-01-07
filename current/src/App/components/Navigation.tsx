
import React from 'react'
import styled from 'styled-components'

import { media } from 'Theme'
import { ExternalLink } from 'SharedComponents'

const List = styled.div`
    display: flex;
    align-items: center;
`

const Item = styled.div`
    margin-left: 10px;

    ${media.tablet} {
        margin: 0 10px;
    }
`

const NavigationWrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    
    font-size: 1rem;
    font-weight: 400;

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