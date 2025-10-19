import { FaviconLeft, FaviconRight, FaviconWrapper, LoadingContainer } from './Loading.client'

const Favicon = () => {
  return (
    <FaviconWrapper
      animate={{ transform: 'rotate(360deg)' }}
      transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
      style={{ fill: 'var(--primary)', width: 100, height: 100 }}
    >
      <FaviconLeft />
      <FaviconRight />
    </FaviconWrapper>
  )
}

const Loading = () => {
  return (
    <LoadingContainer>
      <Favicon />
    </LoadingContainer>
  )
}

export default Loading
