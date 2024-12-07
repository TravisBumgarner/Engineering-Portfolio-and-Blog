import React, { useEffect, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'
import { blurHashLookup } from '../blurHashLookup'
import { motion, useAnimationControls, useInView } from 'framer-motion'
import { SPACING } from 'Theme'
import BlurHashImage from 'SharedComponents/BlurHashImage'

const TOTAL_PHOTOS = 81
const TOTAL_COLUMNS = 2

const PHOTO_SPACING = SPACING.MEDIUM

const Cell = ({ src }: {src: string}) => {
  const ref = useRef<HTMLDivElement>(null)
  const controls = useAnimationControls()
  const isInView = useInView(ref, { amount: 0.5 })

  const wasInView = useRef(false)

  useEffect(() => {
    const movedOntoScreen = !wasInView.current && isInView
    const movedOffOfScreen = wasInView.current && !isInView

    if (movedOntoScreen) {
      void controls.start('fadeIn')
    }

    if (movedOffOfScreen) {
      void controls.start('fadeOut')
    }

    wasInView.current = isInView
  }, [controls, isInView])

  return (
    <StyledCell
      ref={ref}
      animate={controls}
      initial={{ opacity: 0 }}
      variants={{
        fadeIn: {
          opacity: [0, 1],
        },
        fadeOut: {
          opacity: [1, 0],
        }
      }}
    >
      <BlurHashImage
        src={`${__STATIC__}${src}`}
      />
    </StyledCell>
  )
}

const StyledCell = styled(motion.div)`
  border: 10px solid #fff;
  // *2 for vertical margin collapsing.
  margin-bottom: ${PHOTO_SPACING * 2}px;
`

const StyledColumn = styled.div<{ $columnCount: number }>`
  padding: 0 ${PHOTO_SPACING}px;
  flex-basis: calc(100% / ${props => props.$columnCount});
`

const Column = ({
  photos,
  columnCount
}: {
  photos: string[]
  columnCount
}) => {
  return (
    <StyledColumn $columnCount={columnCount}>
      {photos.map(src => (
        <Cell key={src} src={src} />
      ))}
    </StyledColumn>
  )
}

const PhotoMasonry = () => {
  const photos = useMemo(() => {
    const output: string[] = []
    for (let i = 1; i <= TOTAL_PHOTOS; i++)
      output.push(`/snapshots/snapshot-${i}.jpg`)
    return output.reverse()
  }, [])


  const imagesByColumn = useMemo(() => {
    // Grab photos one at a time.
    // Use photos hardcoded widths and heights to calculate things. Makes it easier for resize

    const columnHeights = Array<number>(TOTAL_COLUMNS).fill(0)
    // Ensure that each `[]` passed to `Array.from` is a new array. Reference issue with fill.
    const output = Array.from({ length: TOTAL_COLUMNS }, () => [] as string[])

    Object.values(photos)
      .forEach(photo => {
        // All photos will have a width of 1 unit.
        // Calculate height based on aspect ratio and we'll use that to determine
        // which column to put it in.
        const { height, width } = blurHashLookup[photo]
        const unitHeight = height / width

        const columnforCurrentPhoto = columnHeights.indexOf(
          Math.min(...columnHeights)
        )
        // This algorithm does not account for the vertical spacing between photos.
        // So if a column has many landscape photos, there's lots of vertical
        // padding that this algorithm doesn't account for. This is a small factor of safety.

        const FACTOR_OF_SAFETY = height > width ? 0.9 : 1.1
        columnHeights[columnforCurrentPhoto] += unitHeight * FACTOR_OF_SAFETY
        output[columnforCurrentPhoto].push(photo)
      })

    return output
  }, [photos])

  console.log(imagesByColumn)

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