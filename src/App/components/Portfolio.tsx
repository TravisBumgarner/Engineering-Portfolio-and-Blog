import { useMemo } from 'react'
import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'

import { Title, Text, Snapshot } from 'SharedComponents'
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
                <Link key={id} to={`/project/${id}`}>
                    <Snapshot src={preview_img && __STATIC__ + 'projects/' + preview_img.src} key={id}>
                        <>
                            <Title size="medium">{name}</Title>
                            <Text>{description} <ReadNow>Read Now</ReadNow></Text>
                        </>
                    </Snapshot>
                </Link>
            )
        })
    }, [])

    return (
        <PortfolioWrapper>{tiles}</PortfolioWrapper>
    )
}

export default Portfolio
