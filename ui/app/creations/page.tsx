'use client'

import projects from '@/content/projects'
import ROUTES from '@/lib/routes'
import ListItem from '../../lib/sharedComponents/ListItem'
import { FONT_SIZES, FONT_WEIGHTS, SPACING } from '@/lib/styles/consts'
import Link from '@/lib/sharedComponents/Link'
import { Typography, Box } from '@mui/material'

const Portfolio = () => {
  return (
    <>
      <Link
        style={{ textDecoration: 'none' }}
        href="https://photopalettes.com"
        target="_blank"
      >
        <Box
          sx={{
            padding: SPACING.MEDIUM.PX,
            backgroundColor: 'var(--bright-background)',
            color: 'var(--foreground)',
            textDecoration: 'none',
            marginBottom: SPACING.LARGE.PX,
            '& > div': {
              flexDirection: 'column',
              display: 'flex',
              gap: SPACING.SMALL.PX,
            },

          }}
        >
          <Typography sx={{
            fontSize: FONT_SIZES.LARGE,
            fontWeight: FONT_WEIGHTS.BOLD,
            marginTop: 0,
            marginBottom: SPACING.SMALL.PX,
          }} variant="h2">Current Project: Photo Palettes</Typography>
          <div>
            <Typography>A social platform for generating color palettes from photos.</Typography>
            <Typography>
              Tools & Technologies: React, FastAPI, Heroku, Cloudinary, Supabase
            </Typography>
          </div>
        </Box>
      </Link>
      {Object.values(projects)
        .sort((a, b) =>
          a.lastMeaningfulUpdate > b.lastMeaningfulUpdate ? -1 : 1
        )
        .map(
          (
            { id, title, previewImage, lastMeaningfulUpdate, description },
            index
          ) => {
            return (
              <ListItem
                type="creation"
                priority={index === 0}
                key={id}
                description={description}
                link={`${ROUTES.CREATIONS.path}/${id}`}
                title={title}
                date={lastMeaningfulUpdate}
                src={
                  previewImage && `/project-resources/${id}/${previewImage.src}`
                }
              />
            )
          }
        )}
    </>
  )
}

export default Portfolio
