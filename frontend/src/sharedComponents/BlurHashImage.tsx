import { useTheme } from '@mui/material'
import blurhashes from '../content/blurhashes/index.json'
import { PALETTE } from '../styles/consts'
import type { BlurHash } from '../types'

const getBlurHash = (src: string) => {
    const result = blurhashes[src as keyof typeof blurhashes] as BlurHash

    if (!result) {
        // Shame me for this code!
        // biome-ignore lint/suspicious/noConsole: Fine for now.
        console.error('missing blurhash', src)
        return {
            blurHash: '',
            width: 0,
            height: 0,
        }
    }

    return result
}

const BlurHashImage = ({
    src,
    priority,
    alt,
    maxHeight,
}: {
    src: string
    priority: boolean
    alt?: string
    maxHeight?: number
}) => {
    const { width, height, blurHash } = getBlurHash(src)
    const theme = useTheme()

    return (
        <img
            src={src}
            alt={alt || ''}
            width={width}
            height={height}
            sizes="(max-width: 750px) 100vw, 100vw"
            style={{
                // Background for transparent images.
                backgroundColor: 'white',
                border: `4px solid ${theme.palette.mode === 'light' ? PALETTE.grayscale[700] : PALETTE.grayscale[200]}`,
                maxHeight: maxHeight ? `${maxHeight}vh` : '90vh',
                objectFit: 'cover',
                objectPosition: 'top',
                display: 'block',
                width: '100%',
                height: 'auto',
            }}
        />
    )
}

export default BlurHashImage
