"use client"

import { MAX_APP_WIDTH } from "@/lib/consts";
import { SPACING, media } from "@/lib/theme";
import styled from "styled-components";

export const BodyWrapper = styled.div`
  padding-top: ${SPACING.XXLARGE}px;
  display: flex;

  ${media.tablet} {
    padding-top: ${SPACING.MEDIUM}px;
  }

  > div:first-child {
    flex-shrink: 0;
    top: ${SPACING.XLARGE}px;
    position: sticky;
    width: 200px;
    height: 100%;
    padding-right: ${SPACING.XXLARGE}px;
    box-sizing: border-box;

    ${media.tablet} {
      padding-right: ${SPACING.MEDIUM}px;
      width: 100px;

      h3 {
        margin-top: 0;
      }
    }
  }

  > div:last-child {
    flex-grow: 1;
  }
`

export const AppWrapper = styled.div`
  max-width: ${MAX_APP_WIDTH}px;
  margin: 0 auto;
  padding: ${SPACING.XXLARGE}px;

  ${media.tablet} {
    padding: ${SPACING.MEDIUM}px;
  }
`
