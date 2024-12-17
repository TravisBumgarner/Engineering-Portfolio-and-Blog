"use client"

import Link from 'next/link'
import styled from 'styled-components'

import { CSSHover } from '@/lib/theme'

export const LinkWrapper = styled(Link)`
  ${CSSHover};
  font-family: Raleway, sans-serif;
  font-weight: 100;
`
