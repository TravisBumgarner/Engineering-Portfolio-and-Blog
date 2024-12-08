import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'
import { BACKGROUND_COLOR, FOREGROUND_COLOR, SPACING } from 'Theme'
import BlurHashImage from './BlurHashImage'

const MasonryImage = ({
  src,
  link,
  text,
  date
}: {
  src: string
  link?: string
  text?: string
  date?: string
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
        <div>
          <p>{text}</p>
          {date && <time>{date}</time>}
        </div>
      </SnapshotWrapper>
    </StyledLink>
  )
}

const StyledLink = styled(Link)`
  color: ${BACKGROUND_COLOR};
  img {
    transition: filter 0.3s ease-in-out;
    filter: contrast(80%) grayscale(100%);
  }
  text-decoration: none;
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
  background-color: ${FOREGROUND_COLOR};
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

  div {
    color: ${BACKGROUND_COLOR};
    padding: ${SPACING.MEDIUM}px;
  }

  time {
    font-size: 0.8em;
    color: color-mix(in srgb, ${BACKGROUND_COLOR} 80%, transparent);
  }
`

export default MasonryImage
