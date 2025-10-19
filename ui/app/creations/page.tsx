'use client'

import projects from '@/content/projects'
import ROUTES from '@/lib/routes'
import ListItem from '../../lib/sharedComponents/ListItem'
import styled from 'styled-components'
import { FONT_SIZES, FONT_WEIGHTS, SPACING } from '@/lib/styles/consts'
import Link from 'next/link'

const Portfolio = () => {
  return (
    <>
      <Link
        style={{ textDecoration: 'none' }}
        href="https://photopalettes.com"
        target="_blank"
      >
        <AnnouncementItem>
          <h2>Current Project: Photo Palettes</h2>
          <div>
            <p>A social platform for generating color palettes from photos.</p>
            <p>
              Tools & Technologies: React, FastAPI, Heroku, Cloudinary, Supabase
            </p>
          </div>
        </AnnouncementItem>
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

const AnnouncementItem = styled.div`
  padding: ${SPACING.MEDIUM};
  background-color: var(--bright-background);
  color: var(--foreground);
  text-decoration: none;
  margin-bottom: ${SPACING.LARGE};

  div {
    flex-direction: column;
    display: flex;
    gap: ${SPACING.SMALL};
  }

  h2 {
    font-size: ${FONT_SIZES.LARGE};
    font-weight: ${FONT_WEIGHTS.BOLD};
    margin-top: 0;
    margin-bottom: ${SPACING.SMALL};
  }
`

export default Portfolio
