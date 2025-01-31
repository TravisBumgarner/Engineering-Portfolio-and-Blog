'use client'

import styled from 'styled-components'

const Bar = styled.div`
  width: 100%;
  height: 5px;
  background-color: var(--foreground);
  box-sizing: border-box;
`

const Wrapper = styled.div`
  cursor: pointer;
  width: 25px;
  height: 25px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Hamburger = ({ onClick }: { onClick: () => void }) => {
  return (
    <Wrapper onClick={onClick}>
      <Bar />
      <Bar />
      <Bar />
    </Wrapper>
  )
}

export default Hamburger
