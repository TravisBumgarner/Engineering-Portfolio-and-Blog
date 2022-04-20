import React from 'react'
import styled from 'styled-components'

import { PRIMARY_COLOR } from 'Theme'

const LargeTitle = styled.h1`
    display: inline-block;
    font-size: 1.7rem;
    margin: 10px 0;
    font-weight: 700;
    font-family: Raleway, sans-serif;
    text-transform: uppercase;
    color: ${PRIMARY_COLOR};
`

const MediumTitle = styled.h2`
    display: inline-block;
    font-size: 1.6rem;
    margin: 0 0 10px 0;
    font-weight: 700;
    font-family: Raleway, sans-serif;
    color: ${PRIMARY_COLOR};
`

const SmallTitle = styled.h3`
    display: inline-block;
    font-size: 1.2rem;
    margin: 5px 0;
    font-weight: 700;
    font-family: Raleway, sans-serif;
    color: ${PRIMARY_COLOR};
`

type TitleProps = {
    size: 'small' | 'large' | 'medium'
    children: React.ReactNode
}

const Title = ({ children, size }: TitleProps) => {
    switch (size) {
        case 'large':
            return <LargeTitle>{children}</LargeTitle>
        case 'medium':
            return <MediumTitle>{children}</MediumTitle>
        case 'small':
            return <SmallTitle>{children}</SmallTitle>

    }
}

export default Title
