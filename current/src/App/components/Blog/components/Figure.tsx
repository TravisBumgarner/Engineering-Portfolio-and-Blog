import styled from "styled-components";

const FigureWrapper = styled.figure`

`

type FigureProps = {
    src: string,
    caption: string
}

const Figure = ({ src, caption }: FigureProps) => {
    return (
        <figure>
            <img src={src} alt={caption} />
            <p>{caption}</p>
        </figure>
    )
}

export default Figure