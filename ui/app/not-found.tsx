'use client'

import { useCallback, useEffect } from 'react'
import Button from '../lib/sharedComponents/Button'
import ContentStyler from '../lib/sharedComponents/ContentStyler'
import logger from '@/lib/utilities/logger'

const Error = () => {
  const handleRefresh = useCallback(() => {
    window.location.href = '/'
  }, [])

  useEffect(() => {
    logger.info('404 Not Found page viewed', { url: window.location.href })
  }, [])

  return (
    <ContentStyler>
      <h2>Whoops!</h2>
      <p>Sorry, the page you were looking for was not found.</p>
      <Button onClick={handleRefresh}>Return home</Button>
    </ContentStyler>
  )
}

export default Error
