import React, { useMemo } from 'react'
import styled, { css } from 'styled-components'

import { Link } from 'react-router-dom'
import { BACKGROUND_COLOR, CSSTransition } from 'Theme'
import BlurHashImage from './BlurHashImage'

const SnapshotWrapper = styled.div<{ $rotation: number; $isLink?: boolean }>`
  box-sizing: border-box;
  background-color: white;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  max-height: 100%;
  padding: 0.5rem 0.5rem 0 0.5rem;

  ${({ $rotation }) => css`
    transform: rotate(${$rotation}deg);
    position: relative;
  `}

  > img {
    height: auto;
    width: 100%;
    box-sizing: border-box;
    border-radius: 0.25rem;
  }

  > p {
    padding: 1rem;
    min-height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  transition: transform 0.2s ease-in-out;

  &:hover {
    ${({ $isLink }) =>
      $isLink &&
      `
      transform: rotate(0deg);
    `}
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
  src,
  link,
  text
}: {
  src: string
  link?: string
  text?: string
}) => {
  const rotation = useMemo(() => {
    // Hash the rotation to be consistent based on filename.
    const seed = hashString(src)
    return randomIntFromInterval(-5, 5, seed)
  }, [])

  if (!link) {
    return (
      <SnapshotWrapper $rotation={rotation}>
        <BlurHashImage src={src} />
        <p>
          <PhotoText>{text}</PhotoText>
        </p>
      </SnapshotWrapper>
    )
  }

  return (
    <StyledLink to={link}>
      <SnapshotWrapper $isLink $rotation={rotation}>
        <BlurHashImage src={src} />
        <p>{text}</p>
      </SnapshotWrapper>
    </StyledLink>
  )
}

const PhotoText = styled.span`
  color: ${BACKGROUND_COLOR};
`

const StyledLink = styled(Link)`
  ${CSSTransition}
  color: ${BACKGROUND_COLOR};

  &:hover {
    color: ${BACKGROUND_COLOR};
  }
`

export default Snapshot
