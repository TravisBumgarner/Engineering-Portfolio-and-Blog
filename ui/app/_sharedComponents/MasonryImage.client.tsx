"use client"

import { BACKGROUND_COLOR, FOREGROUND_COLOR, SPACING } from '@/lib/theme'
import Link from 'next/link'
import styled from 'styled-components'

export const StyledLink = styled(Link)`
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

export const StyledText = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 700;
`

export const SnapshotWrapper = styled.div<{ $isLink?: boolean }>`
  box-sizing: border-box;
  background-color: ${FOREGROUND_COLOR};
  border: 5px solid ${FOREGROUND_COLOR};

  > img {
    height: auto;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    max-height: 90vh;
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