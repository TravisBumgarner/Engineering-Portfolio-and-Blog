"use client"

import { Button, Wrapper } from '@/app/_error.client'
import { useCallback } from 'react'

const Error = () => {
  const handleRefresh = useCallback(() => {
    window.location.href = '/'
  }, [])

  return (
    <Wrapper>
      <h1>Whoops!</h1>
      <p>Sorry, there was an error, please refresh the page.</p>
      <Button onClick={handleRefresh}>Refresh</Button>
    </Wrapper>
  )
}

export default Error
