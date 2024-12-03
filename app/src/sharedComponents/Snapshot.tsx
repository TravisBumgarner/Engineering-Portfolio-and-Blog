import React, { useMemo } from 'react'
import styled, { css } from 'styled-components'

import { PRIMARY_COLOR } from 'Theme'
import BlurHashImage from './BlurHashImage'

const SnapshotWrapper = styled.div<{ rotation: number }>`
  box-sizing: border-box;
  background-color: white;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  max-height: 100%;
  padding: 0.5rem 0.5rem 0 0.5rem;

  ${({ rotation }) => css`
    transform: rotate(${rotation}deg);
    position: relative;
  `}

  > img {
    height: auto;
    width: 100%;
    box-sizing: border-box;
    border-radius: 0.25rem;
  }

  > div {
    padding: 0rem 0.5rem 0.5rem 0.5rem;
    min-height: 2rem;
    text-align: center;
  }

  > * {
    color: ${PRIMARY_COLOR};
  }
`

const hashString = (str: string): number => {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash |= 0 // Convert to 32bit integer
  }
  return hash
}

const randomIntFromInterval = (min: number, max: number, seed: number) => {
  const random = (Math.sin(seed) + 1) / 2 // Generate a pseudo-random number based on the seed
  return Math.floor(random * (max - min + 1) + min)
}

const Snapshot = ({
  children,
  src
}: {
  children?: JSX.Element
  src: string
}) => {
  const rotation = useMemo(() => {
    // Hash the rotation to be consistent based on filename.
    const seed = hashString(src)
    return randomIntFromInterval(-5, 5, seed)
  }, [])

  return (
    <SnapshotWrapper rotation={rotation}>
      <BlurHashImage src={src} />
      <div>{children}</div>
    </SnapshotWrapper>
  )
}

export default Snapshot
