"use client"

import { Wrapper } from '@/app/_error.client'
import { useCallback } from 'react'

const Error = () => {
  const handleRefresh = useCallback(() => {
    window.location.href = '/'
  }, [])

  return (
    <Wrapper>
      <h2>Whoops!</h2>
      <p>Sorry, there was an error, please refresh the page.</p>
      <button onClick={handleRefresh}>Refresh</button>
    </Wrapper>
  )
}

export default Error
