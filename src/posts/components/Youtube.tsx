import styled from "styled-components";

const YoutubeWrapper = styled.figure`
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    height: 0;
    margin: 1rem 0;

    iframe {
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        position: absolute;
    }
`

type YoutubeProps = {
    embedId: string
}

const Youtube = ({ embedId }: YoutubeProps) => (
    <YoutubeWrapper>
        <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
        />
    </YoutubeWrapper>
);
export default Youtube