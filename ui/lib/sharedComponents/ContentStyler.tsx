'use client'
// For content throughout the app - blog posts, creations, etc., use a consistent set of styling.

import {
  CODE_FONT,
  FONT_SIZES,
  FONT_WEIGHTS,
  SPACING
} from '@/lib/styles/consts'
import styled from 'styled-components'

const ContentStyler = styled.div`
  > p,
  > h3,
  > h4,
  > h5,
  > ul,
  > ol {
    margin: ${SPACING.MEDIUM} 0;
  }

  code,
  blockquote,
  figure,
  .video {
    margin-bottom: ${SPACING.LARGE};
  }

  p,
  li {
    font-weight: ${FONT_WEIGHTS.REGULAR};
    line-height: ${FONT_SIZES.LARGE};
  }

  time {
    margin: ${SPACING.SMALL} 0;
    font-size: ${FONT_SIZES.SMALL};
    font-weight: ${FONT_WEIGHTS.LIGHT};
  }

  > h2 {
    font-size: ${FONT_SIZES.XLARGE};
    font-weight: ${FONT_WEIGHTS.BOLD};
    margin-top: 0;
    margin-bottom: ${SPACING.SMALL};
  }

  h3 {
    font-size: ${FONT_SIZES.LARGE};
    font-weight: ${FONT_WEIGHTS.BOLD};
  }

  h4 {
    font-size: ${FONT_SIZES.LARGER};
    font-weight: ${FONT_WEIGHTS.BOLD};
  }

  h5 {
    font-size: ${FONT_SIZES.SMALL};
    font-weight: ${FONT_WEIGHTS.BOLD};
  }

  p {
    font-size: ${FONT_SIZES.MEDIUM};
    font-weight: ${FONT_WEIGHTS.REGULAR};
  }

  a {
    color: var(--primary);
    text-decoration: none;
    font-weight: ${FONT_WEIGHTS.REGULAR};
    &:hover {
      text-decoration: underline;
    }
  }

  code,
  blockquote {
    font-weight: ${FONT_WEIGHTS.LIGHT};
    padding: ${SPACING.SMALL};
    display: block;
    font-size: ${FONT_SIZES.MEDIUM};
    font-family: ${CODE_FONT};
    background-color: var(--secondary-background);

    span.author {
      display: block;
      text-align: right;
      margin-top: ${SPACING.SMALL};
    }
  }

  code {
    overflow-x: scroll;
  }

  p > code,
  li > code,
  strong > code {
    display: inline;
    background-color: var(--secondary-background);
    padding: 0;
  }

  strong {
    font-weight: ${FONT_WEIGHTS.XBOLD};
  }

  ul,
  ol {
    margin-left: ${SPACING.MEDIUM};
  }

  li {
    font-size: ${FONT_SIZES.MEDIUM};
    margin: ${SPACING.XXSMALL};
  }
`

export default ContentStyler
