import { useInView } from 'framer-motion'
import React, { useMemo, useRef } from 'react'
import BlurHashImage from 'SharedComponents/BlurHashImage'
import styled, { css } from 'styled-components'
import { media, SPACING } from 'Theme'
import { blurHashLookup } from '../blurHashLookup'
import snapshots from '../snapshots/index.json'

const PHOTO_SPACING = SPACING.MEDIUM
const PHOTO_SPACING_MOBILE = SPACING.XSMALL

function random(seed) {
  var x = Math.sin(seed++) * 10000
  return x - Math.floor(x)
}

function shuffle(array) {
  let seed = new Date().getDate()

  var m = array.length,
    t,
    i

  while (m) {
    i = Math.floor(random(seed) * m--)
    t = array[m]
    array[m] = array[i]
    array[i] = t
    ++seed
  }

  return array
}

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
      <BlurHashImage src={`${__STATIC__}${src}`} />
    </StyledCell>
  )
}

const StyledCell = styled.div<{
  $isMostlyInView: boolean
  $isJustInView: boolean
  $isHalfView: boolean
}>`
  transition: opacity 0.5s ease-in-out;

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

  border: 10px solid #cbcbcb;
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

const Column = ({ photos, columnCount }: { photos: string[]; columnCount }) => {
  return (
    <StyledColumn $columnCount={columnCount}>
      {photos.map(src => (
        <Cell key={src} src={src} />
      ))}
    </StyledColumn>
  )
}

const TOTAL_COLUMNS = 2

const PhotoMasonry = () => {
  const imagesByColumn = useMemo(() => {
    // Grab photos one at a time.
    // Use photos hardcoded widths and heights to calculate things. Makes it easier for resize

    const columnHeights = Array<number>(TOTAL_COLUMNS).fill(0)
    // Ensure that each `[]` passed to `Array.from` is a new array. Reference issue with fill.
    const output = Array.from({ length: TOTAL_COLUMNS }, () => [] as string[])

    // Present random items each day.
    shuffle(Object.values(snapshots)).forEach(({ src }) => {
      // All photos will have a width of 1 unit.
      // Calculate height based on aspect ratio and we'll use that to determine
      // which column to put it in.
      const { height, width } = blurHashLookup[src]
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
  }, [TOTAL_COLUMNS])

  return (
    <Table>
      {imagesByColumn.map((photos, index) => (
        <Column columnCount={TOTAL_COLUMNS} key={index} photos={photos} />
      ))}
    </Table>
  )
}

const Table = styled.div`
  display: flex;
  flex-direction: row;
`

export default PhotoMasonry
