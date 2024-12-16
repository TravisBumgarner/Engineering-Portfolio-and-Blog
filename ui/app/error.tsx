"use client"

import { Button, Wrapper } from '@/app/_error.client'
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
      <Text>Sorry, there was an error, please refresh the page.</Text>
    </Wrapper>
  )
}

export default Error
