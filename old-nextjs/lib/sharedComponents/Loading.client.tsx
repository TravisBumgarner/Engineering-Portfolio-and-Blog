'use client'

import { Box } from '@mui/material'
import { motion } from 'motion/react'

// Loading container
export const LoadingContainer = () => (
  <Box
    component={motion.div}
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      padding: '10vh 0',
    }}
  />
)

export const FaviconLeft = () => (
  <Box
    sx={{
      width: '50%',
      height: '100%',
      backgroundColor: '#fff',
      boxSizing: 'border-box',
    }}
  />
)

export const FaviconRight = () => (
  <Box
    sx={{
      width: '50%',
      height: '100%',
      backgroundColor: 'var(--bright-background)',
      boxSizing: 'border-box',
    }}
  />
)

export const FaviconWrapper = () => (
  <Box
    component={motion.div}
    animate={{ transform: 'rotate(360deg)' }}
    transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
    sx={{
      width: 100,
      height: 100,
      fill: 'var(--primary)',
      border: '10px solid white',
      display: 'flex',
      flexDirection: 'row',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    }}
  >
    <FaviconLeft />
    <FaviconRight />
  </Box>
)
