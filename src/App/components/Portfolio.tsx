import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import { Project } from 'Content'
import { Title, Text } from 'SharedComponents'
import { SECONDARY_COLOR, PRIMARY_COLOR, TERTIARY_COLOR, media } from 'Theme'

const GridWrapper = styled.div`
    position: relative;
`

const GridImage = styled.img`
    width: 100%;
`

const GridImageWrapper = styled.div`
    line-height: 0;
`

const StyledArticle = styled.article`
    width: calc(33% - 10px);
    box-sizing: border-box;
    margin: 5px;
    border: 5px solid white;
    display: inline-block;
    position: relative;

    ${media.tablet} {
        width: calc(50% - 10px);
    }

    ${media.phone} {
        width: calc(100% - 10px);
    }
    
    img {
        line-height: 0;
    }
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
    padding: 25px;

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

type PortfolioProps = {
    projects: Project[],
}

const createTiles = (projects: Project[]) => {
    return projects.map(project => {
        return <Tile key={project.id} project={project} />
    })
}

const SectionWrapper = styled.div`
    margin-left: 5px;
    margin-bottom: 20px;
    margin-top: 20px;
`

const About = () => {
    return <SectionWrapper>
        These are artifacts of my experiences learning, creating, and exploring.
    </SectionWrapper >
}

const Portfolio = ({ projects }: PortfolioProps) => {
    return (
        <>
            <About />
            <GridWrapper>{createTiles(projects)}</GridWrapper>
        </>
    )
}

export default Portfolio
