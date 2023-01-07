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
    > div:first-child {
        align-items: baseline;
        justify-content: space-between;
        display: flex;
    }
`

const Header = () => {
    return (
        <HeaderWrapper>
            <div>
                <Title size="large">
                    <StyledLink to="/">Travis Bumgarner</StyledLink>
                </Title>
                <Navigation />
            </div>
            <Text>These are artifacts of my experiences learning, creating, and exploring.</Text>
        </HeaderWrapper>
    )
}

export default Header
