
import styled, { css } from 'styled-components'
import { useMemo } from 'react'

const SnapshotWrapper = styled.div<{ top: number, left: number, rotation: number }>`
  box-sizing: border-box;
  background-color: white;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  break-inside: avoid;
  max-height: 100%;

  ${({ top, left, rotation }) => css`
    left: ${top}px;
    top: ${left}px;
    transform: rotate(${rotation}deg);
    position: relative;
  `}

  > img {
    height: auto;
    padding: 0.5rem 0.5rem 0 0.5rem;
    width: 100%;
    box-sizing: border-box;
  }

  > div {
    padding: 0rem 0.5rem 0.5rem 0.5rem;
    min-height: 2rem;
    text-align: center;
  }
`
const randomIntFromInterval = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const Snapshot = ({ children, src }: { children?: JSX.Element, src: string }) => {
  const left = useMemo(() => randomIntFromInterval(-10, 10), [])
  const top = useMemo(() => randomIntFromInterval(-10, 10), [])
  const rotation = useMemo(() => randomIntFromInterval(-5, 5), [])

  return (
    <SnapshotWrapper top={top} left={left} rotation={rotation}>
      <img src={src}></img>
      <div>{children}</div>
    </SnapshotWrapper>
  )
}

export default Snapshot