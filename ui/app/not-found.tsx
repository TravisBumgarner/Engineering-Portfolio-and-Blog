"use client"

import { Button, Wrapper } from '@/app/_not-found.client'
import Header from '@/app/_sharedComponents/Header'
import Text from '@/app/_sharedComponents/Text'
import { useCallback } from 'react'

const Error = () => {
  const handleRefresh = useCallback(() => {
    window.location.href = '/'
  }, [])

  return (
    <Wrapper>
      <Header size="large">Whoops!</Header>
      <Text>Sorry, the page you were looking for was not found.</Text>
      <Button onClick={handleRefresh}>Return home</Button>
    </Wrapper>
  )
}

export default Error
