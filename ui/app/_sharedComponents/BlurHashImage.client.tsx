"use client"

import styled from 'styled-components'

export const StyledImage = styled.img<{
    $blurUrl: string | null
    $width: number
    $height: number
  }>`
    width: 100%;
    aspect-ratio: ${props => props.$width / props.$height};
    display: block;
  
    ${props =>
      props.$blurUrl &&
      `
        background-image: url(${props.$blurUrl});
        background-size: contain;
        background-repeat-no-repeat;
    `}
  `