import { GBText } from "@/components/base";
import GBLayout from "@/components/base/GBLayout";
import { Icons } from "@/public/icon";
import Head from "next/head";
import React from "react";
import styled from "styled-components";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>{"강남은 지루해"}</title>
      </Head>
      <GBLayout header headerRightIcon>
        <Container>
          <Icons.SvgElement.twistIcon />
          <TextContainer>
            <GBText>{"우리 또 강남에서 만나?"}</GBText>
            <GBText>{"강남은지루해"}</GBText>
          </TextContainer>
          <IconContainer>
            <Icons.SvgElement.verticalRainbowIcon />
          </IconContainer>
          <IconContainer margin={14}>
            <Icons.SvgElement.flowerIcon />
          </IconContainer>
          <Icons.SvgElement.blingIcon />
          <Icons.SvgElement.rainbowIcon />
          <Icons.SvgElement.cylinderIcon />
        </Container>
      </GBLayout>
    </React.Fragment>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

const IconContainer = styled.div`
  margin-left: auto;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  margin-top: 120px;
  align-self: center;
  vertical-align: middle;
`;
