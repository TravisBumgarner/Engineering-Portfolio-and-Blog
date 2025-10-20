'use client'

import { SPACING } from '@/lib/styles/consts'
import styled from 'styled-components'

export const YoutubeWrapper = styled.figure`
  overflow: hidden;
  position: relative;
  margin: 1rem 0;
  border: ${SPACING.MEDIUM} solid var(--secondary-background);
  color: var(--foreground);
  aspect-ratio: 16 / 9;
  width: 100%;

  iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
`
