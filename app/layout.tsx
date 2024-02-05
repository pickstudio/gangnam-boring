"use client";

import { ThemeProvider } from "styled-components";
import { RecoilRoot } from "recoil";

import RootStyleRegistry from "../lib/utils/server/RootStyleRegistry";
import ThemeConfig from "../config/styles/theme";

import "../styles/reset.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <RecoilRoot>
          <RootStyleRegistry>
            <ThemeProvider theme={ThemeConfig}>{children}</ThemeProvider>
          </RootStyleRegistry>
        </RecoilRoot>
      </body>
    </html>
  );
}
