"use client"

import ClientLayout from "@/lib/client-layout";
import StyledComponentsRegistry from "@/lib/styled-components-registry";
import { makeNewSiteTitle } from "@/lib/utilities";
import { ReactNode } from "react";
import Sidebar from "./_components/Sidebar";
import SiteTitle from "./_components/SiteTitle";


export default function RootLayout({ children }: { children: ReactNode }) {
  const title = makeNewSiteTitle();

  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ClientLayout>
            <SiteTitle title={title} />
            <Sidebar />
            {children}
          </ClientLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
