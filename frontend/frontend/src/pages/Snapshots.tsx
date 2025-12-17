import { Box } from '@mui/material'
import snapshots from '../content/snapshots/index.json'
import ListItem from '../sharedComponents/ItemPreview'

const Snapshots = () => {
    return (
        <Box>
            {Object.values(snapshots).map(({ src }, index) => (
                <ListItem type="snapshot" key={src} src={src} priority={index === 0} />
            ))}
        </Box>
    )
}

export default Snapshots
