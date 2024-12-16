"use client"

import { BACKGROUND_COLOR, CSSHover, FOREGROUND_COLOR } from '@/lib/theme'
import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: ${BACKGROUND_COLOR};
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  justify-content: center;
  color: ${FOREGROUND_COLOR};
`

export const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: underline;
  ${CSSHover}
`