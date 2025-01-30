"use client"

import { SPACING, THEME } from '@/lib/theme'
import styled from 'styled-components'

export const YoutubeWrapper = styled.figure`
  overflow: hidden;
  position: relative;
  margin: 1rem 0;
  border: ${SPACING.MEDIUM} solid ${THEME.SECONDARY_BACKGROUND_COLOR};
  color: ${THEME.FOREGROUND_COLOR};
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
