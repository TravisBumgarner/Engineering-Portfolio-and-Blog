"use client"

import { useCallback } from 'react'

const Error = () => {
  const handleRefresh = useCallback(() => {
    window.location.href = '/'
  }, [])

  return (
    <div id="not-found">
      <h2>Whoops!</h2>
      <p>Sorry, the page you were looking for was not found.</p>
      <button onClick={handleRefresh}>Return home</button>
    </div>
  )
}

export default Error
