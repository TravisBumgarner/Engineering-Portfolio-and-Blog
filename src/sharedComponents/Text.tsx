import styled, { css } from 'styled-components'

const TextStyles = css`
    margin: 1rem 0;
`

const TextWrapper = styled.p`${TextStyles};`

type TextProps = {
    children: React.ReactNode
}

const Text = ({ children }: TextProps) => {
    return <TextWrapper>{children}</TextWrapper>
}

export default Text
export { TextStyles }
