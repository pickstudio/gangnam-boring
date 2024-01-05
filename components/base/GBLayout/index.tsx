"use client";

import React from "react";
import styled from "styled-components";

import Header from "@/components/base/Header";

interface IProps {
  children: React.ReactNode;
  header?: boolean;
  logo?: boolean;
  color?: string;
  bottomNavigation?: boolean;
  headerLeftIcon?: boolean;
  headerRightIcon?: boolean;
  headerMyPageIcon?: boolean;
  showTitle?: boolean;
  onClickLeftIcon?: () => void;
  onClickRightIcon?: () => void;
}

function GBLayout({
  children,
  header,
  logo,
  bottomNavigation,
  headerLeftIcon,
  headerRightIcon,
  headerMyPageIcon,
  color,
  showTitle = true,
  onClickLeftIcon,
  onClickRightIcon,
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
    <Container>
      <ContentContainer color={color ?? "#fff"}>
        {header && (
          <Header
            headerLeftIcon={headerLeftIcon}
            headerRightIcon={headerRightIcon}
            headerMyPageIcon={headerMyPageIcon}
            logo={logo}
            showTitle={showTitle}
            onClickLeftIcon={onClickLeftIcon}
            onClickRightIcon={onClickRightIcon}
          />
        )}
        {children}
      </ContentContainer>
    </Container>
  );
}

export default GBLayout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  margin: 0 auto;
  box-sizing: border-box;
  overflow: hidden;
`;

const ContentContainer = styled.div<{ color: string }>`
  display: flex;
  flex-direction: column;
  overflow: overlay;
  box-sizing: border-box;
  max-width: 768px;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.color};
  ::-webkit-scrollbar {
    display: none;
  }
`;
