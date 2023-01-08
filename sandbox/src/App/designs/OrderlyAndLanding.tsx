import styled, { css } from 'styled-components'
import { useMemo, useState, useEffect, useCallback } from 'react'
import { version } from 'html-webpack-plugin'

const NavWrapper = styled.nav<{ isNavigationVisible: boolean }>`
    display: flex;
    align-items: end;
    transition: left 1s;
    left: ${({ isNavigationVisible }) => isNavigationVisible ? "0" : `-100vw`};
    position: relative;
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
  transition: all 0.75s;
  border: solid white 0.25rem;
  margin: 0.25rem;
  background-color: white;

  &:hover {
    background-color: #3e8eff;
    color: white;
    border-color: #3e8eff;
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

const EXTENSIONS = ['psd', 'dxf', 'sldrt']
const BASE = ['tbumgarner', 'travis_bumgarner']
const VERSION = ['_final', 'draft']

const randomItem = (array: any[]) => {
  return array[Math.floor(Math.random() * array.length)];
}

const createFilename = () => {
  return `${randomItem(BASE)}${randomItem(VERSION)}.${randomItem(EXTENSIONS)}`
}

const Header = () => {
  const [length, setLength] = useState(0)
  const [title, setTitle] = useState(createFilename())

  const triggerRefresh = useCallback(() => {
    const subtraction = () => {
      const intervalId = setInterval(() => {
        setLength(prev => {
          if (prev === 1) {
            clearInterval(intervalId)
            setTitle(createFilename())
          }
          return prev - 1
        })
      }, 300)
    }

    const intervalId = setInterval(() => {
      setLength(prev => {
        if (prev + 1 === title.length) {
          clearInterval(intervalId)
          subtraction()
        }
        return prev + 1
      })
    }, 50)


  }, [title])

  return (
    <>
      <H1>{title.slice(0, length)}</H1>
      <button style={{ position: 'fixed', right: 0, top: 0 }} onClick={triggerRefresh}>Trigger refresh</button>
    </>
  )



}

const Landing = () => {
  const [isNavigationVisible, setIsNavigationVisible] = useState(true)
  console.log(isNavigationVisible)
  const handleNavigationAway = useCallback(() => (setIsNavigationVisible(prev => !prev)), [])
  return (
    <NavWrapper isNavigationVisible={isNavigationVisible}>
      <List>
        <ListItem><Link href="https://google.com">Blog</Link></ListItem>
        <ListItem><Link href="https://google.com">Talks</Link></ListItem>
        <ListItem><Link href="https://google.com">Projects</Link></ListItem>
        <ListItem><Link href="https://google.com">Code</Link></ListItem>
        <ListItem><Link href="https://google.com">Collab</Link></ListItem>
      </List>
      <button onClick={handleNavigationAway}>Navigating away</button>
    </NavWrapper>
  )
}

const SCALE = 1

const PhotoWrapper = styled.div<{ top: number, left: number, rotation: number }>`
  /* border: 2px solid black; */
  /* width: calc(150px * ${SCALE}); */
  box-sizing: border-box;
  /* position: absolute; */
  /* transition: all 0.5s; */
  /* z-index: 1; */
  background-color: white;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  break-inside: avoid;
  ${({ top, left, rotation }) => css`
    left: ${top}px;
    top: ${left}px;
    transform: rotate(${rotation}deg);
  `}

  > img {
    height: auto;
  padding: calc(5px * ${SCALE});;
  width: 100%;
  box-sizing: border-box;
  }

  > p {
    color: black;
  height: calc(50px * ${SCALE});
  display: flex;
  justify-content: center;
  align-items: center;
  }
  `
function randomIntFromInterval(min: number, max: number) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const BigOlWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  margin: 0;
    padding: 0;
    position: fixed;
    left: 0;
    top: 0;
`

const Photo = ({ label, src }: { label: string, src: string }) => {
  const [left, setLeft] = useState(randomIntFromInterval(-10, 10))
  const [top, setTop] = useState(randomIntFromInterval(-10, 10))
  const [rotation, setRotation] = useState(randomIntFromInterval(-5, 5))

  return (
    <PhotoWrapper top={top} left={left} rotation={rotation}>
      <img alt={label} src={src}></img>
      <p>{label}</p>
    </PhotoWrapper>
  )
}

const Wrapper = styled.div`
  column-count: 2;
  column-gap: 1rem;
  overflow: scroll;
  
  `

const Scattered = () => {
  const photos = useMemo(() => {
    const output = []
    for (let i = 1; i < 74; i++) output.push(<Photo key={`wall-${i}.jpg`} label={"Hello"} src={`http://localhost:3000/public/wall-${i}.jpg`} />)
    return output
  }, [])

  return (
    <>
      <Header />
      <BigOlWrapper>
        <Landing />
        <Wrapper>
          {photos}
        </Wrapper>
      </BigOlWrapper>
    </>
  )
}

export default Scattered
