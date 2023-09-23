import React from "react";
import Head from "next/head";
import styled, { keyframes } from "styled-components";

import GBLayout from "@/components/base/GBLayout";
import { Icons } from "@/public/icon";
import DirectionButton from "../components/home/DirectionButton";
import MenuTab from "@/components/home/MenuTab";
import RandomTabContainer from "@/container/RandomTabContainer";

export default function Home() {
  const iconList = [
    {
      style: { right: 0, top: 70 },
      icon: <Icons.SvgElement.verticalRainbowIcon />,
    },
    {
      style: { left: 14, top: 200 },
      icon: <Icons.SvgElement.flowerIcon />,
    },
    {
      style: { right: 8, top: 520 },
      icon: <Icons.SvgElement.cylinderIcon />,
    },
    {
      style: { right: 32, top: 320 },
      icon: <Icons.SvgElement.blingIcon />,
    },
    {
      style: { top: 400 },
      icon: <Icons.SvgElement.rainbowIcon />,
    },
  ];

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
        <Container>
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
          <MenuTab list={tabList} onClick={handleClickTab} />
        </Container>
        <RandomTabContainer />
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
