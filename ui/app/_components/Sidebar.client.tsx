'use client'

import ROUTES from '@/lib/routes'
import { SPACING, THEME } from '@/lib/theme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react'
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

enum AnimationState {
  EXPANDING = 'expanding',
  COLLAPSING = 'collapsing',
  IDLE = 'idle'
}

type ItemRef = {
  animateExpandText: () => void
  animateCollapseText: () => void
}

type ItemProps = {
  title: string
  path: string
  target: string
  shouldRemainOpen: boolean
}

const Item = forwardRef<ItemRef, ItemProps>(({
  title,
  path,
  target,
  shouldRemainOpen,
  }, ref) => {
  const [isOpen, setIsOpen] = useState(false)
  const [displayText, setDisplayText] = useState(title.slice(0, 1))
  
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
  }, [title])

  useImperativeHandle(ref, () => ({
    animateExpandText,
    animateCollapseText
  }))

  useEffect(() => {
    if (shouldRemainOpen) {
      return
    }

    if (isOpen) {
      animateExpandText()
    } else {
      animateCollapseText()
    }
  }, [isOpen, animateExpandText, animateCollapseText, shouldRemainOpen])

  useEffect(() => {
    if (shouldRemainOpen && !isOpen) {
      setIsOpen(true)
    } 
  }, [shouldRemainOpen, isOpen])

  return (
    <Box
      $shouldRemainOpen={shouldRemainOpen}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link target={target} href={path}>
        {displayText}
      </Link>
    </Box>
  )
})

const SidebarClient = () => {
  const pathname = usePathname()
  const [hasMounted, setHasMounted] = useState(false)
  const itemRefs = useRef<{ [key: string]: React.RefObject<ItemRef> }>({})

  useEffect(() => {
    setHasMounted(true)
  }, [])

  useEffect(() => {
    [...Object.values(ROUTES), ...THERE].forEach(r => {
      itemRefs.current[r.path] = React.createRef<ItemRef>()
    })
    if (hasMounted) return
    // itemRefs.current[pathname]?.current?.animateExpandText()
    setHasMounted(true)
  }, [])

  const shouldRemainOpen = useMemo(() => {
    let value = false
    Object.values(ROUTES).forEach(r => {
      if (pathname === r.path) {
        value = true
      }
    })

    return value
  }, [pathname])

  return (
    <Positioner>
      {[...Object.values(ROUTES), ...THERE].map(r => (
        <Item
          ref={itemRefs.current[r.path]}
          key={r.path}
          title={r.title}
          path={r.path}
          target={r.target}
          shouldRemainOpen={shouldRemainOpen}
        />
      ))}
    </Positioner>
  )
}

const SHARED_WIDTH = '125px'
const Box = styled.div<{$shouldRemainOpen: boolean}>`
  transition: width 0.25s ease-in-out;

  align-self: flex-start;
  width: ${props => props.$shouldRemainOpen ? SHARED_WIDTH : '45px'};
  &:hover {
    width: ${SHARED_WIDTH};
  }
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
