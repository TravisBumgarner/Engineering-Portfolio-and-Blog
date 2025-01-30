'use client'

import BlurHashImage from '@/app/_sharedComponents/BlurHashImage'
import snapshots from '@/content/snapshots/index.json'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import styled, { css } from 'styled-components'

const Cell = ({ src, index }: { src: string; index: number }) => {
  const ref = useRef<HTMLDivElement>(null)

  const isMostlyInView = useInView(ref, { amount: 0.75 })
  const isHalfView = useInView(ref, { amount: 0.35 })
  const isJustInView = useInView(ref, { amount: 0.05 })
  const shouldLoad = useInView(ref, { margin: '0px 0px 100px 0px', once: true })
  return (
    <div ref={ref}>
      {shouldLoad ? (
        <StyledCell
          $isMostlyInView={isMostlyInView}
          $isJustInView={isJustInView}
          $isHalfView={isHalfView}
        >
          {/* Priority load the first image in each column.  */}
          <BlurHashImage
            priority={index === 0}
            src={src}
          />
        </StyledCell>
      ) : null}
    </div>
  )
}

const Snapshots = () => {
  return (
    <Wrapper>
      {Object.values(snapshots).map(({ src }, index) => (
        <Cell key={index} src={src} index={index} />
      ))}
    </Wrapper>
  )
}

const StyledCell = styled.div<{
  $isMostlyInView: boolean
  $isJustInView: boolean
  $isHalfView: boolean
}>`
  transition: opacity 0.25s ease-in-out;

  ${({ $isJustInView, $isHalfView, $isMostlyInView }) => {
    if ($isMostlyInView) {
      return css`
        opacity: 1;
      `
    }
    if ($isHalfView) {
      return css`
        opacity: 0.66;
      `
    }
    if ($isJustInView) {
      return css`
        opacity: 0.33;
      `
    }
    return css`
      opacity: 0;
    `
  }}
`


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export default Snapshots
