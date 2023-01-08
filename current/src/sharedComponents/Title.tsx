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

const MediumTitleStlyes = css`
    display: block;
    font-size: 1.6rem;
    margin: 0 0 10px 0;
    font-weight: 700;
    font-family: Raleway, sans-serif;
    color: ${PRIMARY_COLOR};
`

const SmallTitleStlyes = css`
    display: inline-block;
    font-size: 1.2rem;
    margin: 5px 0;
    font-weight: 700;
    font-family: Raleway, sans-serif;
    color: ${PRIMARY_COLOR};
`

const LargeTitle = styled.h1`${LargeTitleStyles}`
const MediumTitle = styled.h2`${MediumTitleStlyes}`
const SmallTitle = styled.h3`${SmallTitleStlyes}`


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
export { SmallTitleStlyes, MediumTitleStlyes, LargeTitleStyles }
