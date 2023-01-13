import styled, { css } from 'styled-components'
import { useMemo, useState, useCallback, useEffect } from 'react'

import { Snapshot } from "SharedComponents"

const SnapshotsWrapper = styled.div`
  column-count: 2;
  column-gap: 1rem;
  width: 80vw;
  margin-left:20vw;
`

const shuffledArray = (array: any[]) => array.sort((a, b) => 0.5 - Math.random());

const TOTAL_PHOTOS = 4

const Snapshots = () => {
  const photos = useMemo(() => {
    const output = []
    for (let i = 1; i <= TOTAL_PHOTOS; i++) output.push(<Snapshot key={i} label={""} src={`/public/prototypes/wall-${i}.jpg`} />)
    return shuffledArray(output)
  }, [])

  return (
    <>
      <SnapshotsWrapper>
        {photos}
      </SnapshotsWrapper>
    </>
  )
}

export default Snapshots
