import styled, { css } from 'styled-components'

import { useState } from 'react'
import { useMemo } from 'react'

const SCALE = 1

const PhotoWrapper = styled.div<{ top: number, left: number, rotation: number }>`
  border: 2px solid black;
  width: calc(150px * ${SCALE});
  box-sizing: border-box;
  position: absolute;
  transition: all 0.5s;
  z-index: 1;
  background-color: white;
  overflow: scroll;

  ${({ top, left, rotation }) => css`
    left: ${top}vw;
    top: ${left}vh;
    transform: rotate(${rotation}deg);
  `}

  &:hover {
    left: calc(50vw - 75px);
    top: calc(50vh - 100px);
    transform: rotate(0);
    transform: scale(4);
    z-index: 999;
  }

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
  const [left, setLeft] = useState(randomIntFromInterval(0, 200))
  const [top, setTop] = useState(randomIntFromInterval(0, 200))
  const [rotation, setRotation] = useState(randomIntFromInterval(-30, 30))


  const handleClick = () => {
    setLeft(500)
    setTop(500)
    setRotation(0)
  }

  return (
    <PhotoWrapper top={top} left={left} rotation={rotation}>
      <img alt={label} src={src}></img>
      <p>{label}</p>
    </PhotoWrapper>
  )
}

const Scattered = () => {
  const photos = useMemo(() => {
    const output = []
    for (let i = 1; i < 75; i++) output.push(<Photo key={`wall-${i}.jpg`} label={"Hello"} src={`http://localhost:3000/public/wall-${i}.jpg`} />)
    return output
  }, [])

  return (
    <div>
      {photos}
    </div>
  )
}

export default Scattered
