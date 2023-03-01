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
          <IconContainer style={{ left: 30 }}>
            <Icons.SvgElement.twistIcon />
          </IconContainer>
          <TextContainer>
            <GBText fontFamily="UhBeeSe_hyun" body01>
              {"우리 또 강남에서 만나?"}
            </GBText>
            <GBText fontFamily="EF_jejudoldam" display01>
              {"강남은지루해"}
            </GBText>
          </TextContainer>
          <IconContainer style={{ right: 0, top: 70 }}>
            <Icons.SvgElement.verticalRainbowIcon />
          </IconContainer>
          <IconContainer style={{ left: 14, top: 200 }}>
            <Icons.SvgElement.flowerIcon />
          </IconContainer>
          <IconContainer style={{ right: 32, top: 320 }}>
            <Icons.SvgElement.blingIcon />
          </IconContainer>
          <IconContainer style={{ top: 400 }}>
            <Icons.SvgElement.rainbowIcon />
          </IconContainer>
          <IconContainer style={{ right: 8, top: 520 }}>
            <Icons.SvgElement.cylinderIcon />
          </IconContainer>
        </Container>
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
`;

const IconContainer = styled.div`
  position: absolute;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 120px;
  text-align: center;
  vertical-align: middle;
`;
