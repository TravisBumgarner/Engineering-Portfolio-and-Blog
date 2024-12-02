import { useMemo } from 'react'

import { Snapshot } from 'SharedComponents'

const TOTAL_PHOTOS = 74

const Snapshots = () => {
  const photos = useMemo(() => {
    const output = []
    for (let i = 1; i <= TOTAL_PHOTOS; i++)
      output.push(
        <Snapshot key={i} src={`${__STATIC__}/snapshots/snapshot-${i}.jpg`} />
      )
    return output.reverse()
  }, [])

  return <div>{photos}</div>
}

export default Snapshots
