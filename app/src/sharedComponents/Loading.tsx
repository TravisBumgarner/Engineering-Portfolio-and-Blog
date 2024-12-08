import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import { PRIMARY_COLOR } from 'Theme'

const LoadingContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
`

const Favicon = () => {
  return (
    <FaviconWrapper
      animate={{ transform: 'rotate(360deg)' }}
      transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
      style={{ fill: PRIMARY_COLOR, width: 100, height: 100 }}
    >
      <FaviconLeft />
      <FaviconRight />
    </FaviconWrapper>
  )
}

const FaviconLeft = styled.div`
  width: 50%;
  height: 100%;
  background-color: #fff;
  box-sizing: border-box;
`

const FaviconRight = styled.div`
  width: 50%;
  height: 100%;
  background-color: ${PRIMARY_COLOR};
  box-sizing: border-box;
`

const FaviconWrapper = styled(motion.div)`
  width: 100px;
  height: 100px;
  fill: ${PRIMARY_COLOR};
  border: 12px solid #fff;
  display: flex;
  flex-direction: row;
  border: 10px solid white;
`

const Loading = () => {
  return (
    <LoadingContainer>
      <Favicon />
    </LoadingContainer>
  )
}

export default Loading
