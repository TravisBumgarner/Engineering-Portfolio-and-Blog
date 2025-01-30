'use client'

import snapshots from '@/content/snapshots/index.json'
import styled from 'styled-components'
import ListItem from './_sharedComponents/ListItem'

const Snapshots = () => {
  return (
    <Wrapper>
      {Object.values(snapshots).map(({ src }, index) => (
        <ListItem key={index} src={src} priority={index === 0} />
      ))}
    </Wrapper>
  )
}


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export default Snapshots
