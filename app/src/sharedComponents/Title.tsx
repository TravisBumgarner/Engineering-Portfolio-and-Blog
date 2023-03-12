import styled, { css } from 'styled-components'

import { PRIMARY_COLOR } from 'Theme'

const LargeTitleStyles = css`
    font-size: 1.6rem;
    margin: 0 0;
    font-weight: 700;
    font-family: Raleway, sans-serif;
`

const MediumTitleStyles = css`
    font-size: 1.3rem;
    margin: 1rem 0;
    font-weight: 700;
    font-family: Raleway, sans-serif;
`

const SmallTitleStyles = css`
    font-size: 1rem;
    margin: 1rem 0;
    font-weight: 700;
    font-family: Raleway, sans-serif;
`

const LargeTitle = styled.h1`${LargeTitleStyles}`
const MediumTitle = styled.h2`${MediumTitleStyles}`
const SmallTitle = styled.h3`${SmallTitleStyles}`


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
export { SmallTitleStyles, MediumTitleStyles, LargeTitleStyles }
