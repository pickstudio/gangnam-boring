"use client";

import React from "react";
import styled from "styled-components";

import Header from "@/components/base/Header";

interface IProps {
  children: React.ReactNode;
  header?: boolean;
  logo?: boolean;
  bottomNavigation?: boolean;
  headerLeftIcon?: boolean;
  headerRightIcon?: boolean;
  headerMyPageIcon?: boolean;
  backgroundColor?: string;
}

function GBLayout({
  children,
  header,
  logo,
  bottomNavigation,
  headerLeftIcon,
  headerRightIcon,
  headerMyPageIcon,
  backgroundColor,
}: IProps): React.ReactElement {
  React.useEffect(() => {
    function resizeHeightForIOS() {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }

    resizeHeightForIOS();
    window.addEventListener("resize", resizeHeightForIOS);

    return () => {
      window.addEventListener("resize", resizeHeightForIOS);
    };
  }, []);

  return (
    <Container backgroundColor={backgroundColor ?? "#fff"}>
      {header && (
        <Header
          headerLeftIcon={headerLeftIcon}
          headerRightIcon={headerRightIcon}
          headerMyPageIcon={headerMyPageIcon}
          logo={logo}
        />
      )}
      <ContentContainer>{children}</ContentContainer>
    </Container>
  );
}

export default GBLayout;

const Container = styled.div<{ backgroundColor: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  margin: 0 auto;
  box-sizing: border-box;
  overflow: hidden;
  background-color: ${(props) => props.backgroundColor};
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: overlay;
  box-sizing: border-box;
  max-width: 768px;
  width: 100%;
  height: 100%;
  ::-webkit-scrollbar {
    display: none;
  }
`;
