
import styled from 'styled-components'
import BlurHashImage from './BlurHashImage'

const ListItem = ({
  src,
  link,
  text,
  date,
  priority,
}: {
  src: string
  link?: string
  text?: string
  date?: string
  priority: boolean
}) => {
  return (
    <a href={link}>
        <div>
          <StyledText>{text}</StyledText>
          {date && <time>{date}</time>}
        </div>
        <BlurHashImage priority={priority} src={src} />
    </a>
  )
}

export const StyledText = styled.p`
  margin: 0;
  padding: 0;
`


export default ListItem
