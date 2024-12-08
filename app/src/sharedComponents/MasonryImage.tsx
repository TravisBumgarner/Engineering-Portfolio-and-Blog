import React, { useMemo } from 'react'
import styled, { css } from 'styled-components'

import { Link } from 'react-router-dom'
import { BACKGROUND_COLOR, CSSTransition, SPACING } from 'Theme'
import BlurHashImage from './BlurHashImage'

const MasonryImage = ({
  src,
  link,
  text
}: {
  src: string
  link?: string
  text?: string
}) => {
  if (!link) {
    return (
      <SnapshotWrapper>
        <BlurHashImage src={src} />
        <p>{text}</p>
      </SnapshotWrapper>
    )
  }

  return (
    <StyledLink to={link}>
      <SnapshotWrapper $isLink>
        <BlurHashImage src={src} />
        <p>{text}</p>
      </SnapshotWrapper>
    </StyledLink>
  )
}

const StyledLink = styled(Link)`
  ${CSSTransition}
  color: ${BACKGROUND_COLOR};
  img {
    transition: filter 0.3s ease-in-out;
    filter: contrast(40%) grayscale(100%);
  }

  &:hover {
    color: ${BACKGROUND_COLOR};
    img {
      color: ${BACKGROUND_COLOR};
      filter: contrast(100%) grayscale(0%);
    }
  }
`

const SnapshotWrapper = styled.div<{ $isLink?: boolean }>`
  box-sizing: border-box;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  > img {
    height: auto;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    max-height: 60vh;
    object-fit: cover;
    object-position: top;
  }

  > p {
    color: ${BACKGROUND_COLOR};
    padding: ${SPACING.MEDIUM}px;
  }
`


export default MasonryImage
