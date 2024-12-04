import React from 'react'

import Header from 'SharedComponents/Header'
import Text from 'SharedComponents/Text'
import styled from 'styled-components'
import { BACKGROUND_COLOR, FOREGROUND_COLOR } from 'Theme'

const Wrapper = styled.div`
  background-color: ${BACKGROUND_COLOR};
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  justify-content: center;
  color: ${FOREGROUND_COLOR};
`

const Button = styled.button`
  background-color: ${BACKGROUND_COLOR};
  color: ${FOREGROUND_COLOR};
  border: 1px solid ${FOREGROUND_COLOR};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
`

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
