import ClientLayout from "@/lib/client-layout";
import StyledComponentsRegistry from "@/lib/styled-components-registry";
import { makeNewSiteTitle } from "@/lib/utilities";
import { ReactNode } from "react";
import SiteTitle from "./_components/SiteTitle";

import type { Metadata } from 'next';
import Sidebar from './_components/Sidebar';
import { AppWrapper, BodyWrapper } from './layout.client';

export const metadata: Metadata = {
  title: 'Travis Bumgarner',
  description: 'I am a lifelong learner, creator, explorer, and tinkerer. This is a collection of my experiences.',
  openGraph: {
    images: ["https://storage.googleapis.com/eng42-asdsad/public/me.png",]
  }
}


export default function RootLayout({ children }: { children: ReactNode }) {
  const title = makeNewSiteTitle();
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <AppWrapper>
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
