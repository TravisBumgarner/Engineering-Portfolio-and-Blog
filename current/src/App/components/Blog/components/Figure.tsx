import styled from "styled-components";

const FigureWrapper = styled.figure`
    img {
        width: 100%;
    }

    figcaption {
        text-align: center;
    }
`

type FigureProps = {
    src: string,
    caption: string
}

const Figure = ({ src, caption }: FigureProps) => {
    return (
        <FigureWrapper>
            <img src={__STATIC__ + 'posts' + src} alt={caption} />
            <figcaption>{caption}</figcaption>
        </FigureWrapper>
    )
}

export default Figure