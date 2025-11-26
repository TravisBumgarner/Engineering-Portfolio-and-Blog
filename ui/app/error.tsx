'use client'

import { useCallback } from 'react'
import Button from '../lib/sharedComponents/Button'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'

const Error = () => {
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

export default Error
