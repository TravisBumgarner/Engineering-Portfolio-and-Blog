'use client'

import ROUTES from '@/lib/routes'
import { SPACING, THEME } from '@/lib/theme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useMemo, useState } from 'react'
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

const Item = ({
  title,
  path,
  target,
  overrideHover
}: {
  title: string
  path: string
  target: string
  overrideHover: boolean
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [displayText, setDisplayText] = useState(title)

  const animateExpandText = useCallback(() => {
    let timeoutId: NodeJS.Timeout
    let currentIndex = 1

    const animateText = () => {
      if (currentIndex <= title.length) {
        setDisplayText(title.slice(0, currentIndex))
        currentIndex++
        timeoutId = setTimeout(animateText, 25)
      }
    }
    animateText()

    return () => {
      clearTimeout(timeoutId)
    }
  }, [title])

  const animateCollapseText = useCallback(() => {
    let timeoutId: NodeJS.Timeout
    let currentIndex = title.length

    const animateText = () => {
      if (currentIndex > 0) {
        setDisplayText(title.slice(0, currentIndex))
        currentIndex--
        timeoutId = setTimeout(animateText, 25)
      }
    }
    animateText()

    return () => {
      clearTimeout(timeoutId)
    }
  }, [isHovered, title])

  useEffect(() => {
    if (overrideHover) {
      console.log('overrideHover', overrideHover)
      return
    }

    if (isHovered) {
      animateExpandText()
    } else {
      animateCollapseText()
    }
  }, [isHovered, animateExpandText, animateCollapseText, overrideHover])

  useEffect(() => {
    if (overrideHover) {
      animateExpandText()
    }
  }, [overrideHover])

  return (
    <Box
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link target={target} href={path}>
        {displayText}
      </Link>
    </Box>
  )
}

const SidebarClient = () => {
  const pathname = usePathname()

  const overrideHover = useMemo(() => {
    let override = false
    Object.values(ROUTES).forEach(r => {
      if (pathname === r.path) {
        override = true
      }
    })

    return override
  }, [pathname])

  return (
    <Positioner>
      {[...Object.values(ROUTES), ...THERE].map(r => (
        <Item
          key={r.path}
          title={r.title}
          path={r.path}
          target={r.target}
          overrideHover={overrideHover}
        />
      ))}
    </Positioner>
  )
}

const Box = styled.div`
  align-self: flex-start;
  min-width: 45px;
  height: 40px;
  margin: ${SPACING.XXSMALL} 0;
  background-color: ${THEME.SECONDARY_BACKGROUND_COLOR};
  color: ${THEME.FOREGROUND_COLOR};

  text-align: left;
  padding-left: 17px;
  padding-right: 17px;
  align-content: center;

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
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`

export default SidebarClient
