"use client"

import ClientLayout from "@/lib/client-layout";
import StyledComponentsRegistry from "@/lib/styled-components-registry";
import { GlobalStyle, SPACING, media } from "@/lib/theme";
import { makeNewSiteTitle } from "@/lib/utilities";
import { ReactNode } from "react";
import styled from "styled-components";
import Sidebar from "./_components/Sidebar";
import SiteTitle from "./_components/SiteTitle";

const BodyWrapper = styled.div`
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

const AppWrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: ${SPACING.XXLARGE}px;

  ${media.tablet} {
    padding: ${SPACING.MEDIUM}px;
  }
`

export default function RootLayout({ children }: { children: ReactNode }) {
  const title = makeNewSiteTitle();

  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <AppWrapper>
            <GlobalStyle />
            <ClientLayout>
              <SiteTitle title={title} />
              <BodyWrapper>
                <Sidebar />
                {children}
              </BodyWrapper>
            </ClientLayout>
          </AppWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
