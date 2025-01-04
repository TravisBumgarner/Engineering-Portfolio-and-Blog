"use client"

import Link from 'next/link'
import styled from 'styled-components'

import { CSSHover } from '@/lib/theme'

export const LinkWrapper = styled(Link)`
  ${CSSHover};
  font-weight: 100;
`
