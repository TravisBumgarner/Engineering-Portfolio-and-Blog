'use client'

import { SPACING } from '@/lib/styles/consts'
import styled from 'styled-components'

export const BodyWrapper = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0 ${SPACING.SMALL};
  }
`
