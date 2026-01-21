import { Box, useMediaQuery, useTheme } from '@mui/material'
import { useEffect, useMemo, useRef, useState } from 'react'
import blurhashes from '../content/blurhashes/index.json'
import snapshots from '../content/snapshots/index.json'
import BlurHashImage from '../sharedComponents/BlurHashImage'
import PageWrapper from '../sharedComponents/PageWrapper'
import { SPACING } from '../styles/consts'

const ITEMS_PER_PAGE = 12

// Helper function to distribute images across columns to balance height
const distributeToColumns = (items: { src: string; aspectRatio: number }[], columnCount: number) => {
  const columns: (typeof items)[] = Array(columnCount)
    .fill(null)
    .map(() => [])
  const columnHeights = Array(columnCount).fill(0)

  items.forEach((item) => {
    // Find column with minimum height
    const shortestColumn = columnHeights.indexOf(Math.min(...columnHeights))
    columns[shortestColumn].push(item)
    // Add to height (inverse of aspect ratio since taller images have smaller aspect ratios)
    columnHeights[shortestColumn] += 1 / item.aspectRatio
  })

  return columns
}

const Snapshots = () => {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'))

  // Determine column count based on screen size
  const columnCount = isSmallScreen ? 1 : isMediumScreen ? 2 : 3

  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE)
  const loadMoreRef = useRef<HTMLDivElement>(null)
  const allSnapshots = Object.values(snapshots)
  const hasMore = visibleCount < allSnapshots.length

  // Prepare images with aspect ratios from blur hash data
  const imagesWithAspectRatios = useMemo(() => {
    return allSnapshots.map(({ src }) => {
      const blurHashData = blurhashes[src as keyof typeof blurhashes] as { width: number; height: number } | undefined
      const aspectRatio = blurHashData ? blurHashData.width / blurHashData.height : 1
      return { src, aspectRatio }
    })
  }, [allSnapshots])

  const visibleImages = imagesWithAspectRatios.slice(0, visibleCount)

  // Distribute images across columns for better balance
  const columns = useMemo(() => {
    return distributeToColumns(visibleImages, columnCount)
  }, [visibleImages, columnCount])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setVisibleCount((prev) => Math.min(prev + ITEMS_PER_PAGE, allSnapshots.length))
        }
      },
      { rootMargin: '200px' },
    )

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current)
    }

    return () => observer.disconnect()
  }, [hasMore, allSnapshots.length])

  return (
    <PageWrapper width="full">
      <Box
        sx={{
          display: 'flex',
          gap: SPACING.SMALL.PX,
          alignItems: 'flex-start',
        }}
      >
        {columns.map((column, columnIndex) => (
          <Box
            // biome-ignore lint/suspicious/noArrayIndexKey: This is fine.
            key={columnIndex}
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: SPACING.SMALL.PX,
            }}
          >
            {column.map(({ src }) => (
              <BlurHashImage key={src} useBorder={false} src={src} alt="Snapshot" />
            ))}
          </Box>
        ))}
      </Box>
      {hasMore && <Box ref={loadMoreRef} sx={{ height: 1 }} />}
    </PageWrapper>
  )
}

export default Snapshots
