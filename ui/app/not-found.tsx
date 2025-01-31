"use client"

import { Wrapper } from '@/app/_not-found.client'
import { useCallback } from 'react'

const Error = () => {
  const handleRefresh = useCallback(() => {
    window.location.href = '/'
  }, [])

  return (
    <Wrapper>
      <h2>Whoops!</h2>
      <p>Sorry, the page you were looking for was not found.</p>
      <button onClick={handleRefresh}>Return home</button>
    </Wrapper>
  )
}

export default Error
