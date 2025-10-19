'use client'

import { useCallback } from 'react'
import Button from '../lib/sharedComponents/Button'
import ContentStyler from '../lib/sharedComponents/ContentStyler'

const Error = () => {
  const handleRefresh = useCallback(() => {
    window.location.href = '/'
  }, [])

  return (
    <ContentStyler>
      <h2>Whoops!</h2>
      <p>Sorry, there was an error, please refresh the page.</p>
      <Button onClick={handleRefresh}>Refresh</Button>
    </ContentStyler>
  )
}

export default Error
