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

const Portfolio = () => {
    const tiles = useMemo(() => {
        return projects
            .sort((a, b) => a.title > b.title ? -1 : 1)
            .map(({ id, title, previewImage }) => {
                return (
                    <Snapshot src={previewImage && `${__STATIC__}/projects/${id}/${previewImage.src}`} key={id}>
                        <Title size="medium"><InternalLink to={`/project/${id}`}>{title}</InternalLink></Title>
                    </Snapshot>

                )
            })
    }, [])

    return (
        <PortfolioWrapper>{tiles}</PortfolioWrapper>
    )
}

export default Portfolio
