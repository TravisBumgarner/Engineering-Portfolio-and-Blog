import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import { blurHashLookup } from '../blurHashLookup'
import { motion, useAnimationControls, useInView } from 'framer-motion'
import { media, SPACING } from 'Theme'
import BlurHashImage from 'SharedComponents/BlurHashImage'

const CHILD_PADDING = SPACING.MEDIUM
const CHILD_PADDING_MOBILE = SPACING.XSMALL

const Cell = ({ element }: {element: JSX.Element}) => {
  const ref = useRef<HTMLDivElement>(null)
  
  const isIn75View = useInView(ref, { amount: 0.75 })
  const isIn50View = useInView(ref, { amount: 0.50 })
  const isIn25View = useInView(ref, { amount: 0.25 })

  return (
    <StyledCell
      ref={ref}
      $isIn75View={isIn75View}
      $isIn25View={isIn25View}
      $isIn50View={isIn50View}
    >
     {element}
    </StyledCell>
  )
}

const StyledCell = styled.div<{ $isIn75View: boolean, $isIn25View: boolean, $isIn50View: boolean }>`
  transition: opacity 0.5s ease-in-out;

  ${({ $isIn25View, $isIn50View, $isIn75View }) => {
    if($isIn75View) {
      return css`
        opacity: 1;
      `
    }
    if($isIn50View) {
      return css`
        opacity: 0.66;
      `
    }
    if($isIn25View) {
      return css`
        opacity: 0.33;
      `
    }
    return css`
      opacity: 0;
    `
  }}
  
  // *2 for vertical margin collapsing.
  margin-bottom: ${CHILD_PADDING * 2}px;

  ${media.tablet}{
    margin-bottom: ${CHILD_PADDING_MOBILE * 2}px;
  }
`

const StyledColumn = styled.div<{ $columnCount: number, $position: 'left' | 'right' | 'middle' }>`
  padding: 0 ${CHILD_PADDING}px;
  flex-basis: calc(100% / ${props => props.$columnCount});

  ${media.tablet}{
    padding: 0 ${CHILD_PADDING_MOBILE}px;
  }

  ${({ $position }) => {
    if($position === 'left') {
      return css`
        padding-left: 0;
      `
    }
    if($position === 'right') {
      return css`
        padding-right: 0;
      `
    }
  }}
`

const Column = ({
  elements,
  columnCount,
  position
}: {
  elements: {key: string, element: JSX.Element}[]
  columnCount: number
  position: 'left' | 'right' | 'middle'
}) => {
  return (
    <StyledColumn $columnCount={columnCount} $position={position}>
      {elements.map(element => (
        <Cell key={element.key} element={element.element} />
      ))}
    </StyledColumn>
  )
}

const COLUMN_WIDTH = 700

const MasonryGrid = ({elementsWithKeys}: {elementsWithKeys: {key: string, element: JSX.Element}[]}) => {
  const [totalColumns, setTotalColumns] = useState<number>(Math.max(1, Math.floor(window.innerWidth / COLUMN_WIDTH)))

  const handleResize = useCallback(() => {
    setTotalColumns(Math.max(1, Math.floor(window.innerWidth / COLUMN_WIDTH)))
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize])

  const elementsByColumn = useMemo(() => {
    // Grab elements one at a time.
    // Use element's width and height to calculate which column to put it in.

    const columnHeights = Array<number>(totalColumns).fill(0)
    // Ensure that each `[]` passed to `Array.from` is a new array. Reference issue with fill.
    const columns = Array.from({ length: totalColumns }, () => [] as {key: string, element: JSX.Element}[])

    elementsWithKeys
      .forEach(elementsWithKey => {
        // All photos will have a width of 1 unit.
        // Calculate height based on aspect ratio and we'll use that to determine
        // which column to put it in.
        
        // Note - These values make the algorithm work for now. They should be based on the actual element's hight.
        const width = 500
        const height = 500
        const unitHeight = height / width

        const columnforCurrentElement = columnHeights.indexOf(
          Math.min(...columnHeights)
        )
        // This algorithm does not account for the vertical spacing between photos.
        // So if a column has many landscape photos, there's lots of vertical
        // padding that this algorithm doesn't account for. This is a small factor of safety.

        const FACTOR_OF_SAFETY = height > width ? 0.9 : 1.1
        columnHeights[columnforCurrentElement] += unitHeight * FACTOR_OF_SAFETY
        columns[columnforCurrentElement].push(elementsWithKey)
      })

    return columns
  }, [elementsWithKeys, totalColumns])

  return (
      <Table>
        {elementsByColumn.map((elements, index) => (
          <Column  position={getColumnPosition(index, totalColumns)} columnCount={totalColumns} key={index} elements={elements} />
        ))}
      </Table>
  )
}

const getColumnPosition = (index: number, totalColumns: number) => {
  if(index === 0) {
    return 'left'
  }

  if(index === totalColumns - 1) {
    return 'right'
  }

  return 'middle'
}

const Table = styled.div`
  display: flex;
  flex-direction: row;
`

export default MasonryGrid