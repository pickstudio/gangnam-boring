"use client";

import { useServerInsertedHTML } from "next/navigation";

import { useStyledComponentsRegistry } from "./styled-components";

export default function RootStyleRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [StyledComponentsRegistry, styledComponentsFlushEffect] =
    useStyledComponentsRegistry();

  useServerInsertedHTML(() => <>{styledComponentsFlushEffect()}</>);

  if (typeof window !== "undefined") return <>{children}</>;

  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
}
