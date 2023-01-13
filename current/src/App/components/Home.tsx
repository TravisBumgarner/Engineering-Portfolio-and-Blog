import styled, { css } from 'styled-components'
import { useMemo, useState, useCallback, useEffect } from 'react'

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

const HomeWrapper = styled.div`
  column-count: 2;
  column-gap: 1rem;
  overflow: scroll;
  
  `

const Home = () => {
    const photos = useMemo(() => {
        const output = []
        for (let i = 1; i < 74; i++) output.push(<Photo key={`http://localhost:3003/public/wall-${i}.jpg`} label={"Hello"} src={`/public/wall-${i}.jpg`} />)
        return output
    }, [])

    return (
        <>
            <HomeWrapper>
                {photos}
            </HomeWrapper>
        </>
    )
}

export default Home
