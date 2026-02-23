import { Box, List, ListItem, Typography } from '@mui/material'
import { SPACING } from '../../../styles/consts'

interface BenefitsListProps {
  title?: string
  items: string[]
}

const BenefitsList = ({ title, items }: BenefitsListProps) => {
  return (
    <Box sx={{ mb: SPACING.LARGE.PX }}>
      {title && (
        <Typography variant="h3" sx={{ mb: SPACING.SMALL.PX }}>
          {title}
        </Typography>
      )}
      <List>
        {items.map((item) => (
          <ListItem key={item}>{item}</ListItem>
        ))}
      </List>
    </Box>
  )
}

export default BenefitsList
