import React, { useMemo } from 'react'
import styled, { css } from 'styled-components'

import { Link } from 'react-router-dom'
import { BACKGROUND_COLOR, CSSTransition, SPACING } from 'Theme'
import BlurHashImage from './BlurHashImage'

const SnapshotWrapper = styled.div<{ $isLink?: boolean }>`
  box-sizing: border-box;
  background-color: white;
  margin-bottom: 1rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  max-height: 100%;
  padding: ${SPACING.MEDIUM}px;

  > img {
    height: auto;
    width: 100%;
    box-sizing: border-box;
  }

  > p {
    margin-top: ${SPACING.MEDIUM}px;
  }
`


const Snapshot = ({
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

  &:hover {
    color: ${BACKGROUND_COLOR};
  }
`

export default Snapshot
