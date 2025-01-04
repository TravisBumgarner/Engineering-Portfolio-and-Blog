"use client"

import { Button, Wrapper } from '@/app/_not-found.client'
import { useCallback } from 'react'

const Error = () => {
  const handleRefresh = useCallback(() => {
    window.location.href = '/'
  }, [])

  return (
    <Wrapper>
      <h1>Whoops!</h1>
      <p>Sorry, the page you were looking for was not found.</p>
      <Button onClick={handleRefresh}>Return home</Button>
    </Wrapper>
  )
}

export default Error
