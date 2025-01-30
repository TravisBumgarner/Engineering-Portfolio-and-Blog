"use client";

import { ReactNode } from "react";
import { GlobalStyle } from "./theme";

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}
