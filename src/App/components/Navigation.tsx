
import {
    FaTwitter as Twitter,
    FaLinkedin as LinkedIn,
    FaInstagram as Instagram,
    FaTwitch as Twitch,
    FaYoutube as YouTube,
    FaEnvelope as Email
} from 'react-icons/fa'
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
    
    font-size: 1.5rem;
    font-weight: 700;

`

const EXTERNAL_LINKS = [
    {
        href: 'https://www.youtube.com/channel/UCFgIg95KzVg97KAeXdWbeXg',
        content: <YouTube size="1em" />
    },
    {
        href: 'https://instagram.com/travis_the_maker',
        content: <Instagram size="1em" />
    },
    {
        href: 'https://www.linkedin.com/in/travisbumgarner/',
        content: <LinkedIn size="1em" />
    },
    {
        href: 'https://www.twitch.tv/travis_the_maker',
        content: <Twitch size="1em" />
    },
    {
        href: 'https://blog.travisbumgarner.com',
        content: 'Blog'
    }
]

const Navigation = () => {
    const ExternalLinks = EXTERNAL_LINKS.map(l => (
        <Item key={l.href}>
            <ExternalLink href={l.href}>{l.content}</ExternalLink>
        </Item>
    ))

    return (
        <NavigationWrapper>
            <List>{ExternalLinks}</List>
        </NavigationWrapper>
    )
}

export default Navigation