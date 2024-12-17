"use client"

import styled from 'styled-components'

export const YoutubeWrapper = styled.figure`
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
  margin: 1rem 0;

  iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
`
