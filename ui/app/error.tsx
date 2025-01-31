"use client"

import { useCallback } from 'react'

const Error = () => {
  const handleRefresh = useCallback(() => {
    window.location.href = '/'
  }, [])

  return (
    <div id="error">
      <h2>Whoops!</h2>
      <p>Sorry, there was an error, please refresh the page.</p>
      <button onClick={handleRefresh}>Refresh</button>
    </div>
  )
}

export default Error
