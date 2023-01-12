import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import styled from 'styled-components'

const NavWrapper = styled.nav`
  position: absolute;
  left: 0;
  bottom: 0;
`

const List = styled.ul`
  margin: 3rem;
`

const ListItem = styled.li`
`

const Link = styled.a`
  display: inline-block;
  font-weight: 700;
  font-style: italic;
  font-size: 3rem;
  color: black;
  transition: all 0.5s;
  border: solid white 0.25rem;
  margin: 0.25rem;

  &:hover {
    background-color: black;
    color: white;
    border-color: black;
  }

  &:visited {
    color: green;
  }
`

const H1 = styled.h1`
  display: inline-block;
  padding-right: 1rem;
  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: black }
  }

  font-size: 3rem;
  font-weight: 700;
  margin: 3rem;


  border-right: .15em solid black;
  animation: 
    blink-caret 1s step-end infinite;
`

const Header = () => {
  const [mode, setMode] = useState<'addition' | 'subtraction'>('addition')
  const [length, setLength] = useState(0)
  const BASE_NAME = "Travis Bumgarner"
  useEffect(() => {
    if (mode === 'addition') {
      const intervalId = setInterval(() => {
        setLength(prev => {
          if (prev + 1 === BASE_NAME.length) {
            clearInterval(intervalId)
            setMode('subtraction')
          }
          return prev + 1
        })
      }, 50)
    } else {
      const intervalId = setInterval(() => {
        setLength(prev => {
          if (prev === 1) {
            clearInterval(intervalId)
            setMode('addition')
          }
          return prev - 1
        })
      }, 300)
    }
  }, [mode])


  return (
    <H1>{BASE_NAME.slice(0, length)}</H1>
  )

}

const Landing = () => {
  return (
    <>
      <Header />
      <NavWrapper>
        <List>
          <ListItem><Link href="https://google.com">Blog</Link></ListItem>
          <ListItem><Link href="https://google.com">Talks</Link></ListItem>
          <ListItem><Link href="https://google.com">Projects</Link></ListItem>
          <ListItem><Link href="https://google.com">Code</Link></ListItem>
          <ListItem><Link href="https://google.com">Collab</Link></ListItem>
        </List>
      </NavWrapper>
    </>
  )
}

export default Landing
