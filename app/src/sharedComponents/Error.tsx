import React from 'react'

import Header from 'SharedComponents/Header'
import Text from 'SharedComponents/Text'
import styled from 'styled-components'
import { BACKGROUND_COLOR, CSSHover, FOREGROUND_COLOR } from 'Theme'

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
  padding: 0.5rem 1rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: underline;
  ${CSSHover}
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
