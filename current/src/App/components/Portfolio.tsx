import { useMemo } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import { Title, Text } from 'SharedComponents'
import { SECONDARY_COLOR, PRIMARY_COLOR, TERTIARY_COLOR, media } from 'Theme'
import projects, { Project } from 'Content'

const SHARED_MARGIN = '1rem'

const StyledArticle = styled.article`
    box-sizing: border-box;
    display: block;
    position: relative;
    break-inside: avoid;
    margin-bottom: ${SHARED_MARGIN};

    img {
        line-height: 0;
    }
`

const Image = styled.img`
    width: 100%;
`

const ImageWrapper = styled.div`
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

    background-color: ${TERTIARY_COLOR};
    > * {
        color: ${SECONDARY_COLOR} !important;
    }
`

type TileProps = {
    project: Project
}

const GridWrapper = styled.div`
    column-gap: ${SHARED_MARGIN};
    column-count: 3;

    ${media.tablet}{
        column-count: 2;
    }
`

const Tile = ({ project: { id, preview_img, name, end_date, description } }: TileProps) => {
    return (
        <StyledArticle>
            <ImageWrapper>
                <Image src={preview_img && __STATIC__ + preview_img.src} />
            </ImageWrapper>
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
