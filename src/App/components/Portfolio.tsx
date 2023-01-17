import { useMemo } from 'react'
import styled from 'styled-components'

import { Title, Text, Snapshot, InternalLink } from 'SharedComponents'
import projects from 'Projects'

const PortfolioWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    > * {
        width: 48%;
    }
`

const ReadNow = styled.strong`
  &:hover {
    background-color: #3e8eff;
    color: white;
    border-color: #3e8eff;
  }
`

const Portfolio = () => {
    const tiles = useMemo(() => {
        return projects.map(({ id, name, description, preview_img }) => {
            return (

                <Snapshot src={preview_img && __STATIC__ + 'projects/' + preview_img.src} key={id}>
                    <>
                        <Title size="medium">{name}</Title>
                        <Text>{description} <InternalLink key={id} to={`/project/${id}`}><ReadNow>Read Now</ReadNow></InternalLink></Text>
                    </>
                </Snapshot>

            )
        })
    }, [])

    return (
        <PortfolioWrapper>{tiles}</PortfolioWrapper>
    )
}

export default Portfolio
