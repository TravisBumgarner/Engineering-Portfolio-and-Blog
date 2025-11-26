'use client'

import { Box, Button } from '@mui/material'
import Typography from '@mui/material/Typography'
import { useCallback } from 'react'

const ErrorPage = () => {
  const handleRefresh = useCallback(() => {
    window.location.href = '/'
  }, [])

  return (
    <Box>
      <Typography variant="h2">Whoops!</Typography>
      <Typography>Sorry, there was an error, please refresh the page.</Typography>
      <Button onClick={handleRefresh}>Refresh</Button>
    </Box>
  )
}

export default ErrorPage
