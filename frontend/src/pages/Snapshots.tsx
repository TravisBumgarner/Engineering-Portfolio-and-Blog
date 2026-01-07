import { Box } from '@mui/material'
import snapshots from '../content/snapshots/index.json'
import ListItem from '../sharedComponents/ItemPreview'

const Snapshots = () => {
    return (
        <Box>
            {Object.values(snapshots).map(({ src }) => (
                <ListItem type="snapshot" key={src} src={src} />
            ))}
        </Box>
    )
}

export default Snapshots
