import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import { allCategories, Project } from 'Content'
import { Title, Text } from 'SharedComponents'
import { SECONDARY_COLOR, PRIMARY_COLOR, TERTIARY_COLOR, media } from 'Theme'

const TitleWrapper = styled.div`
    margin-left: 5px;
    margin-bottom: 20px;
    margin-top: 60px;
`

const GridWrapper = styled.div`
    position: relative;
`

const GridImage = styled.img`
    width: 100%;
`

const GridTextWrapper = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    display: flex;
    align-items: flex-end;
    height: 100%;

    &:hover {
        display: none;
    }
`

const GridText = styled.p`
    width: 100%;
    background: ${TERTIARY_COLOR};
    text-align: center;
    padding: 10px 5px;
    line-height: initial;
    font-size: 1em;

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

const Tile = ({ project: { id, preview_img, name, categories, start_date, end_date } }: TileProps) => {
    const CategoryList = categories.sort((a, b) => allCategories[a].name > allCategories[b].name ? 1 : -1).map(id => (
        <li key={id}>{allCategories[id].name}</li>
    ))
    return (
        <StyledArticle>
            <GridImageWrapper>
                <GridImage src={preview_img && __MEDIA__ + preview_img.src} />
                {/* <GridTextWrapper><GridText>{name}</GridText></GridTextWrapper> */}
            </GridImageWrapper>
            <StyledLink to={`/project/${id}`}>
                <HoverContent>
                    <Title size="small"> {name}</Title>
                    <Text> {`${start_date.slice(0, -3)} to ${end_date === 'Ongoing' ? 'Ongoing' : end_date.slice(0, -3)
                        }`}
                    </Text>
                    <ul>{CategoryList}</ul>
                </HoverContent>
            </StyledLink>
        </StyledArticle>
    )
}

type PortfolioProps = {
    highlightedProjects: Project[],
    filteredProjects: Project[],
    setActiveCategory: (id: number) => void
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
    const [isMoreShown, setIsMoreShown] = React.useState(false)

    return <SectionWrapper>
        These are artifacts of my experiences learning, creating, and exploring.
    </SectionWrapper >
}

const FilterButtonsWrapper = styled.div`
    margin-left: 5px;
    margin-bottom: 20px;
`

const FilterButton = styled(({ className, onClick, children }) => {
    return <button onClick={onClick} className={className}>{children}</button>
})`
    cursor: pointer;
    color: ${SECONDARY_COLOR};
    font-weight: 700;
    background-color: transparent;
    padding: 0px 5px;
    border-radius: 5px;
    font-size: 1.2em;
    margin-left: 10px;
    margin-bottom: 10px;
    &:hover {
        background-color: ${TERTIARY_COLOR};
    }
    ${media.tablet} {
        font-size: 1em;
        margin-bottom: 0.5em;
    }

    ${media.phone} {

    }
`

const CATEGORIES_TO_FILTER_BY = [
    6,
    5,
    2,
    10
]

const Portfolio = ({ highlightedProjects, filteredProjects, setActiveCategory }: PortfolioProps) => {
    // const ActiveProjects = createTiles(Object.values(projects).filter(({ end_date }) => end_date === "Ongoing"))
    // const InactiveProjects = createTiles(Object.values(projects).filter(({ end_date }) => end_date !== "Ongoing"))

    const FilterButtons = CATEGORIES_TO_FILTER_BY
        .map(id => {
            return <FilterButton onClick={() => setActiveCategory(id)}>{allCategories[id].name}</FilterButton>
        })

    return (
        <>
            <About />
            <TitleWrapper><Title size="medium">Highlighted Projects</Title></TitleWrapper>
            <GridWrapper>{createTiles(highlightedProjects)}</GridWrapper>
            <TitleWrapper><Title size="medium">All Projects</Title></TitleWrapper>
            <FilterButtonsWrapper><strong>Filter:</strong> <FilterButton onClick={() => setActiveCategory(0)}>See All</FilterButton>{FilterButtons}</FilterButtonsWrapper>
            {/* <TitleWrapper><Title size="medium">All Projects</Title></TitleWrapper> */}
            <GridWrapper>{createTiles(filteredProjects)}</GridWrapper>
        </>
    )
}

export default Portfolio
