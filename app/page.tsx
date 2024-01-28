"use client";

import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import styled, { keyframes } from "styled-components";

import GBLayout from "@/components/base/GBLayout";
import { Icons } from "@/public/icon";
import DirectionButton from "../components/home/DirectionButton";
import MenuTab from "@/components/home/MenuTab";
import RandomTabContainer from "@/container/RandomTabContainer";
import RecommendTabContainer from "@/container/RecommendTabContainer";
import Footer from "@/components/base/Footer";

export default function Home() {
  const [currentTab, setCurrentTab] = useState<number>(0);
  const [shouldShowLogo, setShouldShowLogo] = useState<boolean>(false);
  const [innerHeight, setInnerHeight] = useState<number>(0);
  const [departureBoxes, setDepartureBoxes] = useState<string[]>([""]);

  const contentContainerRef = useRef<HTMLDivElement>(null);

  const tabList = [
    {
      id: "0",
      label: "랜덤뽑기",
    },
    {
      id: "1",
      label: "추천받기",
    },
  ];

  const handleClickTab = () => {
    console.log("e");
  };

  const handleScrollView = () => {
    if (Number(contentContainerRef.current?.scrollTop) > 200)
      setShouldShowLogo(true);
    else setShouldShowLogo(false);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setInnerHeight(window.innerHeight);
      contentContainerRef.current?.addEventListener("scroll", handleScrollView);
      return () =>
        contentContainerRef.current?.removeEventListener(
          "scroll",
          handleScrollView
        );
    }
  }, []);

  const shareLink = () => {};

  const onClickHeaderRightIcon = () => {
    shareLink();
  };

  const handleAddDepartureBox = () => {
    setDepartureBoxes((prevDepartureBoxes) => [...prevDepartureBoxes, ""]);
  };

  const handleDeleteDepartureBox = (index: number) => {
    setDepartureBoxes((prevDepartureBoxes) =>
      prevDepartureBoxes.filter((_, i) => i !== index)
    );
  };

  return (
    <React.Fragment>
      <Head>
        <title>{"강남은 지루해"}</title>
      </Head>
      <GBLayout
        header
        logo={shouldShowLogo}
        showTitle={false}
        headerRightIcon
        onClickRightIcon={onClickHeaderRightIcon}
        color="#fff0da"
      >
        <Container ref={contentContainerRef}>
          <TextContainer>
            <TitleBox>
              <Icons.SvgElement.subTitleImage />
            </TitleBox>
            <ImageContainer $convertHeight={innerHeight}>
              <Icons.SvgElement.nomoreImage />
            </ImageContainer>
          </TextContainer>
          <ButtonContainer>
            <DirectionButton type="left" />
            <DirectionButton type="right" />
          </ButtonContainer>
          <MenuTab
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            list={tabList}
            onClick={handleClickTab}
          />
          {currentTab === 0 ? (
            <RandomTabContainer />
          ) : (
            <RecommendTabContainer
              departureBoxes={departureBoxes}
              handleAddBox={handleAddDepartureBox}
              handleDeleteBox={handleDeleteDepartureBox}
            />
          )}
          <Footer />
        </Container>
      </GBLayout>
    </React.Fragment>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: #fff0da;
  padding-top: 22px;
`;

const moveRight = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(360px);
  }
`;

const moveLeft = keyframes`
   0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-360px);
  }
`;

const TitleBox = styled.div``;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  vertical-align: middle;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
`;

const ImageContainer = styled.div<{ $convertHeight: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${(props) => props.$convertHeight / 48.5}px;

  margin-bottom: 46px;
  box-sizing: border-box;
`;
