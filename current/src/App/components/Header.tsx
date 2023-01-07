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
`

const Header = () => {
    return (
        <HeaderWrapper>
            <Title size="large">
                <StyledLink to="/">Travis Bumgarner</StyledLink>
            </Title>
            <Text>These are artifacts of my experiences learning, creating, and exploring.</Text>
            <Navigation />
        </HeaderWrapper>
    )
}

export default Header
