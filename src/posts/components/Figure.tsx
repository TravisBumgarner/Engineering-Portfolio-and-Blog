import styled from "styled-components";

const FigureWrapper = styled.figure`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        max-width: 100%;
        width: max-content;
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