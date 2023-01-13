
import styled from 'styled-components'

import { ExternalLink, InternalLink } from 'SharedComponents'
import Header from '../../Header'

const Wrapper = styled.div<{ isBaseNavVisible: boolean }>`
    position: relative;
    top: ${({ isBaseNavVisible }) => isBaseNavVisible ? "0" : `-30vh`};
    transition: top 1s;
`

const BaseNavWrapper = styled.div`
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
            :last-child{
                margin-right: 0;
            }
        }
    }

`

const BaseNav = ({ isBaseNavVisible }: { isBaseNavVisible: boolean }) => {
    return (
        <Wrapper isBaseNavVisible={isBaseNavVisible}>
            <Header />
            <BaseNavWrapper >
                <ul>
                    <li><InternalLink to="/">Snapshots</InternalLink></li>
                    <li><InternalLink to="/blog">Blog</InternalLink></li>
                    <li><InternalLink to="/portfolio">Portfolio</InternalLink></li>
                </ul>
                <ul>
                    <li><ExternalLink href="https://www.linkedin.com/in/travisbumgarner/">Connect</ExternalLink></li>
                    <li><ExternalLink href="https://github.com/travisBumgarner/">Github</ExternalLink></li>
                    <li><ExternalLink href="https://travisbumgarner.photography">Photography</ExternalLink></li>
                </ul>
            </BaseNavWrapper>
        </Wrapper>
    )
}


export default BaseNav