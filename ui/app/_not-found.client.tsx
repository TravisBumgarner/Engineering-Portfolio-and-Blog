"use client"

import { MAX_LIST_WIDTH } from '@/lib/consts'
import { SPACING } from '@/lib/theme'
import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: ${MAX_LIST_WIDTH};
  margin: 0 auto;

  > * {
    margin: ${SPACING.SMALL} 0;
  }
`
