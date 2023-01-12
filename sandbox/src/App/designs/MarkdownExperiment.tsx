import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'

const blogPost = `
# Header 1

## Header 2

### Header 3

#### Header 4

##### Header 5

Hello this is some text.
`

const Wrapper = styled.div`
  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.2rem;
  }
`

const ReusableMarkdownComponent = ({ children }: { children: string }) => {
  return (
    <Wrapper>
      <ReactMarkdown>{blogPost}</ReactMarkdown>
    </Wrapper>
  )
}

const Markdown = () => {
  return (
    <ReusableMarkdownComponent>{blogPost}</ReusableMarkdownComponent>
  )
}

export default Markdown