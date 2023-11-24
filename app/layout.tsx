"use client";

import { ThemeProvider } from "styled-components";
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
      <body>
        <ThemeProvider theme={ThemeConfig}>
          <RootStyleRegistry>{children}</RootStyleRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
