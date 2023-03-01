import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import ThemeConfig from "@/config/styles/theme";
import "@/styles/reset.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={ThemeConfig}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
