import { Box, IconButton, Modal, useMediaQuery, useTheme } from '@mui/material'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { GrFormClose, GrFormNext, GrFormPrevious } from 'react-icons/gr'
import blurhashes from '../content/blurhashes/index.json'
import snapshots from '../content/snapshots/index.json'
import BlurHashImage from '../sharedComponents/BlurHashImage'
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
  // const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'))

  // Determine column count based on screen size
  const columnCount = 2

  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
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
  }, [visibleImages])

  // Lightbox navigation functions
  const openLightbox = useCallback(
    (src: string) => {
      const index = allSnapshots.findIndex((snapshot) => snapshot.src === src)
      setLightboxIndex(index)
    },
    [allSnapshots],
  )

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null)
  }, [])

  const goToPrevious = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? allSnapshots.length - 1 : prev! - 1))
    }
  }, [lightboxIndex, allSnapshots.length])

  const goToNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === allSnapshots.length - 1 ? 0 : prev! + 1))
    }
  }, [lightboxIndex, allSnapshots.length])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (lightboxIndex === null) return

      switch (event.key) {
        case 'Escape':
          closeLightbox()
          break
        case 'ArrowLeft':
          goToPrevious()
          break
        case 'ArrowRight':
          goToNext()
          break
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [lightboxIndex, closeLightbox, goToPrevious, goToNext])

  // Prefetch adjacent images when lightbox index changes
  useEffect(() => {
    if (lightboxIndex === null) return

    const prefetchImage = (src: string) => {
      const img = new Image()
      img.src = src
    }

    // Prefetch previous image
    const prevIndex = lightboxIndex === 0 ? allSnapshots.length - 1 : lightboxIndex - 1
    prefetchImage(allSnapshots[prevIndex].src)

    // Prefetch next image
    const nextIndex = lightboxIndex === allSnapshots.length - 1 ? 0 : lightboxIndex + 1
    prefetchImage(allSnapshots[nextIndex].src)
  }, [lightboxIndex, allSnapshots])

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
    <>
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
              <Box
                key={src}
                onClick={() => openLightbox(src)}
                sx={{
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease',
                  '&:hover': {
                    transform: 'scale(1.02)',
                  },
                }}
              >
                <BlurHashImage useBorder={false} src={src} alt="Snapshot" />
              </Box>
            ))}
          </Box>
        ))}
      </Box>
      {hasMore && <Box ref={loadMoreRef} sx={{ height: 1 }} />}

      {/* Lightbox Modal */}
      <Modal
        open={lightboxIndex !== null}
        onClose={closeLightbox}
        disableAutoFocus
        disableEnforceFocus
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            maxWidth: '95vw',
            maxHeight: '95vh',
            height: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            outline: 'none', // Remove focus outline
            '&:focus': {
              outline: 'none', // Ensure no focus outline even when explicitly focused
            },
          }}
        >
          {lightboxIndex !== null && (
            <>
              {/* Desktop: positioned buttons */}
              {!isSmallScreen && (
                <>
                  {/* Close Button */}
                  <IconButton
                    size="large"
                    onClick={closeLightbox}
                    sx={{
                      position: 'fixed',
                      top: SPACING.SMALL.PX,
                      right: SPACING.SMALL.PX,
                      color: 'white',
                      bgcolor: 'rgba(0, 0, 0, 0.4)',
                      zIndex: 2,
                      '&:hover': {
                        bgcolor: 'rgba(0, 0, 0, 0.6)',
                      },
                    }}
                  >
                    <GrFormClose />
                  </IconButton>

                  {/* Previous Button */}
                  <IconButton
                    onClick={goToPrevious}
                    size="large"
                    sx={{
                      position: 'fixed',
                      left: SPACING.SMALL.PX,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: 'white',
                      bgcolor: 'rgba(0, 0, 0, 0.4)',
                      zIndex: 2,
                      '&:hover': {
                        bgcolor: 'rgba(0, 0, 0, 0.6)',
                      },
                    }}
                  >
                    <GrFormPrevious />
                  </IconButton>

                  {/* Next Button */}
                  <IconButton
                    onClick={goToNext}
                    size="large"
                    sx={{
                      position: 'fixed',
                      right: SPACING.SMALL.PX,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: 'white',
                      bgcolor: 'rgba(0, 0, 0, 0.4)',
                      zIndex: 2,
                      '&:hover': {
                        bgcolor: 'rgba(0, 0, 0, 0.6)',
                      },
                    }}
                  >
                    <GrFormNext />
                  </IconButton>
                </>
              )}

              <Box>
                <BlurHashImage src={allSnapshots[lightboxIndex].src} alt="Snapshot" />
              </Box>

              {/* Mobile: bottom centered buttons */}
              {isSmallScreen && (
                <Box
                  sx={{
                    position: 'fixed',
                    bottom: SPACING.SMALL.PX,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: SPACING.SMALL.PX,
                    zIndex: 2,
                  }}
                >
                  <IconButton
                    onClick={goToPrevious}
                    size="large"
                    sx={{
                      color: 'white',
                      bgcolor: 'rgba(0, 0, 0, 0.4)',
                      '&:hover': {
                        bgcolor: 'rgba(0, 0, 0, 0.6)',
                      },
                    }}
                  >
                    <GrFormPrevious />
                  </IconButton>

                  <IconButton
                    size="large"
                    onClick={closeLightbox}
                    sx={{
                      color: 'white',
                      bgcolor: 'rgba(0, 0, 0, 0.4)',
                      '&:hover': {
                        bgcolor: 'rgba(0, 0, 0, 0.6)',
                      },
                    }}
                  >
                    <GrFormClose />
                  </IconButton>

                  <IconButton
                    onClick={goToNext}
                    size="large"
                    sx={{
                      color: 'white',
                      bgcolor: 'rgba(0, 0, 0, 0.4)',
                      '&:hover': {
                        bgcolor: 'rgba(0, 0, 0, 0.6)',
                      },
                    }}
                  >
                    <GrFormNext />
                  </IconButton>
                </Box>
              )}
            </>
          )}
        </Box>
      </Modal>
    </>
  )
}

export default Snapshots
