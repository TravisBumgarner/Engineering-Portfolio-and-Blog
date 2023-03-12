
import styled, { css } from 'styled-components'
import { useMemo } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { PRIMARY_COLOR } from 'Theme'


const SnapshotWrapper = styled.div<{ rotation: number }>`
  box-sizing: border-box;
  background-color: white;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  max-height: 100%;

  ${({ rotation }) => css`
   
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

  > * {
    color: ${PRIMARY_COLOR};
  }
`
const randomIntFromInterval = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const Snapshot = ({ children, src }: { children?: JSX.Element, src: string }) => {
  const rotation = useMemo(() => randomIntFromInterval(-5, 5), [])

  return (
    <SnapshotWrapper rotation={rotation}>
      <LazyLoadImage
        src={src}
      />
      <div>{children}</div>
    </SnapshotWrapper>
  )
}

export default Snapshot