import React, { useMemo } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import { Title, Text } from 'SharedComponents'
import { SECONDARY_COLOR, PRIMARY_COLOR, TERTIARY_COLOR, media } from 'Theme'
import projects, { Project } from 'Content'

const SHARED_SIZE = "5px"
const StyledArticle = styled.article`
    width: calc(33% - ${SHARED_SIZE});
    box-sizing: border-box;
    border: 5px solid white;
    display: inline-block;
    position: relative;

    ${media.tablet} {
        width: calc(50% - ${SHARED_SIZE});
    }

    ${media.phone} {
        width: calc(100% - ${SHARED_SIZE});
    }
    
    img {
        line-height: 0;
    }
`


const GridWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    ${StyledArticle} {
        margin: ${SHARED_SIZE};
    }

    ${StyledArticle}:nth-child(3n) {
        margin-right: 0;
    }

    ${StyledArticle}:nth-child(3n + 1) {
        margin-left: 0;
    }
    ${StyledArticle}:nth-child(3n + 2) {
        margin-left: ${SHARED_SIZE};
        margin-right: ${SHARED_SIZE};
    }
`

const GridImage = styled.img`
    width: 100%;
`

const GridImageWrapper = styled.div`
    line-height: 0;
`

const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: ${PRIMARY_COLOR};
`

const HoverContent = styled.div`
    &:hover {
        opacity: 1;
    }
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    /* padding: 25px; */

    background-color: ${TERTIARY_COLOR};
    > * {
        color: ${SECONDARY_COLOR} !important;
    }
`

type TileProps = {
    project: Project
}

const Tile = ({ project: { id, preview_img, name, end_date, description } }: TileProps) => {
    return (
        <StyledArticle>
            <GridImageWrapper>
                <GridImage src={preview_img && __STATIC__ + preview_img.src} />
            </GridImageWrapper>
            <StyledLink to={`/project/${id}`}>
                <HoverContent>
                    <Title size="small"> {name}</Title>
                    <Text> {description}</Text>
                </HoverContent>
            </StyledLink>
        </StyledArticle>
    )
}

const Portfolio = () => {
    const tiles = useMemo(() => {
        return projects.map(project => {
            return <Tile key={project.id} project={project} />
        })
    }, [])

    return (
        <GridWrapper>{tiles}</GridWrapper>
    )
}

export default Portfolio
