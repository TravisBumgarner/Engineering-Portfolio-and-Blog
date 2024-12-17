"use client";

import { ReactNode } from "react";
import { GlobalReset, GlobalStyle } from "./theme";

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <GlobalReset />
      <GlobalStyle />
      {children}
    </>
  );
}
