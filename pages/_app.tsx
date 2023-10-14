import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import ThemeConfig from "@/config/styles/theme";
import "@/styles/reset.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => storePathValues, [router.asPath]);

  function storePathValues() {
    const storage = globalThis?.sessionStorage;
    if (!storage) return;
    // Set the previous path as the value of the current path.
    const prevPath = storage.getItem("currentPath");
    storage.setItem("prevPath", prevPath || "/");
    // Set the current path value by looking at the browser's location object.
    storage.setItem("currentPath", globalThis.location.pathname);
  }
  return (
    <ThemeProvider theme={ThemeConfig}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
