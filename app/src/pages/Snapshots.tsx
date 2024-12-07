import React, { useEffect, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'
import { blurHashLookup } from '../blurHashLookup'
import { motion, useAnimationControls, useInView } from 'framer-motion'

const PHOTO_SPACING = 16

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
      $opacity={isInView ? 1 : 0}
      animate={controls}
      transition={{
        duration: 0.4
      }}
      variants={{
        fadeIn: {
          opacity: [0, 1]
        },
        fadeOut: {
          opacity: [1, 0]
        }
      }}
    >
      <StyledImage
        src={`${__STATIC__}${src}`}
      />
    </StyledCell>
  )
}

const StyledImage = styled.img`
  border: 10px solid #fff;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  display: block; // Removes descender issues for display: inline.

  transition: border-color 0.2s ease-in-out;

  & :hover {
    border-color: #fff;
  }
`

const StyledCell = styled(motion.div)<{
  $opacity: number
}>`
  margin: ${PHOTO_SPACING} 0;
  opacity: ${props => `${props.$opacity}`};
  transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;
`



const TOTAL_PHOTOS = 81





const StyledColumn = styled.div<{ $columnCount: number }>`
  display: flex;
  flex-direction: column;
  margin: 0 ${PHOTO_SPACING};
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
  const [photoCount, setPhotoCount] = useState(11)
  const [columns, setColumns] = useState(2)

  const photos = useMemo(() => {
    const output: string[] = []
    for (let i = 1; i <= TOTAL_PHOTOS; i++)
      output.push(`/snapshots/snapshot-${i}.jpg`)
    return output.reverse()
  }, [])


  const imagesByColumn = useMemo(() => {
    // Grab photos one at a time.
    // Use photos hardcoded widths and heights to calculate things. Makes it easier for resize

    const columnHeights = Array<number>(columns).fill(0)
    // Ensure that each `[]` passed to `Array.from` is a new array. Reference issue with fill.
    const output = Array.from({ length: columns }, () => [] as string[])

    Object.values(photos)
      .slice(0, photoCount)
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
  }, [photos, columns, photoCount])

  return (
    <>
      <ButtonsWrapper>
        Photo Count:
        <button
          onClick={() => {
            setPhotoCount(prev => prev + 1)
          }}
        >
          ++
        </button>
        <button
          onClick={() => {
            setPhotoCount(prev => prev - 1)
          }}
        >
          --
        </button>
        Columns:
        <button
          onClick={() => {
            setColumns(prev => prev + 1)
          }}
        >
          ++
        </button>
        <button
          onClick={() => {
            setColumns(prev => prev - 1)
          }}
        >
          --
        </button>
      </ButtonsWrapper>
      <Table>
        {imagesByColumn.map((photos, index) => (
          <Column columnCount={columns} key={index} photos={photos} />
        ))}
      </Table>
    </>
  )
}

const Table = styled.div`
  display: flex;
  flex-direction: row;
`

const ButtonsWrapper = styled.div`
  position: fixed;
  right: 16px;
  bottom: 16px;
  color: #eee;
  background-color: #333;
  padding: 8px;
  border-radius: 4px;
`

export default PhotoMasonry