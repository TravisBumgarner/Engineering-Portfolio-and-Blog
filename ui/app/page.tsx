"use client"

import BlurHashImage from '@/app/_sharedComponents/BlurHashImage'
import blurhashes from '@/content/blurhashes/index.json'
import snapshots from '@/content/snapshots/index.json'
import { FOREGROUND_COLOR, media, SPACING } from '@/lib/theme'
import { BlurHash } from '@/lib/types'
import { shuffle } from '@/lib/utilities'
import { useInView } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'
import styled, { css } from 'styled-components'

const PHOTO_SPACING = SPACING.MEDIUM
const PHOTO_SPACING_MOBILE = SPACING.XSMALL


const Cell = ({ src }: { src: string }) => {
  const ref = useRef<HTMLDivElement>(null)

  const isMostlyInView = useInView(ref, { amount: 0.75 })
  const isHalfView = useInView(ref, { amount: 0.35 })
  const isJustInView = useInView(ref, { amount: 0.05 })

  return (
    <StyledCell
      ref={ref}
      $isMostlyInView={isMostlyInView}
      $isJustInView={isJustInView}
      $isHalfView={isHalfView}
    >
      <BlurHashImage src={`${process.env.NEXT_PUBLIC_STATIC_PATH}${src}`} />
    </StyledCell>
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

  border: 5px solid ${FOREGROUND_COLOR};
  // *2 for vertical margin collapsing.
  margin-bottom: ${PHOTO_SPACING * 2}px;

  ${media.tablet} {
    margin-bottom: ${PHOTO_SPACING_MOBILE * 2}px;
  }
`

const StyledColumn = styled.div<{ $columnCount: number }>`
  padding: 0 ${PHOTO_SPACING}px;
  flex-basis: calc(100% / ${props => props.$columnCount});

  ${media.tablet} {
    padding: 0 ${PHOTO_SPACING_MOBILE}px;
  }
`

const Column = ({ photos, columnCount }: { photos: string[]; columnCount: number }) => {
  return (
    <StyledColumn $columnCount={columnCount}>
      {photos.map(src => (
        <Cell key={src} src={src} />
      ))}
    </StyledColumn>
  )
}

const PhotoMasonry = () => {
  const [totalColumns, setTotalColumns] = useState<number>(2)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      setTotalColumns(width < 600 ? 1 : 2)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const imagesByColumn = useMemo(() => {
    // Grab photos one at a time.
    // Use photos hardcoded widths and heights to calculate things. Makes it easier for resize

    const columnHeights = Array<number>(totalColumns).fill(0)
    // Ensure that each `[]` passed to `Array.from` is a new array. Reference issue with fill.
    const output = Array.from({ length: totalColumns }, () => [] as string[])

    // Present random items each day.
    shuffle(Object.values(snapshots)).forEach(({ src }) => {
      // All photos will have a width of 1 unit.
      // Calculate height based on aspect ratio and we'll use that to determine
      // which column to put it in.
      const { height, width } = blurhashes[src as keyof typeof blurhashes] as BlurHash
      const unitHeight = height / width

      const columnforCurrentPhoto = columnHeights.indexOf(
        Math.min(...columnHeights)
      )
      // This algorithm does not account for the vertical spacing between photos.
      // So if a column has many landscape photos, there's lots of vertical
      // padding that this algorithm doesn't account for. This is a small factor of safety.

      const FACTOR_OF_SAFETY = height > width ? 0.9 : 1.1
      columnHeights[columnforCurrentPhoto] += unitHeight * FACTOR_OF_SAFETY
      output[columnforCurrentPhoto].push(src)
    })

    return output
  }, [totalColumns])

  return (
    <Table>
      {imagesByColumn.map((photos, index) => (
        <Column columnCount={totalColumns} key={index} photos={photos} />
      ))}
    </Table>
  )
}

const Table = styled.div`
  display: flex;
  flex-direction: row;
`

export default PhotoMasonry
