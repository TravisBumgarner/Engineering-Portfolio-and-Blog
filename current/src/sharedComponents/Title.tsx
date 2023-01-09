import styled, { css } from 'styled-components'

import { PRIMARY_COLOR } from 'Theme'

const LargeTitleStyles = css`
     display: block;
    font-size: 1.7rem;
    margin: 0 0;
    font-weight: 700;
    font-family: Raleway, sans-serif;
    color: ${PRIMARY_COLOR};
`

const MediumTitleStyles = css`
    display: block;
    font-size: 1.6rem;
    margin: 0 0 10px 0;
    font-weight: 700;
    font-family: Raleway, sans-serif;
    color: ${PRIMARY_COLOR};
`

const SmallTitleStyles = css`
    display: inline-block;
    font-size: 1.2rem;
    margin: 5px 0;
    font-weight: 700;
    font-family: Raleway, sans-serif;
    color: ${PRIMARY_COLOR};
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
