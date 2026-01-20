import { Box } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import snapshots from '../content/snapshots/index.json'
import BlurHashImage from '../sharedComponents/BlurHashImage'
import PageWrapper from '../sharedComponents/PageWrapper'
import { SPACING } from '../styles/consts'

const ITEMS_PER_PAGE = 12

const Snapshots = () => {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE)
  const loadMoreRef = useRef<HTMLDivElement>(null)
  const allSnapshots = Object.values(snapshots)
  const visibleSnapshots = allSnapshots.slice(0, visibleCount)
  const hasMore = visibleCount < allSnapshots.length

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
          columnCount: { xs: 1, sm: 2, md: 3 },
          columnGap: SPACING.SMALL.PX,
        }}
      >
        {visibleSnapshots.map(({ src }) => (
          <Box
            key={src}
            sx={{
              breakInside: 'avoid',
              mb: SPACING.SMALL.PX,
            }}
          >
            <BlurHashImage useBorder={false} src={src} alt="Snapshot" />
          </Box>
        ))}
      </Box>
      {hasMore && <Box ref={loadMoreRef} sx={{ height: 1 }} />}
    </PageWrapper>
  )
}

export default Snapshots
