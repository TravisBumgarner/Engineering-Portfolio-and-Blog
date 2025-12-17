import { Box, Typography } from '@mui/material'
import Link from './Link'
import { FONT_SIZES, SPACING } from '../styles/consts'
import BlurHashImage from './BlurHashImage'

type ItemType = 'post' | 'creation' | 'snapshot' | 'marketing'

const dateLabelLookup = {
    post: 'Posted ',
    creation: 'Last Updated ',
    snapshot: '',
    marketing: '',
}

const formatDateByType = (date: string, type: ItemType) => {
    if (type === 'post') {
        return new Date(`${date}T00:00:00Z`).toUTCString().split(' ').slice(0, 4).join(' ')
    } else if (type === 'creation') {
        return new Date(`${date}T00:00:00Z`).toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            timeZone: 'UTC',
        })
    } else {
        return null
    }
}

const ItemPreview = ({
    src,
    link,
    title,
    description,
    date,
    priority,
    type,
}: {
    src: string
    link?: string
    title?: string
    description?: string
    date?: string
    priority: boolean
    type: ItemType
}) => {
    const paragraphs = !description
        ? null
        : description.split('\n').map((paragraph) => <Typography sx={{ margin: 0 }} key={paragraph}>{paragraph}</Typography>)

    return (
        <Box
            sx={{
                padding: SPACING.MEDIUM.PX,
                display: 'flex',
                backgroundColor: 'background.paper',
                flexDirection: 'column',
                marginBottom: SPACING.LARGE.PX,
                gap: SPACING.SMALL.PX,
            }}
        >
            {!!title && (
                <Typography variant="h2" sx={{ margin: 0 }}>
                    {title}
                </Typography>
            )}
            {!!date && (
                <time
                    style={{
                        display: 'block',
                        fontSize: FONT_SIZES.SMALL.PX,
                    }}
                >
                    {dateLabelLookup[type]}
                    {formatDateByType(date, type)}
                </time>
            )}
            {paragraphs}
            <BlurHashImage maxHeight={70} priority={priority} src={src} />
            {link && (
                <Link type="block" href={link}>
                    Learn more
                </Link>
            )}
        </Box>
    )
}

export default ItemPreview
