import styled from "styled-components"
import React from 'react'
import ReactMarkdown from 'react-markdown'

import { LargeTitleStyles, MediumTitleStlyes, SmallTitleStlyes } from "./Title"
import { TextStyles } from "./Text"

const MarkdownStyles = styled.div`
    h1 {
        ${LargeTitleStyles}
    };
    h2 {
        ${MediumTitleStlyes}
    };
    h3 {
        ${SmallTitleStlyes}
    };
    p {
        ${TextStyles}
    };

`

const Markdown = ({ children }: { children: string }) => {
    return (
        <MarkdownStyles>
            <ReactMarkdown children={children} />
        </MarkdownStyles>
    )
}

export default Markdown