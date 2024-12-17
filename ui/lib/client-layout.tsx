"use client";

import { ReactNode } from "react";
import { GlobalReset, GlobalStyle } from "./theme";

// const theme: DefaultTheme = {
//   colors: {
//     primary: "#111",
//     secondary: "#0070f3",
//   },
// };

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <GlobalReset />
      <GlobalStyle />
      {children}
    </>
  );
}
