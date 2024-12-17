import { TextWrapper } from './Text.client'

const Text = ({ children }: { children: React.ReactNode }) => {
  return <TextWrapper>{children}</TextWrapper>
}

export default Text
