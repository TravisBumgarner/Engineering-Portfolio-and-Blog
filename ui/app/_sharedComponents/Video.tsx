'use client'

import { SPACING } from '@/lib/theme'

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
          color: 'var(--foreground)',
          padding: SPACING.MEDIUM,
          width: '100%',
          aspectRatio: aspectRatio,
          overflow: 'hidden', // Prevents any extra space
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <video
          style={{
            width: '100%',
            height: '100%',
            minWidth: '100%', 
            minHeight: '100%', 
            objectFit: 'cover', 
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
