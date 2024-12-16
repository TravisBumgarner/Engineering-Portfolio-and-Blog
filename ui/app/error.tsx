"use client"

import { Button, Wrapper } from '@/app/_error.client'
import Header from '@/app/_sharedComponents/Header'
import Text from '@/app/_sharedComponents/Text'

const Error = () => {
  return (
    <Wrapper>
      <Header size="large">Whoops!</Header>
      <Text>Sorry, there was an error, please refresh the page.</Text>
      <Button onClick={() => (window.location.href = '/')}>Refresh</Button>
    </Wrapper>
  )
}

export default Error
