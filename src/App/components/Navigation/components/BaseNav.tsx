
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
            :last-child{
                margin-right: 0;
            }
        }
    }

`

const BaseNav = ({ isBaseNavVisible }: { isBaseNavVisible: boolean }) => {
    return (
        <BaseNavWrapper isBaseNavVisible={isBaseNavVisible}>
            <ul>
                <li><InternalLink to="/">Snapshots</InternalLink></li>
                <li><InternalLink to="/blog">Blog</InternalLink></li>
                <li><InternalLink to="/projects">Projects</InternalLink></li>
            </ul>
            <ul>
                <li><ExternalLink href="https://www.linkedin.com/in/travisbumgarner/">Connect</ExternalLink></li>
                <li><ExternalLink href="https://github.com/travisBumgarner/">Github</ExternalLink></li>
                <li><ExternalLink href="https://travisbumgarner.photography">Photography</ExternalLink></li>
            </ul>
        </BaseNavWrapper>
    )
}


export default BaseNav