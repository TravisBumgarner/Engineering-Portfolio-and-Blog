import styled, { css } from 'styled-components'

type TextProps = {
    children: React.ReactNode,
    size?: 'small'
}

const TextStyles = css < { size?: TextProps['size'] } > `
    margin: 0 0 1rem 0;
    ${({ size }) => {
        if (size && size === 'small') return 'font-size: 0.8rem;'
        return ''
    }}
`

const TextWrapper = styled.p`${TextStyles};`



const Text = ({ children, size }: TextProps) => {
    return <TextWrapper size={size}>{children}</TextWrapper>
}

export default Text
export { TextStyles }
