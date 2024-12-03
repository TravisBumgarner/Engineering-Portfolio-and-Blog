import React from 'react'
import styled from 'styled-components'

const InstagramWrapper = styled.div`
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;

  iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
`

type InstagramProps = {
  embedId: string
}

const Instagram = ({ embedId }: InstagramProps) => (
  <InstagramWrapper>
    <iframe
      src={`https://www.instagram.com/p/${embedId}/embed/captioned`}
      scrolling="no"
    />
  </InstagramWrapper>
)
export default Instagram
