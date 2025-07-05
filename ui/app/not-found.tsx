'use client'

import { useCallback } from 'react'
import Button from './_sharedComponents/Button'
import ContentStyler from './_sharedComponents/ContentStyler'

const Error = () => {
  const handleRefresh = useCallback(() => {
    window.location.href = '/'
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
