import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import { useMemo } from 'react'
import { ABOUT_ME_SENTENCE_1, ABOUT_ME_SENTENCE_2 } from '@common/core'
import Link from '../sharedComponents/Link'
import { SPACING } from '../styles/consts'

export const makeNewSiteTitle = () => {
  const VALID_FILE_SUFFIX = ['proto', 'test', 'sample', 'mockup', 'demo', 'final', 'draft']

  const VALID_FILE_SUFFIX_2 = ['', '(1)', '(2)', '3', '4', '(5)', '_final', '_v2', 'v4']

  const VALID_FILE_TYPES = [
    'cpp', // c++
    'css', // css
    'dxf', // dxf
    'html', // html
    'json', // json
    'js', // javascript
    'pde', // processing
    'fig', // figure
    'psd', // photoshop
    'py', // python
    'scss', // scss
    'sh', // shell
    'dng', // dng
    'tsx', // typescript
    'nef', // nef
    'jpeg', // jpeg
    'tiff', // tiff
    'pdf', // pdf,
    'aseprite',
    'sketch',
    'md',
    'mp4',
  ]
  const RANDOM_FILE_TYPE = VALID_FILE_TYPES[Math.floor(Math.random() * VALID_FILE_TYPES.length)]
  const RANDOM_FILE_SUFIX = VALID_FILE_SUFFIX[Math.floor(Math.random() * VALID_FILE_SUFFIX.length)]
  const RANDOM_FILE_SUFFIX_2 = VALID_FILE_SUFFIX_2[Math.floor(Math.random() * VALID_FILE_SUFFIX_2.length)]

  return `travis_bumgarner_${RANDOM_FILE_SUFIX}${RANDOM_FILE_SUFFIX_2}.${RANDOM_FILE_TYPE}`
}


const SiteTitle = () => {
  const siteTitle = useMemo(() => makeNewSiteTitle(), [])

  return (
    <Box
      sx={{
        py: SPACING.LARGE.PX,
        mt: { xs: SPACING.SMALL.PX, md: 0 },
      }}
    >
      <Link type="inline" href="/">
        <Typography variant="h1" sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '3rem' } }}>{siteTitle}</Typography>
      </Link>
      <Typography>
        {ABOUT_ME_SENTENCE_1}
        <br />
        {ABOUT_ME_SENTENCE_2}
      </Typography>
    </Box>
  )
}

export default SiteTitle
