import {
    CANDLELIGHT_DESCRIPTION,
    CANDLELIGHT_IMAGE,
    CANDLELIGHT_TITLE,
    FAST_CLASSIFIEDS_DESCRIPTION,
    FAST_CLASSIFIEDS_IMAGE,
    FAST_CLASSIFIEDS_TITLE,
    IDEAS_DESCRIPTION,
    IDEAS_IMAGE,
    IDEAS_TITLE,
    TODO_DESCRIPTION,
    TODO_IMAGE,
    TODO_TITLE,
} from '@common/core'
import { Box } from '@mui/material'
import ItemPreview from '../../sharedComponents/ItemPreview'

const Marketing = () => {
    return (
        <Box>
            <ItemPreview

                type="marketing"
                title={FAST_CLASSIFIEDS_TITLE}
                description={FAST_CLASSIFIEDS_DESCRIPTION}
                src={FAST_CLASSIFIEDS_IMAGE}
                link="/marketing/classifieds"
            />
            <ItemPreview

                type="marketing"
                title={IDEAS_TITLE}
                description={IDEAS_DESCRIPTION}
                src={IDEAS_IMAGE}
                link="/marketing/ideas"
            />
            <ItemPreview

                type="marketing"
                title={CANDLELIGHT_TITLE}
                description={CANDLELIGHT_DESCRIPTION}
                src={CANDLELIGHT_IMAGE}
                link="/marketing/candlelight"
            />
            <ItemPreview

                type="marketing"
                title={TODO_TITLE}
                description={TODO_DESCRIPTION}
                src={TODO_IMAGE}
                link="/marketing/todo"
            />
        </Box>
    )
}

export default Marketing
