import React from 'react'
import styled from 'styled-components'

import { PRIMARY_COLOR } from 'Theme'

const TextWrapper = styled.p`
    margin: 15px 0;
`

type TextProps = {
    children: React.ReactNode
}

const Text = ({ children }: TextProps) => {
    return <TextWrapper>{children}</TextWrapper>
}

export default Text
