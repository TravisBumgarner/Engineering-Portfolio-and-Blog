
import styled from 'styled-components'

import { ExternalLink, InternalLink } from 'SharedComponents'

const BaseNavWrapper = styled.div<{ isBaseNavVisible: boolean }>`
    transition: left 1s;
    justify-content: space-between;
    box-sizing: border-box;
    display: flex;
    margin: 1.5rem 0;
    font-size: 1rem;
    font-weight: 400;
    border-top: 1px solid #979797;
    border-bottom: 1px solid #979797;
    padding: 1rem 0;
    position: relative;
    left: ${({ isBaseNavVisible }) => isBaseNavVisible ? "0" : `-100vw`};

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

const BaseNav = ({ isBaseNavVisible }: { isBaseNavVisible: boolean }) => {
    return (
        <BaseNavWrapper isBaseNavVisible={isBaseNavVisible}>
            <ul>{InternalLinks}</ul>
            <ul>{ExternalLinks}</ul>
        </BaseNavWrapper>
    )
}

export default BaseNav