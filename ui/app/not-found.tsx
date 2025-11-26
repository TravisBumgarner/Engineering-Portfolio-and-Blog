'use client'

import { useCallback, useEffect } from 'react'
import { Button } from '@mui/material'
import Typography from '@mui/material/Typography'
import logger from '@/lib/utilities/logger'
import { Box } from '@mui/material'

const Error = () => {
  const handleRefresh = useCallback(() => {
    window.location.href = '/'
  }, [])

  useEffect(() => {
    logger.info('404 Not Found page viewed', { url: window.location.href })
  }, [])

  return (
    <Box>
      <Typography variant="h2">Whoops!</Typography>
      <Typography>Sorry, the page you were looking for was not found.</Typography>
      <Button onClick={handleRefresh}>Return home</Button>
    </Box>
  )
}

export default Error
