import { TextWrapper } from './Text.client'
import { TextProps } from './Text.types'

const Text = ({ children, size }: TextProps) => {
  return <TextWrapper size={size}>{children}</TextWrapper>
}

export default Text
