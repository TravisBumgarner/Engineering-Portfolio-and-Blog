'use client'

import { SPACING } from '@/lib/styles/consts'

type VideoProps = {
  src: string
  caption: string
  aspectRatio: string
}

const Video = ({ src, aspectRatio }: VideoProps) => {
  return (
    <div
      className="video"
      style={{
        backgroundColor: 'var(--secondary-background)',
        padding: SPACING.MEDIUM.PX,
        width: '100%',
        aspectRatio: aspectRatio,
        overflow: 'hidden'
      }}
    >
      <video
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'none' // This line might cause issues in the future with aspect ratio. Check somehash.mdx and make sure that still works.
        }}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        controls
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  )
}

export default Video
