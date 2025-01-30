'use client'

import ROUTES from '@/lib/routes'
import { SPACING, THEME } from '@/lib/theme'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const THERE = [
  {
    title: 'Resume',
    path: '/travis_bumgarner_resume.pdf',
    target: '_blank'
  },
  {
    title: 'LinkedIn',
    path: 'https://www.linkedin.com/in/travisbumgarner/',
    target: '_blank'
  },
  {
    title: 'Github',
    path: 'https://github.com/travisBumgarner/',
    target: '_blank'
  },
  {
    title: 'Photography',
    path: 'https://travisbumgarner.photography',
    target: '_blank'
  }
]

const SidebarClient = () => {
  const [truncate, setTruncate] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    ref.current?.addEventListener('mouseenter', () => {
      setTruncate(false)
    })
    ref.current?.addEventListener('mouseleave', () => {
      setTruncate(true)
    })

    return () => {
      ref.current?.removeEventListener('mouseenter', () => {
        setTruncate(false)
      })
      ref.current?.removeEventListener('mouseleave', () => {
        setTruncate(true)
      })
    }
  }, [ref])

  return (
    <Positioner>
      <Wrapper ref={ref}>
        <ul>
          {Object.values(ROUTES).map(r => (
            <Box key={r.path}>
              <Link href={r.path}>
                {truncate ? r.title.slice(0, 1) : r.title}
              </Link>
            </Box>
          ))}
        </ul>
        <ul>
          {THERE.map(t => (
            <Box key={t.path}>
              <Link target={t.target} href={t.path}>
                {truncate ? t.title.slice(0, 1) : t.title}
              </Link>
            </Box>
          ))}
        </ul>
      </Wrapper>
    </Positioner>
  )
}

const Box = styled.li`
  /* width: 50px; */
  cursor: pointer;
  padding: 0 10px;
  height: 50px;
  margin: ${SPACING.XSMALL} 0;
  background-color: ${THEME.SECONDARY_BACKGROUND_COLOR};
  color: ${THEME.FOREGROUND_COLOR};
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
    color: ${THEME.PRIMARY_COLOR};
  }
`

const Positioner = styled.div`
  position: fixed;
  padding: 10px;
  top: 0;
  left: 0;
  height: 100%;
  align-content: center;
`

const Wrapper = styled.div`
  ul:first-child {
    margin-bottom: 10px;
  }
`

export default SidebarClient
