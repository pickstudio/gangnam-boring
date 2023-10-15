"use client"
import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import styled, { keyframes } from "styled-components";

import GBLayout from "@/components/base/GBLayout";
import { Icons } from "@/public/icon";
import DirectionButton from "../components/home/DirectionButton";
import MenuTab from "@/components/home/MenuTab";
import RandomTabContainer from "@/container/RandomTabContainer";
import RecommendTabContainer from "@/container/RecommendTabContainer";

export default function Home() {
  const [currentTab, setCurrentTab] = useState<number>(0);
  const option1Ref = useRef<HTMLDivElement | null>(null);

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

  return (
    <React.Fragment>
      <Head>
        <title>{"강남은 지루해"}</title>
      </Head>
      <GBLayout header headerRightIcon>
        <Container ref={option1Ref}>
          <TextContainer>
            <TitleBox>
              <Icons.SvgElement.subTitleImage />
            </TitleBox>
            <ImageContainer>
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
        </Container>
        {currentTab === 0 ? <RandomTabContainer /> : <RecommendTabContainer />}
      </GBLayout>
    </React.Fragment>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
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

const IconContainer = styled.div<{ direction?: number }>`
  position: absolute;
  animation: ${({ direction }) => (direction === 1 ? moveLeft : moveRight)} 10s
    1s infinite linear alternate;
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

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 46px;
  box-sizing: border-box;
`;
