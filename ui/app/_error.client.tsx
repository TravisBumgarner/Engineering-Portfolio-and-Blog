"use client"

import { LIST_SIZING, SPACING } from '@/lib/theme'
import styled from 'styled-components'

export const Wrapper = styled.div`
  ${LIST_SIZING};

  > * {
    margin: ${SPACING.SMALL} 0;
  }
`

