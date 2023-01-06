import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Navigation } from './'
import { PRIMARY_COLOR, TERTIARY_COLOR, media } from 'Theme'
import { Title, Text } from 'SharedComponents'

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${PRIMARY_COLOR};

    &:hover {
        color: ${TERTIARY_COLOR};
    }
`

const HeaderWrapper = styled.div`
    align-items: baseline;
    justify-content: space-between;
    display: flex;
    margin-bottom: 40px;
    margin-left: 5px;
    margin-right: 5px;
    ${media.desktop} {
        margin-top: 20px;
        margin-bottom: 20px;
    }
`

const Header = () => {
    return (
        <HeaderWrapper>
            <div>
                <Title size="large">
                    <StyledLink to="/">Travis Bumgarner</StyledLink>
                </Title>
                <Text>These are artifacts of my experiences learning, creating, and exploring.</Text>
            </div>
            <Navigation />
        </HeaderWrapper>
    )
}

export default Header
