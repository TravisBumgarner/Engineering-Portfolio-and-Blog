
import styled, { css } from 'styled-components'
import { useMemo } from 'react'

const SnapshotWrapper = styled.div<{ top: number, left: number, rotation: number }>`
box-sizing: border-box;
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
  padding: 5px;
  width: 100%;
  box-sizing: border-box;
}

> p {
  color: black;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
`
const randomIntFromInterval = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const Snapshot = ({ label, src }: { label: string, src: string }) => {
  const left = useMemo(() => randomIntFromInterval(-10, 10), [])
  const top = useMemo(() => randomIntFromInterval(-10, 10), [])
  const rotation = useMemo(() => randomIntFromInterval(-5, 5), [])

  return (
    <SnapshotWrapper top={top} left={left} rotation={rotation}>
      <img alt={label} src={src}></img>
      <p>{label}</p>
    </SnapshotWrapper>
  )
}

export default Snapshot