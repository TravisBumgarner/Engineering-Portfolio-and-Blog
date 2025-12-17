// import { useTheme } from '@mui/material'
import blurhashes from '../content/blurhashes/index.json'
// import { PALETTE } from '../styles/consts'
// import type { BlurHash } from '../types'

// const getBlurHash = (src: string) => {
//     const result = blurhashes[src as keyof typeof blurhashes] as BlurHash

//     if (!result) {
//         // Shame me for this code!
//         // biome-ignore lint/suspicious/noConsole: Fine for now.
//         console.error('missing blurhash', src)
//         return {
//             blurHash: '',
//             width: 0,
//             height: 0,
//         }
//     }

//     return result
// }

// const BlurHashImage = ({
//     src,
//     // priority,
//     alt,
//     maxHeight,
// }: {
//     src: string
//     priority: boolean
//     alt?: string
//     maxHeight?: number
// }) => {
//     const { width, height,
//         blurHash
//     } = getBlurHash(src)
//     const theme = useTheme()

//     return (
//         <img
//             src={src}
//             alt={alt || ''}
//             width={width}
//             height={height}
//             sizes="(max-width: 750px) 100vw, 100vw"
//             style={{
//                 // Background for transparent images.
//                 backgroundColor: 'white',
//                 border: `4px solid ${theme.palette.mode === 'light' ? PALETTE.grayscale[700] : PALETTE.grayscale[200]}`,
//                 maxHeight: maxHeight ? `${maxHeight}vh` : '90vh',
//                 objectFit: 'cover',
//                 objectPosition: 'top',
//                 display: 'block',
//                 width: '100%',
//                 height: 'auto',
//             }}
//         />
//     )
// }

// export default BlurHashImage


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



import Box from '@mui/material/Box'
import { useInView } from 'framer-motion'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { blurHashToDataURL } from '../utilities/blurhashDataURL'
import { useTheme } from '@mui/material'
import { PALETTE } from '../styles/consts'
import type { BlurHash } from '../types'

interface Props {
    src: string
    useSquareImage?: boolean
    alt?: string
    loadingStartCallback?: () => void
    loadingEndCallback?: (src: string) => void
    maxDimensions?: { maxWidth?: string; maxHeight?: string } // Fuck fuck fuck.
    maxHeight?: number
}

const BlurImage = ({
    src,
    alt,
    loadingStartCallback,
    loadingEndCallback,
    maxDimensions,
    maxHeight,
}: Props) => {
    const imgRef = useRef<HTMLImageElement>(null)
    const theme = useTheme()
    const {
        width, height,
        blurHash } = getBlurHash(src)
    const startLoadingImage = useInView(imgRef, {
        margin: '0px 0px 100px 0px',
        once: true,
    })
    const aspectRatio = width / height // this might be inncorrect.

    const [imgLoaded, setImgLoaded] = useState(false)

    const blurDataURL = useMemo(() => blurHashToDataURL(blurHash), [blurHash])

    const handleOnLoad = useCallback(() => {
        setImgLoaded(true)
        loadingEndCallback?.(src)
    }, [loadingEndCallback, src])

    useEffect(() => {
        if (startLoadingImage) {
            loadingStartCallback?.()
        }
    }, [startLoadingImage, loadingStartCallback])

    // Safari be like. I have no idea.
    // >=1 is landscape
    // <1 is portrait
    const cssProp = aspectRatio >= 1 ? { width: '100%' } : { height: '100%' }

    return (
        <Box
            sx={{
                position: 'relative',
                ...cssProp,
                aspectRatio: `${aspectRatio}`,
                backgroundImage:
                    blurDataURL && !imgLoaded ? `url(${blurDataURL})` : undefined,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                overflow: 'hidden',
                ...maxDimensions,
                // These next 3 lines might belong below.
                backgroundColor: 'white',
                border: `4px solid ${theme.palette.mode === 'light' ? PALETTE.grayscale[700] : PALETTE.grayscale[200]}`,
                maxHeight: maxHeight ? `${maxHeight}vh` : '90vh',
            }}
        >
            <Box
                component="img"
                ref={imgRef}
                src={startLoadingImage || imgLoaded ? src : undefined}
                loading={startLoadingImage ? 'eager' : 'lazy'}
                rel={startLoadingImage ? 'preload' : ''}
                alt={alt}
                sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    display: 'block',
                    transition: 'all 0.3s ease',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                }}
                onLoad={handleOnLoad}
            />
        </Box>
    )
}

export default BlurImage