import styled, { css } from 'styled-components'

import { Metadata } from 'sharedComponents'
import { useState } from 'react'
import { useMemo } from 'react'

const SCALE = 1

const PhotoWrapper = styled.div<{ left: number, top: number, margin: readonly [number, number, number, number] }>`
  /* border: 2px solid black; */
  /* width: calc(150px * ${SCALE}); */
  box-sizing: border-box;
  position: relative;
  /* transition: all 0.5s; */
  /* z-index: 1; */
  background-color: white;
  margin: ${({ margin, left, top }) => `
    ${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px};
    left: ${left}px;
    top: ${top}px;
  `};
  break-inside: avoid;

  /* &:hover {
    left: calc(50vw-75px);
    top: calc(50vh-100px);
    transform: rotate(0);
    transform: scale(4);
    z-index: 999;
  } */

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


const Photo = ({ label, src }: { label: string, src: string }) => {
  const [margin, setMargin] = useState([randomIntFromInterval(10, 50), randomIntFromInterval(10, 30), randomIntFromInterval(10, 30), randomIntFromInterval(10, 30)] as const)
  const [left, setLeft] = useState(randomIntFromInterval(-20, 20))
  const [top, setTop] = useState(randomIntFromInterval(-20, 20))

  return (
    <PhotoWrapper margin={margin} left={left} top={top}>
      <img alt={label} src={src}></img>
    </PhotoWrapper>
  )
}

const Wrapper = styled.div`
column-count: 3;
column-gap: 3rem;
margin: 0px auto;
max-width: 1200px;
`

const Scattered = () => {
  const photos = useMemo(() => {
    const output = []
    for (let i = 1; i < 74; i++) output.push(<Photo key={`wall-${i}.jpg`} label={"Hello"} src={`http://localhost:3000/public/wall-${i}.jpg`} />)
    return output
  }, [])

  return (
    <Wrapper>
      {photos}
    </Wrapper>
  )
}

export default Scattered
