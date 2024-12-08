import React from 'react'
import styled from 'styled-components'

import { BACKGROUND_COLOR, CSSTransition, SPACING } from 'Theme'
import BlurHashImage from 'SharedComponents/BlurHashImage'

const ProjectImage = ({
  src,
  text
}: {
  src: string
  link?: string
  text?: string
}) => {
    return (
      <SnapshotWrapper>
        <BlurHashImage src={src} />
        <p>{text}</p>
      </SnapshotWrapper>
    )
}

const SnapshotWrapper = styled.div`
  box-sizing: border-box;
  background-color: #636363;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  > img {
    height: auto;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    max-height: 70vh;
    object-fit: contain;
  }

  > p {
    background-color: #fff;
    color: ${BACKGROUND_COLOR};
    padding: ${SPACING.MEDIUM}px;
  }
`


export default ProjectImage
