import { CANDLELIGHT_DESCRIPTION, CANDLELIGHT_FAVICON, CANDLELIGHT_TITLE } from '@common/core'
import { Box, Typography } from '@mui/material'
import Link from '../../sharedComponents/Link'
import MarketingHeader from '../../sharedComponents/MarketingHeader'

const CandlelightPage = () => {
  return (
    <Box>
      <MarketingHeader src={CANDLELIGHT_FAVICON} title={CANDLELIGHT_TITLE} description={CANDLELIGHT_DESCRIPTION} />

      <Typography>
        <Link type="block" target="_blank" href="https://store.steampowered.com/app/3157820/Candlelight/">
          Steam Store
        </Link>
      </Typography>

      <Typography>
        Candlelight is a puzzle game where each shape you place onto the grid inverts the color of the space it
        occupies. Every inversion offers the opportunity to alchemize a gem and advance.
      </Typography>

      <Typography variant="h3">Puzzle Mode</Typography>
      <Typography>
        <strong>Solve puzzles using limited shapes.</strong>
      </Typography>
      <Typography>
        Complete 50 levels across 9 worlds, each challenging you to work with a limited number of shapes. Every move
        counts as you aim for the most efficient solution.
      </Typography>

      <Typography variant="h3">Free Play</Typography>
      <Typography>
        <strong>Unwind and play at your own pace.</strong>
      </Typography>
      <Typography>
        There is no goal here, just relax, enjoy the music, and experiment with shapes to your heart&apos;s content.
      </Typography>

      <Typography variant="h3">Daily Challenge</Typography>
      <Typography>
        <strong>Solve the daily challenge with the fewest moves.</strong>
      </Typography>
      <Typography>
        Every day brings a fresh puzzle. Compete with friends to see who can solve it using the fewest shapes.
      </Typography>

      <Typography variant="h3">Tutorial</Typography>
      <Typography>
        <strong>Master the game&apos;s basics.</strong>
      </Typography>
      <Typography>
        New to Candlelight? The tutorial will guide you through core mechanics, ensuring you&apos;re ready to tackle the
        game.
      </Typography>

      <Typography variant="h2">Get Candlelight</Typography>
      <Typography>
        <Link type="block" target="_blank" href="https://store.steampowered.com/app/3157820/Candlelight/">
          Steam Store
        </Link>
      </Typography>
    </Box>
  )
}

export default CandlelightPage
