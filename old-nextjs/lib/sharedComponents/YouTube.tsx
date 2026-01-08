import { YoutubeWrapper } from './YouTube.client'

type YoutubeProps = {
  embedId: string
}

const Youtube = ({ embedId }: YoutubeProps) => (
  <YoutubeWrapper>
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      frameBorder={0}
    />
  </YoutubeWrapper>
)
export default Youtube
