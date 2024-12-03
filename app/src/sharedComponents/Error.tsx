import React from 'react'
import styled from 'styled-components'

import Header from 'SharedComponents/Header'
import Text from 'SharedComponents/Text'

const ErrorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
`

const Error = () => {
  return (
    <ErrorWrapper>
      <Header size="medium">Whoops!</Header>
      <Text>Sorry, there was an error, please try again later.</Text>
    </ErrorWrapper>
  )
}

export default Error
