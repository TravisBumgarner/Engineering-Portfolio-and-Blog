'use client'

import styled from 'styled-components'

import { MAX_CONTENT_WIDTH } from '@/lib/consts'
import { BACKGROUND_COLOR, FOREGROUND_COLOR, SPACING } from '@/lib/theme'

export const MetadataWrapper = styled.div`
  margin-bottom: ${SPACING.MEDIUM}px;
`

export const DescriptionWrapper = styled.div`
  margin: ${SPACING.XLARGE}px 0;
`

export const LinksWrapper = styled.ul`
  margin: ${SPACING.XLARGE}px 0;
`

export const Time = styled.time`
  display: block;
  font-size: 0.8rem;
  margin-top: ${SPACING.SMALL}px;
  margin-bottom: ${SPACING.MEDIUM}px;
`

export const DetailsWrapper = styled.div`
  max-width: ${MAX_CONTENT_WIDTH};
  margin: 0 auto;
`

export const SnapshotWrapper = styled.div`
box-sizing: border-box;
background-color: #636363;
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

> img {
  height: auto;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  max-height: 90vh;
  object-fit: cover;
  object-position: top;
}

> p {
  background-color: ${FOREGROUND_COLOR};
  color: ${BACKGROUND_COLOR};
  padding: ${SPACING.MEDIUM}px;
  margin: 0;
}
`
